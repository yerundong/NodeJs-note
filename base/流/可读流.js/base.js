// “可读数据流”用来产生数据。它表示数据的来源，只要一个对象提供“可读数据流”，就表示你可以从其中读取数据。
var Readable = require('stream').Readable;
var rs = new Readable();
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

rs.pipe(process.stdout);