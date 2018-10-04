var path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: [
      './src/js/index.js',
    ],
    output: {
        path: __dirname + '/dist/js',
        filename: 'index.js'
    },
    plugins: [
  	  	new MinifyPlugin({}, { comments: false }),
	    new webpack.ProvidePlugin({
	        $: "jquery",
	        jQuery: "jquery",
	        "window.jQuery": "jquery"
	    })],
};
