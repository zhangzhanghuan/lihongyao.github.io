const path     = require('path');
exports.config = {
    contentBase:path.resolve(__dirname,'./dist'),
    // openPage: "../static/pages/photo.html",
    host: 'localhost',
    port: '8081',
    open: true,
    inline: true,
    hot: true
}