const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end(`Hello from Kubernetes NodeJS App! Pod: ${process.env.HOSTNAME}\n`);
});

server.listen(port, () => console.log(`Server running on ${port}`));
