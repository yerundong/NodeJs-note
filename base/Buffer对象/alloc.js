// Buffer.alloc(size[, fill[, encoding]])
// size <integer> 新建的 Buffer 期望的长度
// fill <string> | <Buffer> | <integer> 用来预填充新建的 Buffer 的值。 默认: 0
// encoding <string> 如果 fill 是字符串，则该值是它的字符编码。 默认: 'utf8'
// 分配一个大小为 size 字节的新建的 Buffer 。 如果 fill 为 undefined ，则该 Buffer 会用 0 填充。

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log(buf1);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);
const buf2 = Buffer.alloc(10, 0x1);
console.log(buf2);