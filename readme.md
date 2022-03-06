## 1. 初始Node.js 与 内置模块

---

- 为什么 Js 可以在浏览器中被执行？

  > 浏览器中有 **JavaScript 解析引擎**。
  >
  > 不同浏览器有不同的 JS 解析引擎。
  >
  > - Chrome ==> v8
  > - Firefox ==> OdinMonkey
  > - Safri ==> JSCore
  > - IE ==> Chakra

- 为什么 JS 可以操作 DOM 和 BOM？

  <img src="img/1.png" style="zoom:50%;" />

---

### 1.1 什么是Node.js?

> Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).
>
> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

- Node.js 中的 JavaScript 运行环境：

  ![](img/2.png)

- Node.js 的学习路径：

  JS基础语法 + Node.js 内置 API模块 + 第三方API 模块。

- Node.js 环境安装：

  …

---

### 1.2. fs文件系统模块

- fs.readFile(path[, options], callback),读取文件。

  ~~~ js
  const fs = require('fs');
  
  fs.readFile('./words.txt', 'utf8', function(err, dataStr){
      console.log(err);
      console.log(dataStr);
  })
  ~~~

  

- fs.writeFile(file, data[, options], callback), 写入内容

  ~~~ js
  const fs = require('fs');
  
  fs.writeFile('./wordsTest.txt', "add test me", 'utf-8', function(err){
      console.log(err); // null
  })
  ~~~

  

- 路径动态拼接问题。

  ~~~ js
  fs.readFile(__dirname + '/newScore.txt', 'utf8', function(err, str){
      console.log('__dirname' + str);
  })
  ~~~

---

### 1.3 path路径模块



### 1.4 http模块

