//@ts-check
var webpack = require('webpack');
var path = require("path");
var cleanWebpackPlugin = require('clean-webpack-plugin');

/** @type webpack.Configuration**/
module.exports = {
	mode: "development", //"development" || "production",
	entry: {
		pageA: "./04_common chunk and vendor chunk/pageA",
		pageB: "./04_common chunk and vendor chunk/pageB",
		pageC: "./04_common chunk and vendor chunk/pageC"
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					reuseExistingChunk: true,
					enforce: true,
					maxInitialRequests: 4, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: '[name].js',
		chunkFilename: '[name]js',
	},
	plugins: [
		new cleanWebpackPlugin(path.join(__dirname, "dist"))
	]
};