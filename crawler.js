// 引入 `express`模块
const express = require('express');
// 引入 `utility`模块
const utility = require('utility');
// 引入 `cheerio`模块
const cheerio = require('cheerio');
// 引入 `superagent `模块
const superagent = require('superagent');

// 建立 express 实例
const app = express();

// 爬虫
app.get('/', function (req, res, next) {
    console.log(req);
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get('https://cnodejs.org/').end(function (err, sres) {
        // 常规的错误处理
        if (err) {
            return next(err);
        }
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list .topic_title').each(function (idx, element) {
            let $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });

        res.send(items);
    });
});

// 让app监听本地的 3000 端口。
// 第二个参数是个监听成功的回调函数。
app.listen(3000, function () {
    console.log('app is listening at port 3000');
});