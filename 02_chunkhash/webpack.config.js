var path = require("path");
var cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	mode: "none", // "development" || "production",
	entry: {
		main: "./02_chunkhash/example"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].[chunkhash].js",
		chunkFilename: "[name].[chunkhash].js"
	},
	plugins: [
		new cleanWebpackPlugin(path.join(__dirname, 'dist'))
	]
};