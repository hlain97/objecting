// Write the function camelize(str) that changes dash-separated words like 
// “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

// function camelize(str){
//    let myArr = str.split('');
//    let capitalizeNext = false;

//    function removeDash(i){

//     if(i !== "-" && capitalizeNext === true){
//         i = i.toUpperCase();
//         capitalizeNext = false;
//         return i;
//     } else if ( i !== "-" && capitalizeNext === false){
//         return i;
//     } else if ( i === "-"){
//         capitalizeNext = true;
//     };
//    }

//    let newArr = myArr.map(removeDash);
//    console.log(newArr.join(""))

// }

// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// ###############################################################################
// Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements with values higher or equal to a and lower or equal to b 
// and return a result as an array.

// The function should not modify the array. It should return the new array.

// let myArr = [5, 3, 8, 1]

// function filterArr (arr, a, b){
//     return arr.filter(i => (a <= i && i <= b));
// }

// let newArr = filterArr(myArr, 1, 4);

// console.log(newArr)

// #######################################
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and
//  removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

let myArr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    return arr.filter(i => (i > a && i < b));
}

let newArr = filterRangeInPlace(myArr, 1, 4)

console.log(newArr)