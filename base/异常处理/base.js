// [概述]
// Node是单线程运行环境，一旦抛出的异常没有被捕获，就会引起整个进程的崩溃。所以，Node的异常处理对于保证系统的稳定运行非常重要。
// 一般来说，Node有三种方法，传播一个错误。

// 使用throw语句抛出一个错误对象，即抛出异常。
// 将错误对象传递给回调函数，由回调函数负责发出错误。
// 通过EventEmitter接口，发出一个error事件。

// 1.[try…catch]
// 最常用的捕获异常的方式，就是使用try…catch结构。但是，这个结构无法捕获[异步]运行的代码抛出的异常。
// 同步的异常可以捕获
try {
    console.log('====try-start====');
    throw new Error("error");
    console.log('====try-end====');
} catch (error) {
    console.log('====catch-start====');
    console.log(error);
    console.log('====catch-end====');
}
// 异步的异常不可捕获
try {
    console.log('====try-start====');
    setTimeout(() => {
        throw new Error("error");
    }, 1000);
    console.log('====try-end====');
} catch (error) {
    console.log('====catch-start====');
    console.log(error);
    console.log('====catch-end====');
}

// 对于以上情况，Node采用的方法，将try…catch放在异步操作里，并封装成一个函数，是将错误对象作为第一个参数，传入回调函数。
// 这样就避免了捕获代码与发生错误的代码不在同一个时间段的问题。（详情见回调函数.js）

