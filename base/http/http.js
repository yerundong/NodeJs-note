const http = require('http');
const url = require('url');
const querystring = require('querystring');
//设置主机名
const hostName = '127.0.0.1';
//设置端口
const port = 8888;

// [http.createServer([options][, requestListener])]
// 创造一个服务器实例。
const server = http.createServer(function (req, res) {
    // url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。
    const urlInfo = url.parse(req.url, true);
    // console.log(urlInfo);

    req.setEncoding("utf8");
    let postData = '';
    // req.addListener('data', (chunk) => {
    //     console.log(chunk);
    // });

    // req.addListener('end', function () {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/plain'
    //     });
    //     res.write("You've sent the text: " + querystring.parse(postData).text);
    //     res.end();
    // });

    if (urlInfo.pathname === '/') {
        res.setHeader('Content-Type','text/plain');
        res.setHeader('Access-Control-Allow-Origin',"*")
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.write("Hello nodejs");
        res.write("how ar you");
        res.end('{a: 1, b: 2}', ()=>{
            return
        });
    } else if (urlInfo.pathname === '/home') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("Welcome home");
        res.end();
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end("404 error! File not found.");
    }
});

server.listen(port, hostName, () => {
    console.log('========== Server is running on port 8888 =============');
});