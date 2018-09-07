//webpack.conf.js
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry : './index.js',
    output : {
        filename : 'index.js'
    },
    optimization:{
        minimize: false
    },
    plugins: [
        new CopyPlugin([
            './index.html',
            './*.mp3',
            './*.svg'],{})
    ],
    mode : 'production'
};
