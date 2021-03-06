const path = require('path');
const webpack = require('webpack');
const wds_port = BOILERPLATE-PORT;

const PATHS = {
    src: path.join(__dirname, '..', 'src'),
    js: path.join(__dirname, '..', 'src', 'js'),
    style: path.join(__dirname, '..', 'src', 'style'),
    build: path.join(__dirname, '..', 'dev-server'),
    devServer: path.join(__dirname, '..', 'dev-server')
};

const config = {
  entry: [path.join(PATHS.js, 'entry.js')],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  devServer: {
    host: '0.0.0.0',
    port: wds_port,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: PATHS.build
  },
  output: {
    path: PATHS.build,
    filename: 'main.js',
    library: 'BOILERPLATE-PROJECT-NAME',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  devtool: 'eval-source-map',
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
