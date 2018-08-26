var path = require("path");
var webpack = require("webpack");
var cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	// mode: "development || "production",
	mode: 'none',
	cache: true, // better performance for the AggressiveSplittingPlugin
	entry: "./06_Aggresive splitting/example",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[chunkhash].js",
		chunkFilename: "[chunkhash].js"
	},
	plugins: [
		new cleanWebpackPlugin(path.join(__dirname, 'dist')),
		new webpack.optimize.AggressiveSplittingPlugin({
			minSize: 10000,
			maxSize: 50000
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	],
	recordsOutputPath: path.join(__dirname, "dist", "records.json")
};
