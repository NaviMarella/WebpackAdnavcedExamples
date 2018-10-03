var path = require('path');
var webpack = require('webpack');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');

class FileListPlugin {
	apply(compiler) {
		// emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
		compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
			// Create a header string for the generated file:
			var filelist = 'In this build:\n\n';

			// Loop through all compiled assets,
			// adding a new line item for each filename.
			for (var filename in compilation.assets) {
				filelist += '- ' + filename + '\n';
			}

			// Insert this list into the webpack build as a new file asset:
			compilation.assets['filelist.md'] = {
				source: function () {
					return filelist;
				},
				size: function () {
					return filelist.length;
				}
			};

			console.log(compilation.assets);

			callback();
		});
	}
}

module.exports = {
	mode: 'none', //development || "production",
	context: __dirname,
	entry: ['../node_modules/example-vendor'],
	output: {
		filename: 'vendor.js', // best use [hash] here too
		path: path.resolve(__dirname, 'dist'),
		library: 'vendor_lib_[hash]'
	},
	plugins: [
		new cleanWebpackPlugin(path.join(__dirname, 'dist')),
		new webpack.DllPlugin({
			name: 'vendor_lib_[hash]',
			format: true,
			path: path.resolve(__dirname, 'dist/vendor-manifest.json')
		}),
		new FileListPlugin(),
		new SimpleProgressPlugin()
	]
};