const path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './assets/js/TodoApp.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "todo_app.js"
    },
    mode: "development",
    plugins: [
        new WebpackNotifierPlugin()
    ]
};
