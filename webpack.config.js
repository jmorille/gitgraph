const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        vendors: './node_modules/gitgraph.js/build/gitgraph.js',
        index: './src/index.html'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    { loader: "html-loader", options: { minimize: false } },
                ],
            },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
        ]
    },
    devServer: {
     contentBase: './dist'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

};

module.exports = config;
