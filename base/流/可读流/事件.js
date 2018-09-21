const fs = require("fs");
const readStream = fs.createReadStream('./base/流/text.txt');
readStream.setEncoding('utf-8');
// 可读流监听事件:data，end，close，error

// ['data' 事件]
// 'data' 事件会在流将数据传递给消费者时触发，data事件表示流的数据已经可以读取了。
// 当流转换到flowing模式时会触发该事件。
// param:
// chunk <Buffer> | <string> | <any> 数据块
readStream.on('data', (chunk) => {
    console.log(chunk);
});

// ['end' 事件]
// 'end' 事件将在流中再没有数据可供消费时触发。
// 注意： 'end' 事件只有在数据被完全消费后才会触发，可以通过将流转换到flowing模式， 
// 或反复调用 stream.read() 方法来实现这一点。
readStream.on('end', () => {
    console.log('---end---');
});

// ['error' 事件]
// 'error' 事件可以在任何时候在可读流实现（Readable implementation）上触发。 
// 通常，这会在底层系统内部出错从而不能产生数据，或当流的实现试图传递错误数据时发生。
// param:
// <Error> Error 对象
const readStream2 = fs.createReadStream('./base/流/123123.txt');
readStream2.on('error', (error) => {
    // console.log(error);
});

// ['readable' 事件]
// 'readable' 事件将在流中有数据可供读取时触发。在某些情况下，为 'readable' 事件添加回调将会导致一些数据被读取到内部缓存中。
// 当到达流数据尾部时， 'readable' 事件也会触发。触发顺序在 'end' 事件之前。
// 事实上， 'readable' 事件表明流有了新的动态：要么是有了新的数据，要么是到了流的尾部。 对于前者， stream.read() 将返回可用的数据。而对于后者， stream.read() 将返回 null。 
readStream.on('readable', () => {
    console.log('---readable---');
})


