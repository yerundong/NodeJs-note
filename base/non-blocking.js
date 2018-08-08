const fs = require('fs');
// console.log(fs);

// 阻塞代码（同步）
const data = fs.readFileSync('./base/text.txt');
console.log(data.toString());
console.log("阻塞程序执行结束!");

console.log("----------------------我是超可爱的分割线~(￣▽￣)~*--------------------------");

// 非阻塞代码（异步）
fs.readFile('./base/text.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("非阻塞程序执行结束!");