// “可读数据流”用来对外释放数据，“可写数据流”则是用来接收数据。它允许你将数据写入某个目的地。
// 它是数据写入的一种抽象，不同的数据目的地部署了这个接口以后，就可以用统一的方法写入。

// 引入文档操作模块fs
const fs = require("fs");

// [fs.createWriteStream(path[, options])]
// 创建一个可以写入的流，写入到文件text.txt中，如果没有这个文件就创建一个
const writeStream = fs.createWriteStream('./base/流/text2.txt');
// console.log(writeStream.writable);// true

// [writable.write(chunk[, encoding][, callback])]
// chunk <string> | <Buffer> | <Uint8Array> | <any> 要写入的数据。可选的。  对于非对象模式下的流chunk 必须是字符串、Buffer 或 Uint8Array。 对于对象模式下的流，chunk 可以是除 null 外的任意 JavaScript 值。
// encoding <string> 如果 chunk 是字符串，则指定字符编码。
// callback <Function> 当这块数据被输出时的回调函数。
// write方法用于向“可写数据流”写入数据。
let asd = "yerundong has gone home";
let info = '';
for(let i = 0; i 
    < 100000; i++){
    info += asd;
}
writeStream.write(info, 'UTF8');

// [writable.end([chunk][, encoding][, callback])]
// chunk <string> | <Buffer> | <Uint8Array> | <any> 可选的，需要写入的数据。 对于非对象模式下的流chunk 必须是字符串、Buffer、或 Uint8Array。 对于对象模式下的流， chunk 可以是任意 JavaScript 值，除了 null。
// encoding <string> 如果 chunk 是字符串，则指定字符编码。
// callback <Function> 可选的，当流结束时的回调函数。
// end方法用于终止“可写数据流”。
// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, error
writeStream.on('finish', function() {
    console.log("写入完成。");
});

writeStream.on('error', function(err){
   console.log(err.stack);
});