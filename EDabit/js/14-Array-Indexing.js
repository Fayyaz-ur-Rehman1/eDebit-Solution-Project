// Given an index and an array, return the value of the array with the given index.

// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
// Notes
// Math.floor() can be helpful.

function valueAt(arr1,arr2){
    return arr1 [Math.floor(arr2)]
}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2) )
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2))
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2))