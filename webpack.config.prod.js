const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    //生产环境/开发环境
    mode: 'production',
    // mode: 'development',

    //告诉webpack哪些是外部的库
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        }
    }
})