
// let div = document.addEventListener("click", () => {

// });


// setTimeout(()=>{
//     console.log('inside of setTime Out');
// }, 0)


function fib(n){
    if(n <2){
        return n
    }

    return fib(n-2) + fib(n-1)
}

// console.log(fib(40));

// console.log('outside of set time out');


// fetch(url)
// .then()
// .then()
//.catch()

// let result = 0;

// let promise = new Promise((resolve, reject)=>{

//     if(true){
//         result = fib(40);
//         resolve(result);
//     }
//     else{
//         reject('there was an error')
//     }

// })

// promise.then(fibResult=>{
//     console.log(fibResult);
//     return fibResult * 2

// })

// promise.then(mult2=>{
//     console.log(mult2)

// })

// promise.catch(error=>{
//     console.log(error)
// })


//synch code


// console.log('hello world');


//$.get
// let fetch = new Promise((resolve, reject)=>{

//     const request = new XMLHttpRequest();// XHR Object

//     request.onreadystatechange = function(){
//         if(this.readyState === 4){

//             resolve(this.responseText)
//         }
//         else if(this.status === 400){
//             reject(`error: can't fetch url`)
//         }
//     }

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send()

// }).then(response=>{
//     let resp = JSON.parse(response);
//     //console.log("object", resp);
//     return resp;
// }).then(data =>{
//     console.log("promise data", data);
// })



// fetch(url)
// .then(result => result.json())
// .then(data =>{

// })



// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(result => result.json())
// .then(data =>{

//     arr.push(data);
// })

let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([p1, p2])
.then(respArr =>{

    let arr = [];
    arr.push(respArr[0].json());
    arr.push(respArr[1].json());

    return Promise.all(arr);
})
.then(data =>{
    console.log(data);
})






