// 模块引入
const path    = require('path');
const Entry   = require('./entry');
const Loader  = require('./loader');
const Plugins = require('./plugins');
const Server  = require('./devServer');
// 导出配置
module.exports = {
    // 重新设置入口路径
    context: path.resolve(__dirname, "../"),
    // 打包模式
    mode: 'development',
    // 入口
    entry: Entry.config,
    // 出口
    output: {
        // 路径
        path: path.resolve(__dirname, "../dist/"),
        // 文件名
        filename: 'static/js/[name].js',
        publicPath: "http://localhost:8081/"
    },
    // 加载器
    module: {rules: Loader.config},
    plugins: Plugins.config,
    devServer: Server.config,
    resolve: {
        alias: {
            "index-less": path.resolve(__dirname, '../src/less/index.less')
        }
    }
};
