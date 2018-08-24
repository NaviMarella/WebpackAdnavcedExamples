var path = require("path");
var cleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development", // "development" || "production",
    entry: "./03_codesplitting css bundle/example",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.png$/,
                use: [
                    'url-loader'
                ]
            }
        ],
    },
    plugins: [
        new cleanWebpackPlugin(path.join(__dirname, 'dist')),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};