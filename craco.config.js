const CracoLessPlugin = require('craco-less');
const babelConfig = require('./babel.config');
module.exports = {
  babel: babelConfig,
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#13c2c2' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
