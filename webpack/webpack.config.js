const path = require('path');
const webpack = require('webpack');
const wds_port = BOILERPLATE-PORT;

const PATHS = {
    src: '/react/src',
    js: '/react/src/js',
    style: '/react/src/style',
    build: '/react/dist'
};

const config = {
  entry: [PATHS.js + '/entry.js'],
  externals: {
    'cheerio': 'window',
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    },
  },
  output: {
    path: PATHS.build,
    filename: 'main.js',
    library: 'BOILERPLATE-PROJECT-NAME',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: [PATHS.js]
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [{
          loader: 'url-loader?limit=100000'
        }]
      }
    ]
  }
};

module.exports = config;
