// 流（stream）是一种在 Node.js 中[处理流式数据]的抽象接口。 stream 模块提供了一些基础的 API，用于构建实现了流接口的对象。
// Node.js 提供了多种流对象。 例如，发送到 HTTP 服务器的请求和 process.stdout 都是流的实例。
// 流可以是可读的、可写的、或是可读写的。 所有的流都是 EventEmitter 的实例。
// stream 模块可以通过以下方式使用：
const stream = require('stream');
// console.log(stream);

// Node.js 中有四种基本的流[类型]：
// Writable - 可写入数据的流（例如 fs.createWriteStream()）。
// Readable - 可读取数据的流（例如 fs.createReadStream()）。
// Duplex - 可读又可写的流（例如 net.Socket）。
// Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。另外本模块还包含了工具类函数 pipeline 和 finished。

// 一个对象只要部署了数据流接口，就可以从它读取数据，或者写入数据。
// Node内部很多涉及IO处理的对象，都部署了Stream接口，下面就是其中的一些。
// 文件读写
// HTTP 请求的读写
// TCP 连接
// 标准输入输出

