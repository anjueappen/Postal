module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.es6\.js$/, loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      ...
    ]
  }
  ...
  resolve: {
    extensions: [..., '.es6.js', ...]
  }
};