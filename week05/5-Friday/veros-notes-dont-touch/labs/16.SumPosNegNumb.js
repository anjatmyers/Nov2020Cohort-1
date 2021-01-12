
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/

let sumPlusMinus = arr => {
  
    arr.reduce((acc, elem) =>{
        // acc = acc + elem = 0 + 10
        // acc = acc + elem = 10 + -12
        
        // acc = {plus:0, minus:0}
        // acc.plus
        // acc.minus
        return (
            {
                plus: elem > 0 ? acc.plus + elem : acc.plus,
                minus: elem < 0 ? acc.minus + elem : acc.minus
            }
        )
       
    }, {plus: 0, minus: 0})
}



var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write code here

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

