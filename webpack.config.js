var path = require('path');

module.exports = {
    devtool: 'source-map',
    
    //define entry point
    entry: './src/index.js',

    //define output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/assets/styles/'),
        components: path.resolve(__dirname, 'src/components/')
      }
    },

    module: {
      loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
        ] //loaders
    } //module

};
