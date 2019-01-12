import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        fileName: 'bundle.js'
    },
    plugins: [],
    modules: {
    loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['es6-loader']},
        {test: /\.css$/, loaders: ['style', 'css']}
    ]
    }

}
