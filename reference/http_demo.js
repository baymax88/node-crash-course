const http = require('http');

// Create server object
http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server run...'));