/**
 * Created by ChowChiKwan on 2019/08/26.
 */
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const WebpackSftpClient = require('webpack-sftp-client');
const config = require('./webpack.dist.js');

const BUILD_PATH = resolve(__dirname, 'dist');

module.exports = webpackMerge(config, {
  plugins: [
    new WebpackSftpClient({
      port: '',
      host: '',
      username: '',
      password: '',
      path: BUILD_PATH,
      remotePath: '',
      verbose: true,
    }),
  ],
});

