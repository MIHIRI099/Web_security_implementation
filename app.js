// Import necessary modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, this is an HTTP server!\n');
});

// Define the port for the HTTP server
const httpPort = 8080;

// Start the server
server.listen(httpPort, () => {
  console.log(`HTTP server is running on port ${httpPort}`);
});
