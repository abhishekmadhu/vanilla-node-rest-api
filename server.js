const http = require('http');
const products = require('./products/products');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
});
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
