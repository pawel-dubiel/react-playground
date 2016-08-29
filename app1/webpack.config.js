var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'app.bundle.js',
    },


    //  output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    //presets: ['es2015', 'react', "stage-1"],
                    presets: ['es2015', 'react'],
                    "plugins": ['transform-es2015-arrow-functions', 'transform-runtime', 'babel-plugin-transform-class-properties']
                }
            },


            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},

        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]


}