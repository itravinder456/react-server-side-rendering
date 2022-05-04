const path = require('path');

module.exports = {
  target: "node",
  entry: path.join(__dirname, "server.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    chunkFilename: "[bundle].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
}