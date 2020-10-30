const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, 
        {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, 
        {
          loader: 'postcss-loader', // Run post css actions
          
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/,
        use: [{
          loader: 'file-loader',
        }, ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'EDIN',
    //   template: path.resolve(__dirname, '/index.html'),
    // }),
  ],
};