const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
	entry: './src/app.jsx',//точка входа
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js' // скомпилированый js
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
	            loader: 'postcss-loader',
	            options: {
	              config: {
	                path: path.resolve(__dirname, './postcss.config.js'),
	              },
	            },
	          },
					],
					publicPath: '/dist'
				})
			},
			{
			  test: /\.(js|jsx)$/,
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