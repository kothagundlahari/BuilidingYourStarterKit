import path from 'path';
import open from 'open';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.babel';
const port = 5000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */
app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
   err !== true ? open('http://localhost:' +port) : console.log(err)
});
