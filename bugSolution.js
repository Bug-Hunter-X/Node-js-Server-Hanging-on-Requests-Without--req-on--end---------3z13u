const http = require('http');

const server = http.createServer((req, res) => {
  req.on('end', () => {
    res.writeHead(200);
    res.end('Hello, world!');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});