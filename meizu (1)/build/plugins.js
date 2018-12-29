const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin=require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

exports.config =  [
    // 2. 分离CSS文件
    new ExtractTextPlugin('static/css/[name].css'),
    // 3. 压缩CSS
    new OptimizeCssAssetsPlugin(),
    // 4. 模块热替换
    new webpack.HotModuleReplacementPlugin(),
    // 5. 清空文件
    new CleanWebpackPlugin(["../dist"]),
    // 6. 全局引入三方库
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new webpack.ProvidePlugin({
        $: "swiper"
    }),
    // 7. 处理HTML
    new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
    }),
    //社区页面
    new HtmlWebpackPlugin({
        template: './src/pages/community.html',
        inject: true,
        chunks: ['community'],
        filename: 'static/pages/community.html'
        }),
    new HtmlWebpackPlugin({
        template: './src/pages/goods.html',
        inject: true,
        chunks: ['goods'],
        filename: 'static/pages/goods.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/media.html',
        inject: true,
        chunks: ['media'],
        filename: 'static/pages/media.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/smart.html',
        inject: true,
        chunks: ['smart'],
        filename: 'static/pages/smart.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/life.html',
        inject: true,
        chunks: ['life'],
        filename: 'static/pages/life.html'
    }),
    //服务页面
    new HtmlWebpackPlugin({
        template: './src/pages/server.html',
        inject: true,
        chunks: ['server'],
        filename: 'static/pages/server.html'
    }),
    //专卖店页面
    new HtmlWebpackPlugin({
        template: './src/pages/shop.html',
        inject: true,
        chunks: ['shop'],
        filename: 'static/pages/shop.html'
    }),
    //社区页面
    new HtmlWebpackPlugin({
        template: './src/pages/community.html',
        inject: true,
        chunks: ['community'],
        filename: 'static/pages/community.html'
    }),
    //详情页页面
    new HtmlWebpackPlugin({
        template: './src/pages/details.html',
        inject: true,
        chunks: ['details'],
        filename: 'static/pages/details.html'
    }),
    // 下载页面
    new HtmlWebpackPlugin({
        template: './src/pages/down.html',
        inject: true,
        chunks: ['down'],
        filename: 'static/pages/down.html'
    }),
    // 下载页面
    new HtmlWebpackPlugin({
        template: './src/pages/shopcarts.html',
        inject: true,
        chunks: ['shopcarts'],
        filename: 'static/pages/shopcarts.html'
    }),
    //登陆注册页面
    new HtmlWebpackPlugin({
        template: './src/pages/login.html',
        inject: true,
        chunks: ['login'],
        filename: 'static/pages/login.html'
    }),
    //影像馆页面
    new HtmlWebpackPlugin({
        template: './src/pages/photo.html',
        inject: true,
        chunks: ['photo'],
        filename: 'static/pages/photo.html'
    }),
    // json数据
    new CopyWebpackPlugin([
        {
            from:'./src/json',
            to: './static/json'
        }
    ])
]
