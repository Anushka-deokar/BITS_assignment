/*
  *Assignment 5: Callback Functions with map(), filter(), and 
**reduce() 
1. Task: Create a processData function that accepts an array of numbers and a callback. 
○ If the callback is filterOdd, filter out even numbers. 
○ If the callback is doubleNumbers, double each number. 
○ If the callback is calculateSum, return the sum of all numbers. Bonus Task: 
Implement a callback to find the maximum number in the array.
*/

function processData(numbers, callback) {
    return callback(numbers);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}

function calculateSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function filterOdd(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

console.log("Filtered Odd Numbers:", processData(numbers, filterOdd));
console.log("Doubled Numbers:", processData(numbers, doubleNumbers));
console.log("Sum of Numbers:", processData(numbers, calculateSum));
console.log("Maximum Number:", processData(numbers, findMax));
