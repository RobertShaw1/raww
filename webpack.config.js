module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        loader: 'file-loader'
      }
    ]
  },
  node: {
    console: 'true',
    fs: 'true',
    net: 'true',
    tls: 'true'
  }
}

// https://github.com/request/request/issues/1691
// http://webpack.github.io/docs/configuration.html#node
// https://github.com/request/request/compare/master...pho3nixf1re:webpack-tests
// https://github.com/request/request/issues/1529
