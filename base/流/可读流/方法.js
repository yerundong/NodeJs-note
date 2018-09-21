const fs = require("fs");
const readStream = fs.createReadStream('./base/流/text.txt');
readStream.setEncoding('utf-8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
readStream.on('end', () => {
    console.log('---end---');
});

// [readable.pause()]
// 使 flowing 模式的流停止触发 'data' 事件， 进而切出 flowing 模式。任何可用的数据都将保存在内部缓存中。
readStream.pause();

// [readable.resume()]
// 重新触发 'data' 事件, 将暂停模式切换到流动模式
setTimeout(() => {
    readStream.resume()
}, 1000);