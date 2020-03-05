const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    //入口
    entry: {
        index: './lib/index.tsx'
    },
    //输出在哪(路径)
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'reactComponent',
        libraryTarget: 'umd'
    },
    //对输入的编译规则
    module: {
        rules: [
            {
                test: /.\tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'reactComponent',
            template: 'index.html'
        })
    ]
}