const http = require("http");

const server = http.createServer((request, response) => {
response.writeHead(200, {
"Content-Type": "text/plain"
});

response.end("Hello");

});

server.listen(3000, () => {
console.log("Basic server running on port 3000");
});
