// 由于项目是通过Vue-CLI创建的，所以没有webpack的配置文件，就需要通过创建vue.config.js文件来修改webpack的配置
module.exports = {
  // 新增webpack原生的规则
  publicPath: './',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html)$/, // 处理.html结尾的文件
          exclude: /node_modules/,
          use: {
            loader: 'html-loader', // 用html-loader组件处理
            options: {
              minimize: true // 处理以后的代码需要压缩
            }
          }
        }
      ]
    }
  }
}
