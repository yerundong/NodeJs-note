const http = require('http');
// console.log(http);

// [http.createServer([options][, requestListener])]
// 
// 创造一个服务器实例。
const server = http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Hello nodejs");
        res.write("how ar you");
        res.end('{a: 1, b: 2}');
    }else if(req.url === '/home'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Welcome home");
        res.end();
    }else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 error! File not found.");
    }
});

server.listen(8888, () => {
    console.log('========== Server is running on port 8888 =============');
});