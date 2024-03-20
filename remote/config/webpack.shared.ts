import { Configuration } from 'webpack';

const webpackConfig: Configuration = {
    cache: false,
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    output: {
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(js|ts)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

export default webpackConfig;
