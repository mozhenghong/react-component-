const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //生产环境/开发环境
    // mode: 'production',
    // mode: 'development',
    //入口
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'reactComponent',
    //         template: 'index.html'
    //     })
    // ],
    
    //告诉webpack哪些是外部的库
    // externals: {
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     }
    // }
}