var path = require('path');
var cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	// mode: "development || "production",
	mode: 'none',
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
		chunkFilename: "[name].js"
	},
	entry: {
		pageA: "./07_spliting chunks/pages/a",
		pageB: "./07_spliting chunks/pages/b",
		pageC: "./07_spliting chunks/pages/c",
		pageD: "./07_spliting chunks/pages/d",
		pageE: "./07_spliting chunks/pages/e",
		pageF: "./07_spliting chunks/pages/f",
		pageG: "./07_spliting chunks/pages/g"
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			maxInitialRequests: 5, // for HTTP2
			maxAsyncRequests: 2, // for HTTP2
			minSize: 100 // for example only: chosen to match 2 modules
			// omit minSize in real use case to use the default of 30kb
		}
	},
	plugins:[
		new cleanWebpackPlugin(path.join(__dirname, 'dist')),
	]
};
