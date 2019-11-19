/**
 * Created by ChowChiKwan on 2019/08/26.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const PrerenderSPAPlugin = require('prerender-spa-plugin');

const webpackBaseConfig = require('./webpack.base.js');

const APP_PATH = resolve(__dirname, 'src');
const BUILD_PATH = resolve(__dirname, 'dist');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: BUILD_PATH,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
        canPrint: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyWebpackPlugin([
      {
        from: `${APP_PATH}/assets/`,
        to: `${BUILD_PATH}/assets/`,
      },
    ]),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new PrerenderSPAPlugin({
      staticDir: BUILD_PATH,
      routes: ['/'],
      renderer: new PrerenderSPAPlugin.PuppeteerRenderer({//这样写renderAfterTime生效了
        renderAfterTime: 5000
      }),
    }),
  ],
});
