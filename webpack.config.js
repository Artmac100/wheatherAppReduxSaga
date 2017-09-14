var path = require("path");
var WebpackHtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var Copy = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: [
			"react-hot-loader/patch",
			"./src/app/root"
		],
		style: './src/styles/main'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: '/node_modules/',
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.s?css$/,
				exclude: ['/node_modules/', path.join(__dirname, 'src', 'app')],
				use: ExtractTextPlugin.extract({
					use: [
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' }
					]
				})
			}

		]
	},
	plugins: [
		new Copy([
			{ from: 'node_modules/font-awesome/fonts', to: 'assets' },
			{ from: 'node_modules/font-awesome/css/font-awesome.min.css' },
		]),
		new WebpackHtmlPlugin({
			template: "./src/index.html"
		}),
		new ExtractTextPlugin('styles.css')
	]
}