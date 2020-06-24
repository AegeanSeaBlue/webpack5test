const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dist = path.join(__dirname, '../dist');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    hot: true,
    compress: true,
    open: true,
    contentBase: dist,
    noInfo: false,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },

        ]
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html')
    }),
  ]
};
