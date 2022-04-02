'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');


const PATHS = {
    src: path.join(__dirname, 'src')
};

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const createLintingRule = () => ({
    test: /\.jsx?$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
});

const isProduction = () => env.DEPLOY_ENV === 'production';

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        // publicPath: isProduction() ? config.build.assetsPublicPath : config.dev.assetsPublicPath
        publicPath: config.dev.assetsPublicPath
    },
    externals: {
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
    // node: {
    //     setImmediate: false,
    //     dgram: 'empty',
    //     fs: 'empty',
    //     net: 'empty',
    //     tls: 'empty',
    //     child_process: 'empty'
    // }
};