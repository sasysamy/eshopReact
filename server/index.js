import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackconfig from '../webpack.config.dev';

var app = express();

console.log("dir name is ::::  ",__dirname);

//app.use('/', express.static(path.join(__dirname,'')));
const compiler = webpack(webpackconfig);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: true,
    publicPath: '/',
    index: webpackconfig.output.index,
    serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler));

app.use('/', express.static(path.join(__dirname, 'assets/')));

app.use('/resources', express.static(path.join(__dirname, '/images')));

//app.use('/', express.static(path.join(__dirname, '/images')));
/*app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});*/

/*app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/index.html'))
})*/

app.listen(3000, function() {
    console.log("listening 3000 ");
});