let arr = ["one", "two"];

let el = 0;
console.log(arr[el]);

count = 1;

el = count % 2;

console.log(arr[el]);

count++;

el = count % 2;

console.log(arr[el]);

if (count === 2) count = 1;

el = count % 2;

console.log(arr[el]);

count++;

el = count % 2;

console.log(arr[el]);

if (count === 2) count = 1;
