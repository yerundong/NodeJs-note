// 1.Buffer.from(array)
// array <Array>
// 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// 通过一个八位字节的 array 创建一个新的 Buffer 。
// 创建一个新的包含字符串 'buffer' 的 UTF-8 字节的 Buffer
const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf1);

// 2.Buffer.from(arrayBuffer[, byteOffset[, length]])
// arrayBuffer <ArrayBuffer> | <SharedArrayBuffer> ArrayBuffer 或 SharedArrayBuffer 或 TypedArray 的 .buffer 属性。如果 arrayBuffer 不是 ArrayBuffer 或 SharedArrayBuffer，则抛出 TypeError 错误。
// byteOffset <integer> 开始拷贝的索引。默认为 0。
// length <integer> 拷贝的字节数。默认为 arrayBuffer.length - byteOffset。
// 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。

const arr2 = new Uint16Array(2);

arr2[0] = 5000;
arr2[1] = 4000;

// 与 `arr` 共享内存
const buf2 = Buffer.from(arr2.buffer);

// 输出: <Buffer 88 13 a0 0f>
console.log(buf2);

// 改变原始的 Uint16Array 也会改变 Buffer
arr2[1] = 6000;

// 输出: <Buffer 88 13 70 17>
console.log(buf2);

// 3.Buffer.from(buffer)
// buffer <Buffer> 一个要拷贝数据的已存在的 Buffer。如果 buffer 不是一个 Buffer类型，则抛出 TypeError 错误。
// 将传入的 buffer 数据拷贝到一个新建的 Buffer 实例。
const buf3 = Buffer.from('buffer');
const buf4 = Buffer.from(buf3);

buf3[0] = 0x61;

// 输出: auffer
console.log(buf3.toString());

// 输出: buffer
console.log(buf4.toString());

// 4.Buffer.from(string[, encoding])
// string <string> 要编码的字符串
// encoding <string> string 的字符编码。 默认: 'utf8'
// 新建一个包含所给的 JavaScript 字符串 string 的 Buffer 。 encoding 参数指定 string 的字符编码。
const buf5 = Buffer.from('E9BB84E98791E799BDE792A7E4B9B0E6AD8CE7AC91EFBC8CE4B880E98689E7B4AFE69C88E8BDBBE78E8BE4BEAF', 'hex');
// 输出: 黄金白璧买歌笑，一醉累月轻王侯
console.log(buf5.toString());

// 5.Buffer.from(object[, offsetOrEncoding[, length]])
// object <Object> 一个支持 Symbol.toPrimitive 或 valueOf() 的对象
// offsetOrEncoding <number> | <string> 字节偏移量或编码，取决于 object.valueOf() 或 object[Symbol.toPrimitive]() 的返回值。
// length <number> 长度值，取决于 object.valueOf() 或 object[Symbol.toPrimitive]() 的返回值。







