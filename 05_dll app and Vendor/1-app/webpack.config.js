var path = require("path");
var webpack = require("webpack");

module.exports = {
	// mode: "development" || "production",
	mode: "none",
	context: __dirname,
	entry: "./example-app",
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: ".",
			manifest: require("../0-vendor/dist/vendor-manifest.json") // eslint-disable-line
		})
	]
};
