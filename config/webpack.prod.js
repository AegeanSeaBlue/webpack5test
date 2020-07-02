const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const UselessFile = require('useless-files-webpack-plugin');
let dist = path.join(__dirname, '../dist');
const {ANA} = process.env;
const {EDITION} = require('../src/env.json');

if (EDITION) {
  dist = path.join(__dirname, '../distAna');
}


let getPlugins = () => {
  let plugins = [
    new CleanWebpackPlugin({dry: true}),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/prod.html'),
      chunks: ['index']
    }),
    /*new htmlWebpackPlugin({
      filename: 'aboutprod.html',
      template: path.join(__dirname, '../public/aboutprod.html'),
      chunks: ['about']
    }),*/
    new MiniCssExtractPlugin({
      filename: '[name][hash].css',
      chunkFilename: '[id][chunkhash].css'
    }),
    new OptimizeCssAssetsPlugin()
  ];
  if (ANA) {
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}));
    /*plugins.push(new UselessFile(
      {
        root: '../src', // 项目目录
        out: './fileList.json', // 输出文件列表
        clean: false,// 删除文件,
        //exclude: ['../public'] // 排除文件列表, 格式为文件路径数组
      }
    ));*/
  }
  return plugins;
};
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    //about: './src/about.js'
  },
  output: {
    path: dist,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    //'react-router-dom': 'ReactRouterDom',
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
        test: /\.css$/,
        //exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
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
            /*options: {
              javascriptEnabled: true
            }*/
          }
        ]
      },
    ]
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true
        },
        antd: {
          name: 'antd',
          chunks: 'all',
          priority: 13,
          test: /[\\/]node_modules[\\/](antd|@ant-design|rc-.*)/
        },
        rxjs: {
          name: 'rxjs',
          chunks: 'all',
          priority: 13,
          test: /[\\/]node_modules[\\/](rxjs)/
        },
        other: {
          name: 'other',
          chunks: 'all',
          priority: 13,
          test: /[\\/]node_modules[\\/](tinycolor|dom-align|lodash)/
        }
      }
    }
  },
  plugins: getPlugins()
};
