'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        static: [path.resolve(__dirname, './static')], // since we use CopyWebpackPlugin.
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/,
                    to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
                }
            ]
        },
        compress: true,
        open: config.dev.autoOpenBrowser,
        proxy: config.dev.proxyTable,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../env/dev.env')
        }),
        new ErrorOverlayPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Jira',
            favicon: 'static/favicon.png',
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static'), to: config.dev.assetsSubDirectory },
            ],
            options: {
                concurrency: 100
            }
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        messages: [
                            `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`
                        ]
                    },
                    onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
                })
            );

            resolve(devWebpackConfig);
        }
    });
});