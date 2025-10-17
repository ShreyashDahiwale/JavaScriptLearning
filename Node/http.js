const http = require('http')

const myServer = http.createServer((req, res) => {
    console.log("My Http Server");
    res.end('This is message from server');
});

myServer.listen(8000, () => console.log('Server Started!'));


// https: is a hyper text transfer protocol secure (TLS (Transport Layer Security) is the modern, secure replacement for the older SSL (Secure Sockets Layer) protocol)
// http: is a protocol and it is less secure


// GET: get some data from the server 
// POST: want to send and mutate some data in server (to Submit Form Data)
// PUT: To put something on server
// PATCH: If you want to change some existing entry then we use PATCH