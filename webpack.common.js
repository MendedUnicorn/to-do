var HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');


module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
  },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html"
  })],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
      ]
  }
};