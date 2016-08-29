var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: './',
		filename: 'index.min.js',
	},
	devServer: {
		inline: true,
		port: 3333,
	},
	module: {
		loaders: [{
			text: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
			},
		}],
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
}