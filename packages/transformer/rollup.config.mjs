import baseConfig from '../../configs/rollup.config.base.mjs';

const EXTRA_EXTERNALS = [/^@babel\//];

const toExternalArray = (external) => {
  if (!external) {
    return [];
  }
  return Array.isArray(external) ? external : [external];
};

export default async (commandLineArgs) => {
  const configs = await baseConfig(commandLineArgs);
  return configs.map((config) => ({
    ...config,
    external: [...toExternalArray(config.external), ...EXTRA_EXTERNALS],
  }));
};
