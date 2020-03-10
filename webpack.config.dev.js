const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports =Object.assign({}, base, {
    //生产环境/开发环境
    // mode: 'production',
    mode: 'development',
    //入口
    plugins: [
        new HtmlWebpackPlugin({
            title: 'reactComponent',
            template: 'index.html'
        })
    ],   
})