// 对于try…catch无法捕获异步的异常，Node采用的方法，将try…catch放在异步操作里，并封装成一个函数，是将错误对象作为第一个参数，
// 传入回调函数。这样就避免了捕获代码与发生错误的代码不在同一个时间段的问题。
const errorAsy = function (callback) {
    setTimeout(() => {
        try {
            const res = 'res';
            throw new Error("error");
            callback(null, res);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
}
errorAsy(function (err, res) {
    console.log(err);
    console.log(res);
});