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

/* 
    RESTFull APIs
    There are some rules/standards which should be followed during request by client and sending response from server.
    1. Server-Client Architecture
      - Server and client can work independently.
      example: JSON response, XML response
    
    2. Always respect all HTTP methods
      - GET, PUT, PATCH, DELETE, POST

    3. Uniform Interface:
      - Resource-Based indentification based on URIs
      - Using standardized methods: GET, PUT, POST, PATCH
    
    4. Statelessness:
      - Each request from client to server must contain all the information necessary to understand and process the request. No session state is stored on the server between requests. 
    
    5. Cacheability: 
      - Responses from the server should be explicitly marked as cacheable or non-cacheable to improve performance on the client side and scalability on the server side.

    
    Additional Best Practices:
    Versioning: Implement API versioning (e.g., /v1/users) to manage changes and ensure backward compatibility.

    Security: Utilize SSL/TLS for secure communication, implement authentication and authorization mechanisms (e.g., OAuth 2.0), and apply rate limiting.
    
    Pagination, Filtering, and Sorting: Provide mechanisms for clients to control the amount and order of data retrieved from collections.
*/
