// const isUnique = (arr) => {

//   let cache = {1:true,2:true };
//   let result = true;

//   //cache[name] = val
//   for (let i = 0; i < arr.length; i++) {

//     if(cache[arr[i]]){
//         return false;
//     }
//     else{
//         cache[arr[i]] = true;
//     }

//   }
//   return result;
// };

// let arr1 = [1, 2, 2, 3];  //i = 0 (1)

// console.log(isUnique(arr1)); //100

// const uniqSort = function(arr) {

//     let cache = {}

//     let result = [];

//     for (let i = 0; i <arr.length; i++){

//         if(!cache[arr[i]]){
//             result.push(arr[i]);
//             cache[arr[i]] = true;
//         }
//     }
//     //[ 1, 5, 2, 10 ]
//     result.sort((a, b)=>a-b)

//     return result;
// };

// let arr = [1, 1, 1, 1, 1,5,2, 1, 1, 1,10];

// console.log(uniqSort(arr));

// let str = "hello world"

// str.replace(" ", "")

// var string1 = "";

// var obj = {a: 1, b: 2, c: 3};

// for(let key in obj){
//     obj[key]
// }

// function buildCharMap(str){
//     let charMap = {}
//     for( let char of str.replace(/[^\w]/g, "").toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// function anagrams(stringA, stringB){
//     let aCharMap = buildCharMap(stringA);
//     let bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !==  Object.keys(bCharMap).length){
//         return false;
//     }

//     //iterate over one of the maps
//     for (let char in aCharMap){
//         if (aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }
//     return true;
// }

// 5 * 4 * 3 * 2 * 1  fac(5)
// 6 * fac(5) fac(6)

// const cache = {};

// const memoTime10 = (n) => {

//     if(n in cache){
//         console.log('Fetching from cache', n);

//     }
//     else{
//         //store new value in cache
//         cache[n] = n * 10;
//         //message
//         console.log('Calcuating results');
//         //return n * 10

//     }

//     return cache[n]
// }

// memoTime10(9)
// memoTime10(9)

// [34, 22, 10, 19, 17]

// let someString = "hello";

// console.log(someString.split('').sort().join(''));

function groupAnagrams(words) {


  //copy array and sort each of the elements
  //add sorted elment to cach

  let arr = [...words];
  let cache = {};
  let finalArr = [];
  

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").sort().join("");

    if (cache[arr[i]]) {
       cache[arr[i]].push(words[i]);
    } 
    else {
      let temp = [];
      temp.push(words[i]);
      cache[arr[i]] = temp; //store the indicies
    }
  }


  return Object.values(cache);
  //check to see if element in cache
  //if found, remove it from the array and push to results array

//   for (let x in cache) {
//     let temp = [];
//     let cacheArr = cache[x];

//     cacheArr.forEach((index) => {
//       temp.push(words[index]);
//     });

//     finalArr.push(temp);
//   }

//   console.log(finalArr);
//   return finalArr;
}

let result = groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]);
console.log(result);
