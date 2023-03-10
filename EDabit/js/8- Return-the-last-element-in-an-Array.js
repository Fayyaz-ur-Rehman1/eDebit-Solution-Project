// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function getLastItem(arr){
    return arr.pop()
}
console.log( getLastItem([1, 2, 3]))
console.log( getLastItem(["cat", "dog", "duck"]))
console.log( getLastItem([true, false, true]))

function arr(getLastItem){
    return getLastItem.slice(2,3)
}

console.log(arr([1, 2, 3]))
console.log(arr(["cat", "dog", "duck"]))
console.log(arr([true, false, true]))

