var webpack = require('webpack');
var path = require('path');



module.exports = {
    entry: "./app.js",
    output: {
        filename: "public/bundle.js"
    },
    node: {
        fs: "empty",
        net: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {

                }
            }
        ]
    },
    resolveLoader: {
        modulesDirectories: [
            path.join(__dirname, "node_modules")
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
}