const webpack = require("webpack");

const BASE_PATH = "/";

module.exports = {
  devServer: {
    proxy: {
      // proxy all requests starting with /api to local server
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  },
  publicPath: BASE_PATH,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        BASE_PATH: "'" + BASE_PATH + "'"
      })
    ],
    performance: {
      hints: false
    },
    devServer: {
      open:true
    },
  },
  transpileDependencies: ['vuex-module-decorators'],
};