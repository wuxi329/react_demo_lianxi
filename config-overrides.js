const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config);
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false; // 关闭source-map
   // alias
   config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('src')
  };
  return config;
};