const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = [
    {
        name: 'client',
        entry: {
            main: './src/client/infrastructure/main.tsx'
        },
        devtool: 'inline-source-map',
        mode: 'development',
        performance: {
            hints: false
        },

        output: {
            path: path.join(__dirname, 'dist', 'public'),
            filename: '[name].bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    include: /src\/client/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    include: /src\/client/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.png$/,
                    exclude: /node_modules/,
                    include: /src\/client/,
                    loader: 'file-loader'
                }
            ]
        }
    },
    {
        name: 'server',
        target: 'node',
        mode: 'development',
        externals: [nodeExternals()],
        entry: {
            main: './src/server/server.ts'
        },
        output: {
            path: path.join(__dirname, 'dist', 'server'),
            filename: 'server.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    include: /src\/server/,
                    loader: 'ts-loader'
                }
            ]
        }
    }
]
