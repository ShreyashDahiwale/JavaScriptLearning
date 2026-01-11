# Node.js
1. **What is Node.js?**
- Node.js is the cross-platform JavaScript Runtime Environment which helps us to run the JavaScript outside of the Web Browser. 
(Cross-Platform: It is designed to operate on multiple systems).
- It is built on Chrome's V8 JavaScript Engine.
- Each browser has its own JavaScript Engine.
- Earlier JavaScript is executable only in browsers because only they have JavaScript Engine.
- It enhances the JS capabilities to use for building server-side applications.
- V8 Engine: This engine compiles JavaScript code into machine code, allowing for efficient and fast execution.

-------------------------------------------------------------------
-------------------------------------------------------

2. **How Node is a runtime environment on server side? What is V8?**
- On the server side, Node JS' runtime environment also includes the V8 Engine and APIs for file system access and network communication, among other functionalities.

--------------------------------------------------------
-------------------------------------------------------------

3. **What is the difference between Runtime environment and Framework?**
- A ***Runtime*** environment is merely a platform to execute commands. Popular are JRE (Java Runtime Environment), Node.js (for JavaScript), it process the code and produce results. 
- It don not enforce development patterns... they just run the code.
- ***Framework*** focuses more on best practices, i.e. the development patterns means the way you should write the code. 
- Frameworks are opinionated, designed to produce predictable outcomes. Example: Express.js
- Without Express.js, it is still possible to create web server from scratch upon Node.js. But that is time consuming and require to know all the nuances of how a web server works. 

------------------------------------------------------------
----------------------------------------------------------
4. **What is the difference between Node.js & Express.js?**
- Both are used in web development. 
- Node.js is the runtime environment for JavaScript.
- Express.js is the web application framework built on top of Node.js. It simplifies and streamlines the process of building web applications and APIs. 

------------------------------------------------------
-------------------------------------------------------

5. **What are the differences between Client-Side(Browser) & Server-Side(Node.js)?**
- Web Browser executes client-side scripting. It is used when the browser have all the code. 
- These processes are carried out on the User's device. 
- Web Servers are used to execute server-side scripting. Web servers is where the website or web application is hosted. 
- These processes typically executed by the server before the website or web application is deliver to the user's device. 

- The main differences between the server-side and client-side processes is the amount of control and access to the resources that each has.
- Server side processes has access to the server's resources such as CPU, Databases, memory, storage, or other servers. 
- Client-side processes have only access to the User's device, such as CPU, storage, or memory.

-----------------------------------------------------------------
---------------------------------------------------------------------

https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

6. **Main Features of Node.js**
- ***Asynchronous and Non-blocking I/O***: Node.js uses event-driven, non-blocking I/O model, allowing it to handle multiple concurrent requests without waiting for previous opertion to complete. This enhances performance and responsiveness. 

- ***Single-Threaded Event Loop***: 


---------------------------------------------------
------------------------------------------------------

7. **What is Single Threaded Programming?**
- Single Threaded Programming Languages execute One Task at a Time, in a sequential order, or a single thread of execution.
- In JS, a call stack manages the order of execution of functions in a single-threaded environment; functions are added when called and removed when executed. 
- This can lead to the blocking entire thread if some task is taking too longer to execute, i.e. time consuming, such as waiting for file to load or a network response. 

------------------------------------------------------------
------------------------------------------------------------

8. **What is Synchronous Programming?**
- Synchronous programming is a programming model where operations execute in sequential order. 
- The program move to next stage when the current step has completed execution and has returned an outcome. 

9. **What is Multi Threaded Programming?**
- Thread is a lightweight process that can execute idependently but shares the code and data section of its parent process. 
- Threads execute concurrently, meaning they can overlap in time.
- In multi-core system, they can run in parallel, with each thread on a different CPU at the same time. 
- *Example: A web browser can display a webpage in one thread while downloading a file in another.* 

-------------------------------------------------------------
-------------------------------------------------------------

10. ***What is Asynchronous Programming?***
- Asynchronous Programming allows tasks to execute independenlty of one another, enabling concurrent execution and improved performance. 
- Ex: Event Handlers, Callbacks, Promises, Async/Await

-----------------------------------------------------------------
-----------------------------------------------------------------

11. **What are the disadvantages of node? When to use and when not to use Node?**
- Real-Time Applications: Ideal for applications requiring low-latency and high concurrency, such as live dashboards.
- APIs and MicroServices: Excellent for building fast and scalable APIs and microservices, particularly when handling multiple I/O operations.
- Single Page Applications: Can be used both for Frontend and Backend.
- Node.js is not suitable for CPU-intensive tasks, coz it's a single threaded language. 

-----------------------------------------------------------------
-----------------------------------------------------------------

12. **What is REST & RESTful API?** ***Representational State Transfer***
- An application programming interface (API) defines the rules that you must follow to communicate with other software systems.
- REST Architecture:
    - Client-Server: Client sends request to the server to get the response.
    - Stateless: A Request from a client to a server must contain all the information needed to understand and complete the request. The server does not store any client-specific context between the requests.
    - Uniform Interface: It is a resource-based interface, where resources are identified by URIs (Uniform Resource Identifiers) and manipulated using standard methods like, GET, PUT, DELETE, POST. 
    A request should identify the resources and it is done by using URIs.
    - Representations: The server sends a representation of the resource's state to the client. For example, the client might request a user's profile, and the server would return the data in a JSON or XML representation. 
    - Cacheable: To improve performance and scalability, responses can be cached. 
- REST API: Based on REST Architectural Style, but not strictly following all the constraints. 
- RESTful APIs: Fully implement all Six constraints of REST Architecture.

--------------------------------------------------------------------
--------------------------------------------------------------------

13. ***HTTP Codes***
- 200 - OK
- 201 - Created
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error

--------------------------------------------------------------------
--------------------------------------------------------------------

14. **What is MicroTask and MacroTask?**

--------------------------------------------------------------------
--------------------------------------------------------------------

15. **If Node.js is single threaded then how it handles concurrency?**
- The reason why node js is popular despite being single-threaded is the asynchronous nature that makes it possible to handle concurrency and perform multiple I/O operations at the same time. 
- Node.js uses an event loop to maintain concurrency and perform non-blocking I/O operations.
- As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order.
- It executes a task only when there is no ongoing task in the call stack.
- The call stack works in LIFO(Last In First Out) order. The event loop continuously checks the call stack to check if there is any task that needs to be run. Now whenever the event loop finds any function, it adds it to the stack and runs in order.
- The call stack executes synchronous code first.
- Any asynchronous operations (setTimeout, fs.readFile, network requests) are delegated to libuv.
- Node.js uses a special C library called libuv to handle asynchronous operations. This library manages a thread pool that offloads heavy tasks (like file I/O, database operations, or network requests) that would otherwise block the event loop. The thread pool contains several threads that perform tasks like:
        File system I/O (fs.readFile)
        Network requests (HTTP, TCP, DNS)
        Timers (setTimeout, setInterval)
        Compression and cryptographic tasks
- Once the thread pool completes its tasks, it sends callbacks to the event queue. The event loop processes these callbacks, but only when the call stack is empty (i.e., when no synchronous code is currently executing).
```javascript
function func(){
    console.log("Statement 1 inside function");
    setTimeout(function(){
        console.log("Statement 2 inside function");
    },2000);
    console.log("Statement 3 inside function");
    
}
console.log("Statement outside function");
func();
```

-------------------------------------------------------
-------------------------------------------------------
16. **How do you structure a scalable Express application?**
    * Folder Structure (Modular/Layered Approach)
    - src/: Root for your source code.
    - routes/: Defines API endpoints, often grouped by feature (e.g., users.js, products.js).
    - controllers/: Handles request/response logic, calls services, and orchestrates actions.
    - services/: Contains core business logic and reusable functions (e.g., database interactions, external API calls).
    - models/: Defines data structures (e.g., Mongoose schemas).
    - middlewares/: Custom functions for tasks like authentication, logging, validation.
    - config/: Application settings, database connections, etc..

----------------------------------------------------------
----------------------------------------------------------
17. **Difference between Promise and Async/Await in Node?**
- Both Promises and Async/Await handle asynchronous operations in Node.js, but Async/Await offers a more readable, synchronous-like approach compared to Promises. 
- Promises are useful for chaining .then() and .catch(), while Async/Await simplifies error handling and improves code readability.
- A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It provides a cleaner way to handle asynchronous operations compared to traditional callback functions, helping to avoid "callback hell."
- Promise has three states. 
    - Pending: Initial State, neither fulfilled nor rejected. 
    - Fulfilled: Operation completed successfully.
    - Rejected: Operation Failed
- Methods: then(), catch(), finally()
```javascript
const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(function () {
        console.log("Promise resolved successfully");
    })
    .catch(function () {
        console.log("Promise is rejected");
    });
```
- Async/Await is a simpler way to work with Promises in javascript. 
- The async keyword is used to create a function that returns a Promise, while the await keyword pauses the function's execution until the Promise is done.
- Async Functions: An async function returns a Promise. It allows the use of the await keyword inside it.
- Await: The await keyword pauses the execution of the async function until the Promise is resolved or rejected.
- Methods: try, catch, finally
```javascript
const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
        const x = "geeksforgeeks";
        const y = "geeksforgeeks";
        if (x === y) {
            resolve("Strings are same");
        } else {
            reject("Strings are not same");
        }
    });

    return promise;
};

async function demoPromise() {
    try {
        let message = await helperPromise();
        console.log(message);
    } catch (error) {
        console.log("Error: " + error);
    }
}

demoPromise();
```
----------------------------------------------------
----------------------------------------------------
