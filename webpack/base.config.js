const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['bootstrap', './app/index.js']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].bundle.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './app',
    publicPath: '/',
    watchContentBase: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // Loader for the image files
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // font-awesome
      {
        test: /font-awesome\.config\.js/,
        use: [{ loader: 'style-loader' }, { loader: 'font-awesome-loader' }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './assets/img', to: './img' }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether'
    }),
    new MiniCssExtractPlugin({
      filename: isHot ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: '[id].css'
    })
  ]
};
