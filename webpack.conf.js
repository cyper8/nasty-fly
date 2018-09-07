//webpack.conf.js
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry : './index.js',
    output : {
        filename : 'index.js',
        path: path.resolve(__dirname, 'docs')
    },
    // optimization:{
    //     minimize: false
    // },
    plugins: [
        new CopyPlugin([
            './index.html',
            './*.mp3',
            './*.svg'],{})
    ],
    mode : 'production'
};
