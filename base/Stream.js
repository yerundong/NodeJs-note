// 引入文档操作模块fs
const fs = require("fs");

// 创建可读流
const readerStream = fs.createReadStream('./base/text.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

let INFO1 = '';
// 处理流事件 --> data, end, error
readerStream.on('data', (chunk) => {
    // console.log(chunk);
    INFO1 += chunk;
});

readerStream.on('end',() => {
   console.log(INFO1);
});

readerStream.on('error', (err) => {
   console.log("ERROR===>"+err.stack);
});

console.log("程序执行完毕1");

// 写入流
// 创建一个可以写入的流，写入到文件 output.txt中
const writerStream = fs.createWriteStream('./base/text.txt');

// 使用 utf8 编码写入数据
const INFO2 = 'yerundong';
writerStream.write(INFO2, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕2");

