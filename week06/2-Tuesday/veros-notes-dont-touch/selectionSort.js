
/*

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted
*/
//quadratic
let arr = [34,22,10,19,17];   //[10,17,19,22,34]
function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let smallest = i; 

        for(let j =i+1; j< arr.length; j++){
            if(arr[j] < arr[smallest]) { 
                smallest = j;
            }
        };//end of for loop 

        if(i !== smallest){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        }
    }
    return arr;
}
//[34,22,10,19,17]
// i   j
// 0   1
// s

// smallest = 1
// arr[j] < arr[smallest]


console.log(selectionSort([34,22,10,19,17]));//[10,17,19,22,34]





