const http = require('http');
// console.log(http);
const server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello nodejs");
    response.end();
});
server.listen(8888);