const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const UselessFile = require('useless-files-webpack-plugin');
//const PurifyCSSPlugin = require('purifycss-webpack');
//const glob = require('glob');
let dist = path.join(__dirname, '../dist');
const {ANA} = process.env;


let getPlugins = () => {
  let plugins = [
    new CleanWebpackPlugin(),
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
    /*new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, '../public/prod.html'))
    })*/

  ];
  if (ANA) {
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: true}));
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
    index: './src/index.js'
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
    'react-dom': 'ReactDOM'
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
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    //concatenateModules: true,//!ANA,
    runtimeChunk: {name: entrypoint => 'runtime_' + entrypoint.name},
    sideEffects: true,
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
        antv: {
          name: 'antv',
          chunks: 'all',
          priority: 13,
          test: /[\\/]node_modules[\\/](@antv|gl-matrix|tslib|detect-browser)/
        },
        mobx: {
          name: 'mobx',
          chunks: 'all',
          priority: 13,
          test: /[\\/]node_modules[\\/](mobx|mob-react)/
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
