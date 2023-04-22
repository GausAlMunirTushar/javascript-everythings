const numbers = [3,5,2,'', null, 7,3,9,8];

let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum)

// const result = numbers.sort(1, -1)
// console.log(result)

// numbers.forEach(function (v) {
//     sum += v
// })
// console.log(sum)

const filterArray = numbers.filter( function (v) {
    return typeof v === 'number'
})
console.log(filterArray)