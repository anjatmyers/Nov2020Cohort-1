/*
Product Sum 
Write a function that takes in a "special" array and returns its product sum.

A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array its element,where "special" arrays inside it re summed themselves and then multiplied by their level of depth.

The depth of a "special" array is how far nested it is.  For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2. The depth of the innermost array in [[[]]] is 3.

Therefore, the product sum mof [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z);  the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)

Sample input

array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

Sample Output

12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

*/


const productSum = (array, multiplier=1) => {

    return array.reduce((acc, elem)=>{
        if(Array.isArray(elem)){
            acc = acc + (multiplier + 1) * productSum(elem, multiplier + 1)
        }
        else{
            acc = acc + elem; // 0 + 5 = 5 + 2 = 7
        }

        return acc;
    }, 0)
  
}


let result = productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])
console.log(result);