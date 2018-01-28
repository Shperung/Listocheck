const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
	entry: './src/app.js',//точка входа
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js' // скомпилированый js
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','less-loader'],
					publicPath: '/dist'
				})
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: 'babel-loader'
			}
		]	
	},
  plugins: [
      new ExtractTextPlugin({
      	filename: 'app.css',
      	allChunks: true
      })
	  ]
	
}//end module.exports