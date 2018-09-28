var path = require("path");
var webpack = require("webpack");
var cleanWebpackPlugin = require('clean-webpack-plugin');

// A JavaScript class.
class MyExampleWebpackPlugin {
	// Define `apply` as it's prototype method which is supplied with compiler as it's argument
	apply(compiler) {
		// Specify the event hook to attach to
		compiler.hooks.compile.tap(
			'MyExampleWebpackPlugin',
			(compilation, callback) => {
				console.log('This is an example plugin!');
				console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
				console.log(compilation, callback);

				callback();
			}
		);
	}
}

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
		}),
		new MyExampleWebpackPlugin()
	]
};