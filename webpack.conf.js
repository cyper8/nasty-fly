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
            './*.svg',
            './README.md',
            { from: './node_modules/commonmark/dist/commonmark.min.js', to: 'node_modules/commonmark/dist/' },
            { from: './node_modules/prismjs/prism.js', to: 'node_modules/prismjs/' },
            { from: './node_modules/prismjs/themes/prism.css', to: 'node_modules/prismjs/themes/' } 
        ],{})
    ],
    mode : 'production'
};
