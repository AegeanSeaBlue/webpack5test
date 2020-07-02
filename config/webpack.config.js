const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dist = path.join(__dirname, '../dist');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    //about: './src/about.js'
  },
  output: {
    path: dist,
    //filename: 'bundle.js'
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
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent: (context, localIdentName, localName) => {
                  return context.resourcePath + localName;
                },
              },
            }
          },
          {
            loader: 'less-loader',
          },

        ]
      },
      /*
            {
              test: /\.css$/,
              //exclude: /node_modules/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[path][name][local]–[hash:base64:5]'
                    }
                  }
                }
              ]
            }
      */
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
      chunks: ['index']
    }),
    /*new htmlWebpackPlugin({
      filename: 'about.html',
      template: path.join(__dirname, '../public/about.html'),
      chunks: ['about']
    }),*/
  ]
};
