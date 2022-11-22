// webpack的配置文件
const path = require('path');

// 多页应用
module.exports = {
    entry: {
        'index': './src/page/index/index.js',
        'user1': './src/page/user/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};