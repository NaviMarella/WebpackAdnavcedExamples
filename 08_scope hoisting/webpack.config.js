var path= require('path');
var webpack = require('webpack');
const config = {
	// mode: "development" || "production",
	mode: 'development',
	entry: './08_scope hoisting/example.js',
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
		chunkFilename: "[name].js"
	},
	optimization: {
		usedExports: true,
		concatenateModules: true,
		occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	}
};
console.log(webpack(config));
module.exports = config;
