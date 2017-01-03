'use strict';
module.exports = {
    context: __dirname + '/app',
    entry: './app',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve:{
        root: __dirname,
        extensions: ['', '.js', '.jsx']

    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }

};