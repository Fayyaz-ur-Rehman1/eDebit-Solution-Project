// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

// makeRug(2, 2, 'A')  ➞ [
//   "AA",
//   "AA"
// ]

// You can set a value for the parameter when creating the function e.g. function (x = 3)

function makeRug(m, n, s = '#'){
    let a = [3,2];
    for (var i = 0; i < m; i++) a.push(s.repeat(n))
    return a;
}
console.log(makeRug())