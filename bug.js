const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the server will hang indefinitely
  // if a request is made and the connection is not immediately closed.
  req.on('end', () => {
    res.writeHead(200);
    res.end('Hello, world!');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});