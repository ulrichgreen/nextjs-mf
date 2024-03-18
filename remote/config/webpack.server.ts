import { Configuration } from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import sharedWebpackConfig from './webpack.shared';
import moduleFederationPlugin from './module-federation';

const webpackConfig: Configuration = {
    name: 'remote',
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: '[name].js',
        libraryTarget: 'commonjs-module',
    },
    target: false,
    plugins: [...moduleFederationPlugin.server],
};

export default merge<Configuration>(sharedWebpackConfig, webpackConfig);
