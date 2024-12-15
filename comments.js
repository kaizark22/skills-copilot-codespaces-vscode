// Create web server
// Create a web server that listens on port 3000. You can respond with a simple HTML file that says "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
});

server.listen(3000);