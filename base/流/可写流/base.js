// “可读数据流”用来对外释放数据，“可写数据流”则是用来接收数据。它允许你将数据写入某个目的地。
// 它是数据写入的一种抽象，不同的数据目的地部署了这个接口以后，就可以用统一的方法写入。

// 引入文档操作模块fs
const fs = require("fs");

// [fs.createWriteStream(path[, options])]
// 创建一个可以写入的流，写入到文件text.txt中，如果没有这个文件就创建一个
const writeStream = fs.createWriteStream('./base/流/text2.txt');
const readStream = fs.createReadStream('./base/流/text.txt');
// console.log(writeStream.writable);// true

// [writable.write(chunk[, encoding][, callback])]
// chunk <string> | <Buffer> | <Uint8Array> | <any> 要写入的数据。可选的。  对于非对象模式下的流chunk 必须是字符串、Buffer 或 Uint8Array。 对于对象模式下的流，chunk 可以是除 null 外的任意 JavaScript 值。
// encoding <string> 如果 chunk 是字符串，则指定字符编码。
// callback <Function> 当这块数据被输出时的回调函数。
// write方法用于向“可写数据流”写入数据。
let info = "yerundong has gone home\n";
for(let i = 0; i < 100; i++){
    writeStream.write(info, 'UTF8');
}

// [writable.end([chunk][, encoding][, callback])]
// chunk <string> | <Buffer> | <Uint8Array> | <any> 可选的，需要写入的数据。 对于非对象模式下的流chunk 必须是字符串、Buffer、或 Uint8Array。 对于对象模式下的流， chunk 可以是任意 JavaScript 值，除了 null。
// encoding <string> 如果 chunk 是字符串，则指定字符编码。
// callback <Function> 可选的，当流结束时的回调函数。
// end方法用于终止“可写数据流”。
// 标记文件末尾
// writeStream.end('this is the end\n', 'utf8', () => {
//     console.log('---end---');
// });

// [stream.finished(stream, callback)]
// stream <Stream> 一个可读或可写的流
// callback <Function> 一个回调函数，可以带有一个错误信息参数，也可没有
// 使用此函数，以在一个流不再可读、可写或发生了错误、提前关闭等事件时获得通知。
writeStream.on('finish', () => {
    console.log("---finish---");
});

writeStream.on('error', function(err){
   console.log(err.stack);
});

// [readable.pipe(writable)

// 可读流拼接到可写流
readStream.pipe(writeStream);
// readStream.on('data', (chunk) => {
//     console.log(chunk);
// })