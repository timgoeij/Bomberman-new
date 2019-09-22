const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: './src/main.js',

    target: 'node',

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    externals: ["uws"]
}