var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
        publicPath: './',
        path: path.join(__dirname, 'build'),
        filename: '[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel'
      },{
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader'
      }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
            template: './index.html',
            files: {
                css: ['./style/style.css'],
            }
      }),
      new webpack.ProvidePlugin({
        "React": "react",
      }),
      new CopyWebpackPlugin([
          { from: './style/**/*', to: '.'},
      ]),
    ]
};
