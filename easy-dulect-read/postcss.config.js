module.exports = {
  // 配置postcss-pxtorem插件的规则(自动将把px转成rem)
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 根元素字体大小
      // propList: ['width', 'height'] // 只有高度和宽度需要将px转换成rem
      propList: ['*']
    }
  }
}
