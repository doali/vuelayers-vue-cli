module.exports = {
  lintOnSave: false
}

var merge = require('webpack-merge')

// Configuration pour afficher les images
module.exports = {
   chainWebpack: config => {

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
            'vl-style-icon': 'src',
          },
        })
      )
  }
}