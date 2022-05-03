const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.json({
    message: 'Hello World',
    status: true
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});