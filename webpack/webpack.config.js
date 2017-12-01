const path = require('path');
const webpack = require('webpack');
const wds_port = BOILERPLATE-PORT;

const PATHS = {
    src: path.join(__dirname, '..', 'src'),
    js: path.join(__dirname, '..', 'src', 'js'),
    style: path.join(__dirname, '..', 'src', 'style'),
    build: path.join(__dirname, '..', 'dist')
};

const config = {
  entry: [path.join(PATHS.js, 'entry.js')],
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
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
