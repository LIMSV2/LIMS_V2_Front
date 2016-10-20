var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require("path");
module.exports = {
    devtool: "source-map",
    //插件项
    plugins: [commonsPlugin, new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })],
    //页面入口文件配置
    entry: {
        index: './src/js/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.tpl$/, loader: 'html'},
            {
                test: /\.js$/,
                loaders: ['jsx-loader?harmony'],
            },
            // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.vue$/, loader: 'html'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: '/node_modules',
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            //jquery: './plugins/jquery-1.11.1.min',
            migrate: './plugins/jquery-migrate-1.2.1.min',
            bootstrap: './plugins/bootstrap.min',
            modernizr: './plugins/modernizr.min', //应用迁移辅助插件
            sparkline: './plugins/jquery.sparkline.min',//线状图插件
            toggles: './plugins/toggles.min.js',//开关样式控件
            cookies: './plugins/jquery.cookies',//cookie操作
            vue: './plugins/vue',//Vue.js
            //wizard:'./plugins/bootstrap-wizard.min',//业务流程图插件
            //jquery_ui:'./plugins/jquery-ui-1.10.3.min'//jquery-ui
        }
    }
};
