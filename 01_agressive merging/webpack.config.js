var path = require("path");
var webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
	mode: "development", //"development" || "production",
	entry: {
		pageA: "./01_agressive merging/pageA",
		pageB: "./01_agressive merging/pageB",
		pageC: "./01_agressive merging/pageC"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].[hash].bundle.js",
		chunkFilename: "[id].[hash].chunk.js"
	},
	plugins: [
		new CleanWebpackPlugin([path.join(__dirname, "dist")]),
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1.5
		})
	],
	optimization: {
		occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	}
};