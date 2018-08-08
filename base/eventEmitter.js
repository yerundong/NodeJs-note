// 引入 events 模块
const events = require('events');
// EventEmitter类（处理事件的类）
// EventEmitter 的核心就是事件触发与事件监听器功能的封装
const EventEmitter = events.EventEmitter;
// 实例 eventEmitter 对象
const eventEmitter = new EventEmitter();

// [setMaxListeners]
// 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
// eventEmitter.setMaxListeners(2);

// 事件
// newListener
// 该事件在添加新监听器时被触发。
eventEmitter.on("newListener", (EventName, callback) => {
	console.log('newListener=====>' + EventName);
});
// removeListener
// 从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
eventEmitter.on("removeListener", (EventName, callback) => {
	console.log('removeListener=====>' + EventName);
});

// 监听器
// [addListener]
// 为指定事件注册一个监听器
eventEmitter.addListener('someEvent1', (...args) => {
    console.log(args);
})

// [on]
// 为指定事件注册一个监听器
// addListener和on没有区别，EventEmitter.prototype.on = EventEmitter.prototype.addListener;    
eventEmitter.on('someEvent2', (...args) => {
    console.log(args);
})

// [once]
// 为指定事件注册一个单次监听器
eventEmitter.once('someEvent3', (...args) => {
    console.log(args);
})

const callback4 = function (...args) {
    console.log(args);
}
eventEmitter.addListener('someEvent4', callback4);

// 链式写法
eventEmitter.on('someEvent5', (...args) => {
    console.log(args);
}).on('someEvent6', (...args) => {
    console.log(args);
}).on('someEvent7', (...args) => {
    console.log(args);
}).on('someEvent8', (...args) => {
    console.log(args);
}).on('someEvent9', (...args) => {
    console.log(args);
}).on('someEvent10', (...args) => {
    console.log(args);
}).on('someEvent11', (...args) => {
    console.log(args);
}).on('someEvent12', (...args) => {
    console.log(args);
})

// [emit]
// 触发器
eventEmitter.emit('someEvent1', 'someEvent1', 'someEvent1', 'someEvent1');
eventEmitter.emit('someEvent1', 'someEvent1', 'someEvent1', 'someEvent1');
eventEmitter.emit('someEvent2', 'someEvent2', 'someEvent2', 'someEvent2');
eventEmitter.emit('someEvent3', 'someEvent3', 'someEvent3', 'someEvent3');// once
eventEmitter.emit('someEvent3', 'someEvent3', 'someEvent3', 'someEvent3');// 无效
eventEmitter.emit('someEvent4', 'someEvent4', 'someEvent4', 'someEvent4');

// [removeListener]
// 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
eventEmitter.removeListener('someEvent4', callback4);
eventEmitter.emit('someEvent4', 'someEvent4', 'someEvent4', 'someEvent4');// 无效

// [removeAllListeners]
// 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
eventEmitter.removeAllListeners('someEvent1');// 移除所有someEvent1事件
eventEmitter.emit('someEvent1', 'someEvent1');// 无效
// eventEmitter.removeAllListeners();// 移除所有事件

eventEmitter.emit('someEvent5', 'someEvent5');
// eventEmitter.emit('someEvent6', 'someEvent6');
// eventEmitter.emit('someEvent7', 'someEvent7');
// eventEmitter.emit('someEvent8', 'someEvent8');
// eventEmitter.emit('someEvent9', 'someEvent9');
// eventEmitter.emit('someEvent10', 'someEvent10');
// eventEmitter.emit('someEvent11', 'someEvent11');

// [listeners]
// 返回指定事件的监听器数量。
console.log(eventEmitter.listeners('someEvent2'));

// EventEmitter类的方法
// [listenerCount]
// 返回指定事件的监听器数量。
console.log(EventEmitter.listenerCount(eventEmitter, 'someEvent1'));