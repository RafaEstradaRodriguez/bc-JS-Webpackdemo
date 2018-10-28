const path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './assets/js/todo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "todo.js"
    },
    mode: "development",
    plugins: [
        new WebpackNotifierPlugin()
    ],
    devtool: 'inline-source-map'
};
