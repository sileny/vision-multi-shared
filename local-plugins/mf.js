const ModuleFederationPlugin = require('@module-federation/enhanced').ModuleFederationPlugin;
const path = require('path');

module.exports = function ({ context, registerUserConfig }) {
  const { rootDir } = context;

  registerUserConfig({
    name: 'mf2config',
    validation: 'object',
    configWebpack: (config, mf2config, context) => {
      const { publicPath, options } = mf2config;
      config
        .output.publicPath(path.resolve(rootDir, publicPath))
        .end()
        .plugin('build-plugin-module-federation-v2')
        .use(ModuleFederationPlugin, [
          { ...options }
        ]);
    },
  });
};
