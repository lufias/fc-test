const path = require("path");

module.exports = {

  chainWebpack: config => {
    config.resolve.alias
        .set('@components', path.resolve(__dirname, 'src/components'))
        .set('@assets', path.resolve(__dirname, 'src/assets'))        
        .set('@mixins', path.resolve(__dirname, 'src/mixins'))        
        .set('ejs','ejs.min.js')
  }
}
