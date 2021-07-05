const path = require('path')
module.exports = {
	// entry: ['./src/js/1.js','./src/js/2.js'],
	entry: {
		result: './src/js/1.js',
		hello: './src/js/2.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'bundle.js',
		filename: '[name].js',
		// library: 'result',
	},
	mode: 'production',
}
