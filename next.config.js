const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = withCSS(
  withSass({
    webpack(config) {
      config.module.rules.push(
        ...[
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
          }
        ]
      );

      config.plugins.push(
        ...[
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: 'tether'
          })
        ]
      );

      return config;
    },

    async exportPathMap(defaultPathMap, { dev, dir, outDir }) {
      const pathMap = {
        '/': { page: '/' }
      };
      if (dev) {
        return pathMap;
      }

      await copyFile(join(dir, 'CNAME'), join(outDir, 'CNAME'));
      await copyFile(
        join(dir, 'google907c0d9d98a134c7.html'),
        join(outDir, 'google907c0d9d98a134c7.html')
      );
      return pathMap;
    }
  })
);
