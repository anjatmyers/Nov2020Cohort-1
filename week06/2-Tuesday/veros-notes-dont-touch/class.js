

const request = new XMLHttpRequest(); //XHR Object

//event listener
request.onreadystatechange = function(){
    if(this.readyState === 4){
        //console.log(this.responseText);

        let data = JSON.parse(this.responseText);
        console.log(data);
    }
}

request.open("GET", "https://jsonplaceholder.typicode.com/todos");

request.send();

fetch()


// let result = fetch("https://jsonplaceholder.typicode.com/todos");

// console.log(result);

//1 2 3 5 8 13  fib(n-1) + f(n-2) 2^n  1.6^n
// let fib = (n) => {

//     if(n <2){
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(50))

// let sum = 0;

// for(let i=0; i< 10; i++){

//     sum += i;
// }

// console.log(sum);

// console.log('before set timeout ')

// setTimeout(()=>{
//     console.log('inside of set timeout')
// }, 5000)


// console.log('outside of set timeout')


