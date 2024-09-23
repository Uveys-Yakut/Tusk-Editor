const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        editor: './src/editor.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js/'),
        clean: false,
        publicPath: './js/',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer"),
                                    require("cssnano")({ preset: 'default' })
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer"),
                                    require("cssnano")({ preset: 'default' })
                                ]
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../assets/fonts/[name][ext]'
                },
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../assets/css/[name].css',
        }),
    ],
    mode: 'development',
};
