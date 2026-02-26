import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import projectGitignore from './template/.gitignore?raw';
import projectIndexHtml from './template/index.html?raw';
import projectPackageJson from './template/package.json?raw';
import projectReadme from './template/README.md?raw';
import projectMainTsx from './template/src/main.tsx?raw';
import projectStyleCss from './template/src/style.css?raw';
import projectTsconfig from './template/tsconfig.json?raw';
import projectViteConfig from './template/vite.config.ts?raw';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

interface CliOptions {
  targetDir: string;
  packageManager?: PackageManager;
  installDeps: boolean;
}

interface CommandInfo {
  command: string;
  args: string[];
  display: string;
}

interface TemplateFile {
  path: string;
  content: string;
}

const PROJECT_NAME_TOKEN = '__PROJECT_NAME__';

const HELP_TEXT = `create-kt.js

Usage:
  npm create kt.js@latest [project-name] [-- --no-install] [-- --pm pnpm]
  pnpm create kt.js [project-name] [--no-install] [--pm pnpm]

Options:
  --no-install                 Skip dependency installation.
  --pm, --package-manager      npm | pnpm | yarn | bun
  -h, --help                   Show this help message.
`;

const fail = (message: string): never => {
  console.error(`\n[create-kt.js] ${message}`);
  process.exit(1);
};

const parsePackageManager = (value: string, flagName: string): PackageManager => {
  switch (value) {
    case 'npm':
    case 'pnpm':
    case 'yarn':
    case 'bun':
      return value;
    default:
      fail(`Invalid value for ${flagName}: "${value}". Expected npm | pnpm | yarn | bun.`);
  }
};

const detectPackageManager = (): PackageManager => {
  const userAgent = process.env.npm_config_user_agent ?? '';
  if (userAgent.startsWith('pnpm/')) {
    return 'pnpm';
  }
  if (userAgent.startsWith('yarn/')) {
    return 'yarn';
  }
  if (userAgent.startsWith('bun/')) {
    return 'bun';
  }
  return 'npm';
};

const getInstallCommand = (packageManager: PackageManager): CommandInfo => {
  if (packageManager === 'yarn') {
    return { command: 'yarn', args: [], display: 'yarn' };
  }
  return {
    command: packageManager,
    args: ['install'],
    display: `${packageManager} install`,
  };
};

const getDevCommand = (packageManager: PackageManager): string => {
  if (packageManager === 'npm') {
    return 'npm run dev';
  }
  return `${packageManager} dev`;
};

const parseArgs = (argv: string[]): CliOptions => {
  const options: CliOptions = {
    targetDir: 'ktjs-app',
    installDeps: true,
  };
  let hasTargetDir = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '-h' || arg === '--help') {
      console.log(HELP_TEXT);
      process.exit(0);
    }

    if (arg === '--no-install') {
      options.installDeps = false;
      continue;
    }

    if (arg === '--pm' || arg === '--package-manager') {
      const value = argv[i + 1];
      if (!value || value.startsWith('-')) {
        fail(`Missing value for ${arg}.`);
      }
      options.packageManager = parsePackageManager(value, arg);
      i += 1;
      continue;
    }

    if (arg.startsWith('--pm=')) {
      options.packageManager = parsePackageManager(arg.slice('--pm='.length), '--pm');
      continue;
    }

    if (arg.startsWith('--package-manager=')) {
      options.packageManager = parsePackageManager(arg.slice('--package-manager='.length), '--package-manager');
      continue;
    }

    if (arg.startsWith('-')) {
      fail(`Unknown option: ${arg}`);
    }

    if (hasTargetDir) {
      fail('Only one target directory can be specified.');
    }

    options.targetDir = arg;
    hasTargetDir = true;
  }

  return options;
};

const sanitizePackageName = (name: string): string => {
  const normalized = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, '-')
    .replace(/^[._-]+/, '')
    .replace(/[._-]+$/, '');
  return normalized || 'ktjs-app';
};

const applyProjectName = (source: string, packageName: string): string =>
  source.replaceAll(PROJECT_NAME_TOKEN, packageName);

const createTemplateFiles = (packageName: string): TemplateFile[] => [
  {
    path: 'package.json',
    content: applyProjectName(projectPackageJson, packageName),
  },
  {
    path: 'tsconfig.json',
    content: projectTsconfig,
  },
  {
    path: 'vite.config.ts',
    content: projectViteConfig,
  },
  {
    path: 'index.html',
    content: projectIndexHtml,
  },
  {
    path: 'src/main.tsx',
    content: projectMainTsx,
  },
  {
    path: 'src/style.css',
    content: projectStyleCss,
  },
  {
    path: '.gitignore',
    content: projectGitignore,
  },
  {
    path: 'README.md',
    content: applyProjectName(projectReadme, packageName),
  },
];

const ensureTargetDir = (targetDir: string, displayDir: string): void => {
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
    return;
  }

  const files = readdirSync(targetDir);
  if (files.length > 0) {
    fail(`Target directory "${displayDir}" is not empty.`);
  }
};

const writeTemplateFiles = (projectRoot: string, files: TemplateFile[]): void => {
  for (const file of files) {
    const filePath = path.join(projectRoot, file.path);
    mkdirSync(path.dirname(filePath), { recursive: true });
    writeFileSync(filePath, file.content, 'utf-8');
  }
};

const installDependencies = (packageManager: PackageManager, cwd: string): boolean => {
  const installCommand = getInstallCommand(packageManager);
  console.log(`\nInstalling dependencies with ${installCommand.display}...`);
  const result = spawnSync(installCommand.command, installCommand.args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  return result.status === 0;
};

const run = (): void => {
  const options = parseArgs(process.argv.slice(2));
  const packageManager = options.packageManager ?? detectPackageManager();
  const cwd = process.cwd();
  const projectRoot = path.resolve(cwd, options.targetDir);
  const displayDir = path.relative(cwd, projectRoot) || '.';
  const packageName = sanitizePackageName(path.basename(projectRoot));

  ensureTargetDir(projectRoot, displayDir);
  writeTemplateFiles(projectRoot, createTemplateFiles(packageName));

  console.log(`\nScaffolded KT.js project in ${displayDir}.`);

  let installed = false;
  if (options.installDeps) {
    installed = installDependencies(packageManager, projectRoot);
    if (!installed) {
      console.warn('\n[create-kt.js] Dependency installation failed. You can run it manually.');
    }
  }

  console.log('\nNext steps:');
  if (displayDir !== '.') {
    console.log(`  cd ${displayDir}`);
  }
  if (!installed) {
    console.log(`  ${getInstallCommand(packageManager).display}`);
  }
  console.log(`  ${getDevCommand(packageManager)}`);
};

run();
