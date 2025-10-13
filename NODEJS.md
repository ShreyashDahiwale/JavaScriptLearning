# Node.js
1. **What is Node.js?**
- Node.js is the cross-platform JavaScript Runtime Environment which helps us to run the JavaScript outside of the Web Browser. 
(Cross-Platform: It is designed to operate on multiple systems).
- It is built on Chrome's V8 JavaScript Engine.
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

7. ** What is Single Threaded Programming?**
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