// “可读数据流”用来产生数据。它表示数据的来源，只要一个对象提供“可读数据流”，就表示你可以从其中读取数据。
// 所有可以读取数据的流都继承自stream.Readable
// 可读流有[两种模式]：流动中（flowing）或已暂停（paused）。
// 1.在flowing模式中，数据自动地从底层的系统被读取，并通过EventEmitter接口的事件[尽快地]被提供给应用程序，数据会[尽快地]从数据源导向用户的程序。
// 2.在paused模式中，必须显式调用stream.read()方法来从流中读取数据片段。

// 所有可读流都[开始于paused模式]，可以通过以下方式[切换到flowing模式]：
// 新增一个 'data' 事件处理函数。
// 调用 stream.resume() 方法。
// 调用 stream.pipe() 方法发送数据到可写流。

// 可读流可以通过以下方式[切换回paused模式]：
// 如果没有管道目标，调用 stream.pause() 方法。
// 如果有管道目标，移除所有管道目标。调用 stream.unpipe() 方法可以移除多个管道目标。

// 引入文档操作模块fs
const fs = require("fs");

// [fs.createReadStream(path[, options])]
// 创建可读流
// path <string> | <Buffer> | <URL>
// options <string> | <Object>
const readStream = fs.createReadStream('./base/流/text.txt');

// [readable.setEncoding(encoding)]
// 设置可读流的编码，否则默认获取到数据是Buffer对象
// encoding <string> 要使用的编码
// 设置编码为hex
readStream.setEncoding('hex');



// const Readable = require('stream').Readable;
// const rs = new Readable();
// rs.push('beep ');
// rs.push('boop\n');
// rs.push(null);// 用来告诉rs，数据输入完毕

// rs.pipe(process.stdout);
// console.log(rs);

