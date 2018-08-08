// 使用 require 指令来载入 http 模块
const http = require('http');

// 使用 http.createServer()方法创建服务器，并使用listen()方法绑定8888端口
http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('===================== Server running at http://127.0.0.1:8888/ ===============================');
