const HthmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HthmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
