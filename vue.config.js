module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'tw',
      fallbackLocale: 'tw',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = "Wei's Site";
        return args;
      })
  }
}