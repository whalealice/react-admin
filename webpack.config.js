var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: path.join(__dirname, "src"), //本地服务器所加载的页面所在的目录
        port: 6060,
        // proxy:{ //重定向
        //     "/api": {
        //         target: "http://localhost:3000",
        //         pathRewrite: {"^/api" : ""}
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                loader: 'less-loader' // compiles Less to CSS
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};