const path = require('path');

module.exports = {
    entry: {
    	main: './src/main.tsx'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    performance: {
        hints: false
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js',
    },

    devServer: {
        inline: true,
        port: 8090,
        contentBase: path.join(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
	    {
	    	test: /\.tsx?$/,
		exclude: /node_modules/,
                include: /src/,
		loader: 'ts-loader'
	    }
        ]
    }
}
