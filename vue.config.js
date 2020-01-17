module.exports = {
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({ addAttributes: { tabindex: -1 } });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/styles/_variables.scss';
          @import '@/styles/_mixins.scss';
        `
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
};
