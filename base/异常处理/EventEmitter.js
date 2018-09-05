// 发生错误的时候，也可以用EventEmitter接口抛出error事件。
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('error', function(err) {
    console.error(err);
});

emitter.emit('error', new Error('something bad happened'));

// 使用上面的代码必须小心，因为如果没有对error事件事先部署监听函数，会导致整个应用程序崩溃。所以，一般总是必须同时部署下面的代码。