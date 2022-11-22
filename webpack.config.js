// webpack的配置文件
const path = require('path');

// 多页应用
module.exports = {
    entry: {
        'index': './src/page/index/index.js',
        'user': './src/page/user/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    // 优化配置
    optimization: {
        /* 
        提取公共模块
        * 下面这个配置对象代表 SplitChunksPlugin 的默认行为。 
        * https://webpack.docschina.org/plugins/split-chunks-plugin 
        */
        // splitChunks: {
        //     chunks: 'async',
        //     minSize: 20000,
        //     minRemainingSize: 0,
        //     minChunks: 1,
        //     maxAsyncRequests: 30,
        //     maxInitialRequests: 30,
        //     enforceSizeThreshold: 50000,
        //     cacheGroups: {
        //         defaultVendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10,
        //             reuseExistingChunk: true,
        //         },
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //     },
        // },
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'my-commons',
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                },
            },
        },
    },
    mode: 'development',
    module: {
        rules: [
            {
                /* 
                正则:
                '/' : 范围
                '\.': 转义符号 + . 代表所有
                '$' : 代表相对地址
                'i' : ignore大小写
                */
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};