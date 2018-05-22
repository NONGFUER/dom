```npm
npm i webpack-cli -D // webpack4中除了正常安装webpack之外，需要再单独安一个webpack-cli
npx webpack //默认打包src中的index.js,压缩
npx webpack --mode development  //开发环境中，打包不压缩
npm i webpack-dev-server -D //webpack服务器
npm i html-webpack-plugin -D //html 模板
npm i style-loader css-loader -D//样式加载器

```

```
module.exports = {
    entry: '',
    output:{},
    module:{},
    plugins:[],
    devServer:{}
    
}
```

