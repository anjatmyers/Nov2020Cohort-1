/*

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted
*/

//[10,17,19,22,34]
//          i  j
//             s
// 0  1  2  3  4


let selectionSort = (arr) => {

    for(let i = 0; i< arr.length; i++){
        let smallest = i;

        for(let j= i + 1; j<arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        };

        if(i !== smallest){
            
            [ arr[i], arr[smallest] ] = [arr[smallest], arr[i]  ];
        }
    }

    return arr;  //sorted array
}


//let result = selectionSort([34,22,10,19,17])
//console.log(result);  //[10,17,19,22,34]

let longestSub = (subString) => {
  
    let cache = {};
    let count = 0;
    let longest = 0;

    for(let i = 0; i< subString.length; i++){
        if(!cache[subString[i]]){
            cache[subString[i]] = i;
            count += 1;
        }
        else{
            //we've seen this before - duplicate
            //get index and slice from that point to 1 + current position
            //value of i stored in cache
            let index = cache[subString[i]];
            count = subString.slice(index,i).length
            console.log(subString.slice(index,i));

            if(count > longest){
                longest = count;
            }
            //reset the value of this char in the cache
            cache[subString[i]] = i;
        }
    }

    //console.log(cache);

    return longest;
}

//let result = longestSub("abcabcbb");
//let result = longestSub("bbbbb");
//let result = longestSub("pwwkew");
//console.log(result);

let str = "abcabcefgbb".slice(5,10).length

//console.log(str);
