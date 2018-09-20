// Events模块默认支持两个事件。
// newListener事件：添加新的回调函数时触发。
// removeListener事件：移除回调时触发。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
const events = require('events');
const EventEmitter = events.EventEmitter;
const eventEmitter = new EventEmitter();
eventEmitter.on('newListener', function(eventName, callback) {
    console.log('---newListener---');
});
eventEmitter.on('removeListener', function(eventName, callback) {
    // console.log('---removeListener---');
});
// 把回调单独拎出来方便移除
function foo() {
    
}
// 只有添加一个事件监听，就会触发一次newListener事件执行回调
eventEmitter.on('someEvent1', foo);
eventEmitter.on('someEvent2', foo);

eventEmitter.removeListener('someEvent1', foo);
eventEmitter.removeListener('someEvent2', foo);