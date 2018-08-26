var path = require("path");
var webpack = require("webpack");
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
		new webpack.optimize.AggressiveSplittingPlugin({
			minSize: 30000,
			maxSize: 50000
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	],
	recordsOutputPath: path.join(__dirname, "dist", "records.json")
};
