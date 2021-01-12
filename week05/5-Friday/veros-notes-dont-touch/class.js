// var a = 4;
// var b = 1;
// const pi = 3.14;
// const arr = [1, 2, 3, 5]
// const obj = {
//     fName: 'Veronica'
// }

// for (let b = 3; b <= 10; b++) {
//   //console.log(b)
// }


// obj["l Name"] = 'Lino'

// obj.lName = "Lino"
// console.log(obj)

//main
// arr[4] = 4;
// arr.push(99)
// // pi = 3;
// console.log(arr);


// let name = 'Tiger';
// let age = 13;

// console.log(`My cat's name ${name}`)

// let age = 23;

// let arr = [1, 3, 5]

// console.log(`I'm not ${age.toString()}  ${arr.map(el => el + 1)}`)


// let newArr = arr.map(el=>el + 1)



// let arr = [1, 2, 3, 4];

// let [a, b, c, d] = arr;


// console.log(c)


// let luke = { occupation: 'jedi', father: 'anakin' };


// let {occupation, father} = luke;
// let occupation = luke.occupation;
// let father;

// console.log(occupation, father)




// if(b > a){
//     console.log('a is less than b');
// }
// else{

// }

// (condition) ? (true) : (false)
// a > b ? console.log('a is less than b') : console.log('a is greater than b');


// let str = `this is my result ${a >b ? 4: 10}`
// console.log(str);

// let add = (x=0, y=0) => {
   
//     // x = x || 0;
//     // y = y || 0;

//     return x + y
// }

// console.log(add(5))

// let logArguments = (...args) => {
  
//     //args is an array

//     args.forEach(el =>{
//         console.log(el);
//     })
// }

// logArguments(5)

// let arr = [{key:[{}]}]

// arr[0].key[0].key


// let arr = [1, 2, 3, [1,4], 5];

// var a = arr[0]

// let [a, b, c, d, e] = arr;

// console.log(d, arr);


// var luke = { occupation: 'jedi', 
// father: {
//     fName: 'anakin',
//     lName: 'skywalker'
// } };

// // var occupation = luke[occupation];

// let {occupation:o, father:{fName:f, lName:l}} = luke;

// console.log(f, l);

// let add = (a=0, b=0) => {
//     // a = a || 0;
//     // b = b || 0;
//     return a + b
// }

// console.log(add(4))

// let sum = (...args) => {  //[5]
  
//     if(args.length === 0) return 0;
//     if(args.length === 1) return args[0];

//     let sum = 0;

//     sum = args.reduce((acc, elem) => acc + elem, 0)

//     return sum
// }


// let result = sum();

// console.log(result);


// let arr = [10, 3, 5]

// let arrB = [...arr];


// let arr2 = [10, 20, 40, ...arr, 99, 90 ]

// console.log(arr2, arr);

// let result = Math.max(...arr);

// console.log(result);


//generator iterator
//yield



// console.log(arr);

// arrB[0] = 99;

// console.log(arr, arrB);

let arr = [1 , 2, 3, 40]

// arr.forEach(el =>{

// })

for(let val of arr){
    console.log(val);
}


let obj = {
    a: 1,
    b: 2,
    c: 3
}


let result = Object.values(obj);
console.log(result);

// for(let key in obj){
//     let value = obj[key]
//     console.log(key, value);
// }







