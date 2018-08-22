class Hello{
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
Hello.prototype.saySomething = function (w) {
    console.log(w);
}
module.exports = Hello;