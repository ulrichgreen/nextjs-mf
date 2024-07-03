import { Configuration } from "webpack";
import path from "path";
import { merge } from "webpack-merge";
import sharedWebpackConfig from "./webpack.shared";
import moduleFederationPlugin from "./module-federation";

const webpackConfig: Configuration = {
  name: "remote2",
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    publicPath: "auto",
  },
  plugins: [moduleFederationPlugin.client],
};

export default merge<Configuration>(sharedWebpackConfig, webpackConfig);
