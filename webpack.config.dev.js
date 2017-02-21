import path from 'path';
import webpack from 'webpack';
import combineLoaders from 'webpack-combine-loaders';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
    ],
    output: {
        path: "/assets",
        publicPath: "/",
        index: "index.html"
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'react-hot','babel'],
                include: path.join(__dirname, 'client')
            },
            {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                        loader: 'style'
                    },
                    {
                        loader: 'css',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ])
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.json']
    }
}
