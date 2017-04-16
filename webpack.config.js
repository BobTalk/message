let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9091,
        //内容根目录
        contentBase: './build'
    },
    //配置模块加载器
    module: {
        loaders: [
            {
                test: /\.js$/,
                //把代码转换成es5代码
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                //不扫描node_modules文件下代码
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                //style-loader此模块主要用来将演示文件插入到页面中
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot|jpg|png|gif|icon|ico)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};