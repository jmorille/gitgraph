const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

const config = {
  mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
     contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({title: 'Development' })
        ]
};

module.exports = config;
