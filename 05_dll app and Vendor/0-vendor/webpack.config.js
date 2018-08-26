var path = require("path");
var webpack = require("webpack");
var cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: "none", //development || "production",
	context: __dirname,
	entry: ["../node_modules/example-vendor"],
	output: {
		filename: "vendor.js", // best use [hash] here too
		path: path.resolve(__dirname, "dist"),
		library: "vendor_lib_[hash]"
	},
	plugins: [
		new cleanWebpackPlugin(path.join(__dirname, 'dist')),
		new webpack.DllPlugin({
			name: "vendor_lib_[hash]",
			path: path.resolve(__dirname, "dist/vendor-manifest.json")
		})
	]
};
