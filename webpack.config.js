const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将css代码单独打包出来

const APP_PATH = path.resolve(__dirname, 'app/view');
const JS_PATH = path.resolve(__dirname, 'app/view/js');

module.exports = function(env) {
  // const {
  //   environment = 'localDev' /* localDev -- 本地开发环境；serverDev -- 测试服务器环境；pro -- 正式服务器环境 */,
  // } = env;
  return {
    entry: {
      utils: path.resolve(JS_PATH, 'utils.js'),
      index: path.resolve(JS_PATH, 'index.js'),
      home: path.resolve(JS_PATH, 'home.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'app/public/'),
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [ 'css-hot-loader' ].concat(
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [ 'css-loader', 'sass-loader' ],
            })
          ),
          include: APP_PATH,
        },
      ],
    },

    plugins: getPlugins('environment'),

    devtool: 'inline-source-map',
  };
};

const getPlugins = environment => {
  const plugins = [];

  /* 此插件将环境变量的值写入到js变量中 */
  plugins.push(
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(environment),
    })
  );

  /* 将css代码单独打包出来， */
  plugins.push(new ExtractTextPlugin('app.css'));

  return plugins;
};
