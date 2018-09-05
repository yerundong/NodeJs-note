class Hello{
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
Hello.prototype.sayHello = function () {
    console.log('hello!!');
}
module.exports = Hello;