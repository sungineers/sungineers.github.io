module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sungineers.github.io'
    : '/',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
