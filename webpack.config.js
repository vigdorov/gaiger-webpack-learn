const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        filename: '[chunkhash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        assetModuleFilename: 'assets/[chunkhash][ext]',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/App.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[chunkhash].css',
        }),
    ],
};
