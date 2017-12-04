module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
