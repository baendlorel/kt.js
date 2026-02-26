import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { createInterface } from 'node:readline/promises';

import projectGitignore from './template/.gitignore?raw';
import projectIndexHtml from './template/index.html?raw';
import projectPackageJson from './template/package.json?raw';
import projectReadme from './template/README.md?raw';
import projectMainTsx from './template/src/main.tsx?raw';
import projectStyleCss from './template/src/style.css?raw';
import projectTsconfig from './template/tsconfig.json?raw';
import projectViteIE11Config from './template/vite.ie11.config.ts?raw';
import projectViteConfig from './template/vite.config.ts?raw';
import icon from '../../../assets/ktjs-0.0.1.svg?raw';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

interface CliOptions {
  targetDir: string;
  targetDirSpecified: boolean;
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

interface ProjectSetup {
  projectName: string;
  targetDir: string;
  useMui: boolean;
  supportIE11: boolean;
}

const PROJECT_NAME_TOKEN = '__PROJECT_NAME__';

const HELP_TEXT = `create-kt.js

Usage:
  npm create kt.js@latest [project-dir] [-- --no-install] [-- --pm pnpm]
  pnpm create kt.js [project-dir] [--no-install] [--pm pnpm]

Prompts:
  1. projectName (written to package.json name)
  2. whether to include @ktjs/mui
  3. whether to support IE11 (default no)

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
    targetDirSpecified: false,
    installDeps: true,
  };

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

    if (options.targetDirSpecified) {
      fail('Only one target directory can be specified.');
    }

    options.targetDir = arg;
    options.targetDirSpecified = true;
  }

  return options;
};

const parseYesOrNo = (value: string, defaultValue: boolean): boolean | null => {
  const normalized = value.trim().toLowerCase();
  if (!normalized) {
    return defaultValue;
  }
  if (normalized === 'y' || normalized === 'yes') {
    return true;
  }
  if (normalized === 'n' || normalized === 'no') {
    return false;
  }
  return null;
};

const isValidPackageName = (name: string): boolean =>
  /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(name);

const getDefaultProjectName = (targetDir: string): string => {
  const normalized = targetDir.trim();
  if (!normalized || normalized === '.') {
    return 'ktjs-app';
  }
  return path.basename(normalized);
};

const inferTargetDir = (projectName: string, options: CliOptions): string => {
  if (options.targetDirSpecified) {
    return options.targetDir;
  }
  if (projectName.startsWith('@') && projectName.includes('/')) {
    const [, name] = projectName.split('/');
    return name || 'ktjs-app';
  }
  return projectName;
};

const promptProjectSetup = async (options: CliOptions): Promise<ProjectSetup> => {
  const defaultProjectName = getDefaultProjectName(options.targetDir);
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    let projectName = '';
    while (!projectName) {
      const answer = (await rl.question(`Project name (${defaultProjectName}): `)).trim();
      const nextProjectName = answer || defaultProjectName;
      if (!isValidPackageName(nextProjectName)) {
        console.log(`[create-kt.js] "${nextProjectName}" is not a valid npm package name.`);
        continue;
      }
      projectName = nextProjectName;
    }

    let useMui = false;
    while (true) {
      const answer = await rl.question('Use @ktjs/mui? (y/N): ');
      const parsed = parseYesOrNo(answer, false);
      if (parsed === null) {
        console.log('[create-kt.js] Please answer with y/yes or n/no.');
        continue;
      }
      useMui = parsed;
      break;
    }

    let supportIE11 = false;
    while (true) {
      const answer = await rl.question('Support IE11? (y/N): ');
      const parsed = parseYesOrNo(answer, false);
      if (parsed === null) {
        console.log('[create-kt.js] Please answer with y/yes or n/no.');
        continue;
      }
      supportIE11 = parsed;
      break;
    }

    return {
      projectName,
      targetDir: inferTargetDir(projectName, options),
      useMui,
      supportIE11,
    };
  } finally {
    rl.close();
  }
};

const applyProjectName = (source: string, packageName: string): string => source.replaceAll(PROJECT_NAME_TOKEN, packageName);

const toStringMap = (value: unknown): Record<string, string> => {
  const out: Record<string, string> = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return out;
  }
  for (const [entryName, entryValue] of Object.entries(value)) {
    if (typeof entryValue === 'string') {
      out[entryName] = entryValue;
    }
  }
  return out;
};

const createPackageJson = (projectName: string, useMui: boolean, supportIE11: boolean): string => {
  const packageJson = JSON.parse(projectPackageJson) as {
    name?: string;
    dependencies?: unknown;
    devDependencies?: unknown;
  };

  packageJson.name = projectName;

  const dependencies = toStringMap(packageJson.dependencies);
  const devDependencies = toStringMap(packageJson.devDependencies);

  if (useMui) {
    dependencies['@ktjs/mui'] = 'latest';
  }

  if (supportIE11) {
    dependencies['core-js'] = 'latest';
    devDependencies['@ktjs/babel-plugin-ktjsx'] = 'latest';
    devDependencies['@vitejs/plugin-legacy'] = 'latest';
    devDependencies['@babel/preset-env'] = 'latest';
    devDependencies['@babel/preset-typescript'] = 'latest';
    devDependencies['vite-plugin-babel'] = 'latest';
  }

  packageJson.dependencies = dependencies;
  packageJson.devDependencies = devDependencies;

  return `${JSON.stringify(packageJson, null, 2)}\n`;
};

const createTemplateFiles = (projectName: string, useMui: boolean, supportIE11: boolean): TemplateFile[] => [
  {
    path: 'package.json',
    content: createPackageJson(projectName, useMui, supportIE11),
  },
  {
    path: 'tsconfig.json',
    content: projectTsconfig,
  },
  {
    path: 'vite.config.ts',
    content: supportIE11 ? projectViteIE11Config : projectViteConfig,
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
    path: 'src/logo.svg',
    content: icon,
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
    content: applyProjectName(projectReadme, projectName),
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

const run = async (): Promise<void> => {
  const options = parseArgs(process.argv.slice(2));
  const packageManager = options.packageManager ?? detectPackageManager();
  const setup = await promptProjectSetup(options);

  const cwd = process.cwd();
  const projectRoot = path.resolve(cwd, setup.targetDir);
  const displayDir = path.relative(cwd, projectRoot) || '.';

  ensureTargetDir(projectRoot, displayDir);
  writeTemplateFiles(projectRoot, createTemplateFiles(setup.projectName, setup.useMui, setup.supportIE11));

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

void run().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  fail(message);
});
