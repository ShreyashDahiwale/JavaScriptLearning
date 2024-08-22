// A Promise is an object that represent eventual completion 

const promiseOne = new Promise(function (resolve, reject){
    // Do an async tasks
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log(`Async Task is Complete`);
        resolve();
    }, 1000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed");
});


new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log(`Async Task 2!`);
        res();
    },1000)
}).then(()=>{
    console.log('Async 2 Resolved');
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Chai", email: "chai@chaiaurcode.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Shreyash.Wale", Password: "Pass@123"})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);  
})
.catch((error) =>{
    console.log(error);
})
.finally(() => {
    console.log("The Promise is either resolved or rejected");
})




const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "JavaScript", Password: "Pass@123"})
        }
        else{
            reject('ERROR: JS5 went wrong');
        }
    }, 1000);
})

async function consumePromiseFive (){
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data) => console.log(data))
.catch((error)=> console.log(error))
