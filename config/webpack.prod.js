const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const dist = path.join(__dirname, '../dist');
const {ANA} = process.env;

let getPlugins = () => {
  let plugins = [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/prod.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name][chunkhash].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsPlugin()
  ];
  if (ANA) {
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}));
  }
  return plugins;
};

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: dist,
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    //'react-router-dom': 'ReactRouter',
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
        exclude: /node_modules/,
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
      }
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
      }
    }
  },
  plugins: getPlugins()
};
