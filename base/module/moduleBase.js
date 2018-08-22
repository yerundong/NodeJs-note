const md = require('./module');
console.log(md);
md.world(md.sayHello);

const Hello = require('./hello');
const hello = new Hello();
console.log(hello);
hello.saySomething('You owe me 5000');