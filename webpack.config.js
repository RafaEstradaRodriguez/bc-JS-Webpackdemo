const path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './assets/js/todo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "todo.js"
    },
    mode: "development",
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name]_[hash:7].[ext]',
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader' ]
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin()
    ],
    devtool: 'inline-source-map'
};
