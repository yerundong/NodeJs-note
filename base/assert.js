// [assert]模块
// assert模块是Node的内置模块，主要用于断言。如果表达式不符合预期，就抛出一个错误。该模块提供11个方法，但只有少数几个是常用的。

const assert = require('assert');

// 1.[assert(value, [message])]
// assert方法接受两个参数，当第一个参数value为true时，不会有任何提示，返回undefined。
// 当第一个参数value为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串message。
const res1 = assert(true, 'error-assert');
// console.log(res1);// undefined
// const res2 = assert(false, 'error-assert');// 报错

// 2.[assert.ok()]
// ok是assert方法的另一个名字，与assert方法完全一样。

// 3.[assert.equal(actual, expected, [message])]
// 用于判断actual与expected是否相等，即是否actual==expected
// 接受三个参数，第一个参数actual是实际值，第二个expected是预期值，第三个message是错误的提示信息，不相等时提示。
// 返回undefined
assert.equal(1, 1, 'error-equal');// 相等
assert.equal(1, '1', 'error-equal');// 相等
// assert.equal(1, 2, 'error-equal');// 不相等 报错
assert.equal(false, false, 'error-equal');// 相等

// 4.[assert.notEqual(actual, expected, [message])]
// 用于判断actual与expected是否不相等，即是否actual！=expected
// 接受三个参数，第一个参数actual是实际值，第二个expected是预期值，第三个message是错误的提示信息，相等时提示。
// 返回undefined
// assert.notEqual(1, 1, 'error-notEqual');// 相等 报错
// assert.notEqual(1, '1', 'error-notEqual');// 相等 报错
assert.notEqual(1, 2, 'error-notEqual');// 不相等 不报错

// 5.[assert.deepEqual(actual, expected, [message])]
// deepEqual方法用来比较两个对象。只要它们的属性一一对应，且值都相等，就认为两个对象相等，否则抛出一个错误。
const obj1 = {
    a: 1
}
const obj2 = {
    a: '1'
}
const obj3 = {
    a: 1,
    b: {
        c: 3,
        d: 4
    }
}
const obj4 = {
    a: 1,
    b: {
        c: '3',
        d: '4'
    }
}
const obj5 = {
    a: 1,
    b: {
        c: 3,
        d: 4,
        e: {}
    }
}
assert.deepEqual(obj1, obj2, 'error-deepEqual-1');// 相等 
assert.deepEqual(obj3, obj4, 'error-deepEqual-2');// 相等 
// assert.deepEqual(obj4, obj5, 'error-deepEqual-3');// 不相等 报错

// 6.[assert.notDeepEqual(actual, expected, [message]))]
// notDeepEqual方法与deepEqual方法正好相反，用来断言两个对象是否不相等。

// 7.[assert.strictEqual(actual, expected, [message])]
// 用于判断actual与expected是否全等，即是否actual===expected
assert.strictEqual(1, 1, 'error-strictEqual-1');// 全等
// assert.strictEqual(1, '1', 'error-strictEqual-2');// 不全等 报错

// 8.[assert.notStrictEqual(actual, expected, [message])]
// 用于判断actual与expected是否不全等，即是否actual!==expected

// 9.[assert.throws(block, [error], [message])]
// throws方法预期某个代码块会抛出一个错误，且抛出的错误符合指定的条件。
assert.throws(
    function () {
        throw new Error("Wrong value");
    },
    Error,
    'error-throws-1'
);

assert.throws(
    function () {
        throw new Error("Wrong hello");
    },
    /hello/,
    'error-throws-2'
);

assert.throws(
    function () {
        throw new Error("Wrong hello");
    },
    function (err) {
        if ((err instanceof Error) && /hello/.test(err)) {
            return true;
        }
    },
    'error-throws-3'
);

// 10.[assert.doesNotThrow(block, [message])]
// doesNotThrow方法与throws方法正好相反，预期某个代码块不抛出错误
assert.doesNotThrow(
    function () {
    //    a + b;
    },
    'error-doesNotThrow-1'
);

// 11.[assert.ifError(value)]
// ifError方法断言某个表达式是否false，如果该表达式对应的布尔值等于true，就抛出一个错误。
// 它对于验证回调函数的第一个参数十分有用，如果该参数为true，就表示有错误。
assert.ifError(false);
// assert.ifError(true);// 报错

// 12.[assert.fail(actual, expected, message, operator)]
// 该方法共有四个参数，但是不管参数是什么值，它总是抛出一个错误。
// 如果message参数对应的布尔值不为false，抛出的错误信息就是message，否则错误信息就是“实际值 + 分隔符 + 预期值”。
// assert.fail(1, 1, 'error-fail-1', '###');// AssertionError [ERR_ASSERTION]: error-fail-1
// assert.fail(1, 2, 'error-fail-2', '###');// AssertionError [ERR_ASSERTION]: error-fail-2
// assert.fail(1, 3, false, '###');// AssertionError [ERR_ASSERTION]: 1 ### 1

console.log(__filename);
