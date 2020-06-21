process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');

// plugins
const BundleVisualizer = require('webpack-visualizer-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = env => {
    return {
        entry: {
            "bundle": "./src/init.js",
        },
        externals: [{
            "window": "window"
        }],
        output: {
            filename: "[name].js",
            chunkFilename: 'chunks/[name].[contenthash].js',
            publicPath: '/dist',
            path: path.resolve(__dirname, 'dist'),
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'initial',
                        filename: 'bundle-[name].js',
                    }
                }
            },
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    include: /(\.min\.js$|bundle-vendors.js$)/,
                    extractComments: false,
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.html$/i,
                    use: 'raw-loader',
                },
                {
                    test: require.resolve('jquery'),
                    use: [{
                            loader: 'expose-loader',
                            query: '$'
                        },
                        {
                            loader: 'expose-loader',
                            query: 'jQuery'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                jquery: "jquery"
            }),
            new BundleVisualizer(),
        ]
    };
}
