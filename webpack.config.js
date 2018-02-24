const path = require('path');

module.exports = {
  entry: {
    utils: './app/view/js/utils.js',
    index: './app/view/js/index.js',
    home: './app/view/js/home.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app/public/'),
  },
};
