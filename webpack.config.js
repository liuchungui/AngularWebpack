/**
 * Created by liuchungui on 16/12/4.
 */
const webpack = require("webpack");

var ENV = process.env.ENV_MODE;
var isProd = ENV == 'production';

module.exports = function makeWebpackConfig() {
    var config = {};

    //入口文件
    config.entry = {
        demoApp: "./demoApp.js",
        vendor: "./vendor.js"
    };

    config.output = {
        //生成文件的路径,__dirname是当前项目路径,与webpack.config.js同级
        path: isProd ? __dirname + '/dist' : __dirname,
        //文件名
        filename: "[name].bundle.js"
    };

    config.module = {
        //将css文件打包进去
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    };

    /**
     * Devtool配置
     */
    config.devtool = 'source-map';

    config.plugins = [
        /**
         * 此插件会自动加载jquery,解决jquery无法引用的问题
         */
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //配置环境变量
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify(process.env.ENV_MODE),
        })
    ];

    return config;

}();