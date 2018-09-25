// fs是filesystem的缩写，该模块提供本地文件的读写能力，基本上是POSIX文件操作命令的简单包装。
// 和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法。

const fs = require('fs');

fs.watchFile('./base/fs模块/test.doc', (curr, prev) => {
    console.log(curr);
    // console.log(prev);
});