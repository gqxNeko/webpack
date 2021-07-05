## 单个(简写)入口语法
`entry:string | [string]`
## 对象语法
`entry:{ <entryChunkName> string | [string] } | {}`
## 描述入口的对象
* `dependOn`:当前入口所依赖的入口
* `filename`:指定输出的文件名
* `import`:启动时需加载的模块
* `library`:指定library选项
* `runtime`:运行是chunk的名字
* `publicPath`:在浏览器中被引用时指定的公共URL地址
## 具体例子
```js
// 单个入口语法
module.exports = {
  entry: ['./src/js/app1.js','./src/js/app2.js]
}
//对象语法
module.exports = {
  entry:  {
    main: './src/js/app.js'
  }
}
```