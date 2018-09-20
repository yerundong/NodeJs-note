// Event Emitter 接口可以部署在任意对象上，使得这些对象也能订阅和发布消息。
const events = require('events');
const util = require('util');
const EventEmitter = events.EventEmitter;
const eventEmitter = new EventEmitter();
// 继承EventEmitter类的属性和方法（也可以Gohome.prototype.__proto__ = EventEmitter.prototype）
class Gohome extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
    say(){
        console.log(this.name + ' go home');
    }
}
const gohome = new Gohome('yerundong');
// console.log(gohome);
gohome.on('holiday', function() {
    console.log(this.name);
    this.say();
});
// gohome.emit('holiday');

// Node 内置模块util的inherits方法，提供了另一种继承 Event Emitter 接口的方法。
class Laoyu{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(this.name + ' go laoyu');
    }
}
util.inherits(Laoyu, EventEmitter);
const laoyu = new Laoyu('yerundong');
laoyu.on('newListener', function() {
    console.log('---newListener---');
});
laoyu.on('holiday', function() {
    console.log(this.name);
    this.say();
});

// laoyu.emit('holiday');





