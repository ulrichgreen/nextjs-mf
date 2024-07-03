import { Configuration } from "webpack";

const webpackConfig: Configuration = {
  output: {
    publicPath: "auto",
    clean: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

export default webpackConfig;
