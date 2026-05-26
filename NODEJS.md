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

14. **What is MicroTask and MacroTask (Callback Queue)?**
- *Event Loop*: An Event Loop in JavaScript is said to be a constantly running process that keeps a tab on the call stack. Its main function is to check whether the call stack is empty or not. If the call stack turns out to be empty, the event loop proceeds to execute all the callbacks waiting in the task queue. Inside the task queue, the tasks are broadly classified into two categories, namely micro-tasks and macro-tasks.
- The main difference between Micro Task and Macro Task Queue is their priority. 
- *Micro Task* with Higher Priority.
- The *Micro Task* queue contains the callbacks of operations that are considered more urgent or important, such as promises and mutation observers APIs.
- The *Macro Task* queue contains the callbacks of operations that are less urgent such as timers, I/O events, and user interface events.
```javascript
console.log("Start");

setTimeout(function() {
  console.log("Timeout");
}, 0);

Promise.resolve().then(function() {
  console.log("Promise"); // microTask!
});

console.log("End");

// Start -> End -> Promise -> Timeout
/* setTimeout is placed in Macro Task Queue
Promise.resolve is placed in Micro Task Queue
*/

setTimeout(() => console.log("timeout"), 0);

fetch("/api")
  .then(() => console.log("fetch"));

Promise.resolve().then(() => console.log("promise"));
// promise -> fetch -> timeout
```
- Understanding the Mircotask and Macrotask Queue is important because it can lead to the blocking the event loop by creating too many microtasks or long-running microtasks. This can cause performance issues and delay other important tasks.
- Creating race conditions or unexpected results by relying on the order of execution of different types of tasks. 
    - For example, if you use setTimeout to schedule some code after a promise, you cannot guarantee that the promise will resolve before the timeout.
- To avoid these mistakes some best practices are:
    - Use promises or async/await instead of callbacks whenever possible.
    - Use *queueMicrotask* instead of setTimeout with a very small delay. These methods are more reliable and efficient than setTimeout, as they schedule a microtask without any delay.
- *Micro-Task (Priority)*
    - Promise callbacks (.then, .catch, .finally).
    - Mutation Observer API
    - process.nextTick
    - queueMicrotask function
    - await expressions in async functions
- *Macro-Task*
    - setTimeout and setInterval callbacks
    - DOM manipulation and rendering
    - I/O operations (file reading/writing)
    - Network requests (fetch)
    - Event Handlers (addEventListners)
- The network response is handled as a macro-task, and Promise .then() callbacks are scheduled as micro-tasks.
    - Why Macro-task?
    Because:
    Network I/O is external
    Completion time is unpredictable
    It must wait for the next event loop tick
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
18. **Explain idempotency in APIs**
- Idempotency in APIs is the property where multiple identical requests have the same effect on the server state as a single request.
- Idempotency is typically handled through careful design patterns and the use of middleware or unique identifiers (UUID) to track and prevent duplicate operations.

------------------------------------------------------
------------------------------------------------------

19. **Thread *vs* Process**
- When we run a program on our computer, we start something called process, and it is an instance of a running program. 
- Each process should have at least one thread which is called as Main Thread. And it does the main job because program instruction (our code) is there and it is ready to be executed by CPU.
- Single process can have multiple threads inside of it. 
- Each process has its own memory address space. One process cannot corrupt the memory space of another process (There are some exception).
- In contrast, all the threads in a single process share a common memory space of the process. 
- That's why misbehaving the thread might bring down the entire process. 
- Let's take an example that one thread is deleting something and other thread is needed that memory of the process. This might bring down the entire process. 
- We also need to manage the race conditions and locking. (Multi-threading)

- Chrome allocates one process for each tab. So, if one tab has any problem, it doesn't affect other tabs. 
- When we open a Chrome, OS creates the one process which is parent process. And when we open a new tab, the parent process creates new child process. Also, childern process can create another child process. 
- This processes can exchange and share the data with each other through something called interprocess communication (IPC).
- Each process is represented in OS by a Process Control Block (PCB) that shows some properties. (ProcessID, Process State, Program Counter, Memory management information, I/O status information)


20. **what is libuv in Node.js?**
- libuv is a multiplatform C library that provides support for asynchronous I/O operations on event loops.
- After libuv, as a developer, we don't need to deal with multi-threading anymore. 
```javascript
    console.log('Hi from the main');
    const callback = () => {
        console.log('Hi From call back');
    }
    setTimeout(callback, 1000)
    console.log('Hi Log after the setTimeout');
    for (var i = 0; i<= 99999999 ;i++) {}
```
- In above code, let's suppose for loop takes 2000ms to execute. libuv checks the first line of code and as it is synch it executes it in JS engine. The next setTimeout function is async then libuv know that callback function should not pass directly to JS engine as Main thread have to wait 1000 ms to execute. So, it go to next line and check and so on. Once, the sync code is executed completely then it checks that 1000 ms is passed or not and then provide it to JS engine. 
- But in this case, setTimeout has to be executed after 1000ms but due to for loop it takes 2000 ms to execute. So, we got latency here which is called *Event Loop lag*. That is why people say, as a developer we need to pay attention to not write codes that blocks the Main Thread!

- Let's go for another CPU intensive task.
```javascript
    const crypto = require('crypto');

    const now = new Date()

    const makeHash = (index) => {
    const callback = (err, derivedKey) => {
            console.log(`${index} Hash is ready after ${new Date() - now} ms`);
        }
        crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', callback);
    }

    makeHash(1);
    makeHash(2);
    makeHash(3);
    makeHash(4);
    makeHash(5);
    // OutPut:
    /*
        2 Hash is ready after 54 ms
        4 Hash is ready after 57 ms
        1 Hash is ready after 57 ms
        3 Hash is ready after 57 ms
        5 Hash is ready after 105 ms
    */
```
- Why any four has executed in same amount of time and one is with greater?
- LibUV has a thread pool that has four threads inside of it that are called worker threads. 
- LibUV known the function which takes time, instead of running it on main thread, it assigns the worker thread from the thread pool to handle that function, and then event loop continues working. So the main thread is not blocked. 
- Once the worker thread is done with the execution, it puts the result into a queue in event loop. Now, event loop passes this function to JS engine (V8) to execute, which is running on Main thread. 



- Let's go through some of the concepts first:
    - Synchronous: Code execution line by line one after another.
    - Asynchronous: We can process more than one thing at the same time. 
    ```javascript
        const fn = function () {
            console.log('FN');
        }
        const interval = 100;
        setTimeout(fn, interval);
        console.log('Main');
        /*
            The above code will return:
            Main 
            FN
        */
    ```
    - And the following code will still give the same result as above:
    ```javascript
        const fn = function () {
            console.log('FN');
        }
        const interval = 0;
        setTimeout(fn, interval);
        console.log('Main');
        for(let i=0; i<666666; i++) {}
        /*
            The above code will return:
            Main 
            FN
        */
    ```
    - setTimeout is function which JS engine knows that is asynchronous so it does not execute the callback immediately. First, it checks that any other line is there to interpret, if present then it will execute those lines first. Once, it finds that no other lines are there to execute then it will process the setTimeout callback. 
    - This is very important to note that this interval does not give the gurantee which the callback runs exactly at that time because js is a single threaded and we don't know how much time the synchronous task will take to execute.
-------------------------------------------------------
-------------------------------------------------------
21. Difference between Package.json and package-lock.json?
- 
-------------------------------------------------------
-------------------------------------------------------
22. What is the Difference Between the Cluster Thread and Worker Thread?
- *Worker Thread*: It allows us to run the asynchronous tasks in parallel with the Main Thread without blocking the execution of the Main thread.
- They also able to share the memory by transferring ArrayBuffer instances.
- *Clusters*: Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads. 
- This module provides a way to create multiple worker processes that share the same server port. fork().
---------------------------------------------------------
---------------------------------------------------------
23. What is Node.js Process Model?
- Node.js runs on a single process and the application code runs in a single thread and this is the way it uses less resources than other platforms.
- All the request from the web application will be handled by the single thread and all the blocking operation is peformed asynchronously for a particular request.
- While processing a request, Node.js attaches a callback function to it and moves it to the back-end. Now, whenever its response is ready, an event is called which triggers the associated callback function to send this response. 

---------------------------------------------------------
---------------------------------------------------------
24. How V8 Engine Compiles JS Code?
- Interpreter - line by line
- Compiler = Entire document to byte code.
- V8 Engine uses both compiler and interpreter and follows just-in-time (JIT) compilation to speed up the execution.

---------------------------------------------------------
---------------------------------------------------------
25. What is the difference between process.nextTick() and setImmediate()?
1) process.nextTick()
- The process.nextTick() method adds the callback function to the start of the next event queue. It is to be noted that, at the start of the program process.nextTick() method is called for the first time before the event loop is processed.
- It somewhat gives gurantee that the code will execute.
2) setImmediate()
- The setImmediate() method is used to execute a function right after the current event loop finishes. It is callback function is placed in the check phase of the next event queue.

```javascript
/**
 * setImmediate() and process.nextTick()
 */
setImmediate(() => {
  console.log("1st Immediate");
});

setImmediate(() => {
  console.log("2nd Immediate");
});

process.nextTick(() => {
  console.log("1st Process");
});

process.nextTick(() => {
  console.log("2nd Process");
});

// First event queue ends here
console.log("Program Started");

// Output
Program Started
1st Process
2nd Process
1st Immediate
2nd Immediate
```

---------------------------------------------------------
---------------------------------------------------------
26. What is callback function?
- A callback function which is called when a task is completed.
- This helps us to prevent any blocking of call stack and allows other code to run in the meantime.

---------------------------------------------------------
---------------------------------------------------------
27. What is the difference between Events and Callback?
- Node.js event module which emits named events that can cause corresponding functions or callback to be called.
- Functions listes or subscribed to a particular event to occur and when that event triggers, all the callbacks subscribed to that event are fired one by one in order to which they are registered. 
- All objects that emit events are the instances of EventEmitter class. 
```javascript
/**
 * Events Module
 */
const event = require('events');  
const eventEmitter = new event.EventEmitter();  
  
// add listener function for Sum event  
eventEmitter.on('Sum', function(num1, num2) {  
    console.log('Total: ' + (num1 + num2));  
});  

// call event  
eventEmitter.emit('Sum', 10, 20);

// Output
Total: 30
```

- *callback*: A function that is passed to another function as an argument, which is invoked inside that function once some action or condition is met.
- Promises are the alternatives to deal with the callback.
- Another way is using async/await.

- Callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. 
- The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners
---------------------------------------------------------
---------------------------------------------------------
28. What are the middleware functions in Node.js?
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
- Authentication/Authorization: Verifying user credentials (tokens) before allowing access to a route.
- Request Parsing/Validation: Processing incoming JSON or form data from a request body.
- API Gateway/Routing: Directing API requests to specific backend services.
- Compression/Optimization: Reducing the size of the response sent to the client.
---------------------------------------------------------
---------------------------------------------------------
29. What is the difference between Asynchronous and Non-blocking?
1) *Asynchronous*
The architecture of asynchronous explains that the message sent will not give the reply on immediate basis just like we send the mail but do not get the reply on an immediate basis. It does not have any dependency or order. Hence improving the system efficiency and performance. The server stores the information and when the action is done it will be notified.

2) *Non-Blocking*
Nonblocking immediately responses with whatever data available. Moreover, it does not block any execution and keeps on running as per the requests. If an answer could not be retrieved then in those cases API returns immediately with an error. Nonblocking is mostly used with I/O(input/output). Node.js is itself based on nonblocking I/O model. There are few ways of communication that a nonblocking I/O has completed. The callback function is to be called when the operation is completed. Nonblocking call uses the help of javascript which provides a callback function.

---------------------------------------------------------
---------------------------------------------------------
30. What is the difference between streaming and buffering?
- *Streaming*: It is the continuous transferring of media from server to device, allowing us to watch or listen real-time without downloading the entire file. 
- *Buffering*: It is the supporting process that pre-loads short segments of that stream into a temporary memory area to playback stays smooth. 
- Think of streaming as water flowing continuously through a hose, while the buffer is a small bucket catching the water just before you use it.

---------------------------------------------------------
---------------------------------------------------------
- All types of statuscodes
- JavaScript functionality
- Aggregation and Pipelines in MongoDB
- When to use Mongo and when to use MySQL

- state and props 
- lifting state up in React
- Proper introduction in Interview
- List Virtulaization?
- Error Boundries?
- Why to use Node.js as backend?
- What is Hooks?
- What is service thread?
- How do you handle errors in Node.js Application?
- What is useMemo and React.Memo?
- What is memoization and what is useCallback?
- How do you optimize the list dropdown in react?
- How will you optimize the react code?
- How you handle the production error in React application?
- What are design patterns in JavaScript?
- Circluar Promises in Node.js?
- What is hooks?
- useState and useRef
