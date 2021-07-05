const path = require('path')
module.exports = {
	entry: './src/js/1.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		library: 'result',
	},
	mode:'production'
}
