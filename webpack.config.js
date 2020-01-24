const path = require("path");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,
  devtool: "source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "./statics"),
    publicPath: "/",
    filename: "index.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
