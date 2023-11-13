// You have an array of numbers: const numbers = [1, 2, 3, 4, 5].
// Create an arrow function called double that takes a number as an argument and returns that number multiplied by 2.
// Use the map function to create a new array called doubledNumbers that contains the doubled values of the numbers array. Use the double arrow function to achieve this.
// Create an arrow function called isEven that takes a number as an argument and returns true if the number is even and false if it's odd.
// Use the filter function to create a new array called evenNumbers that contains only the even numbers from the numbers array. Use the isEven arrow function for this.
// Create an arrow function called sum that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// Use the reduce function to calculate the sum of all numbers in the numbers array. Use the sum arrow function for this.
// Output the doubledNumbers, evenNumbers, and the sum of all numbers to the console.

const numbers = [1, 2, 3, 4, 5];

// arrow functon to double a number
const double = (number) => number * 2;

// use the map function to double each number
const doubledNumbers = numbers.map((double) => arrowDouble(double));

// arrow function to check if a number is even
const isEven = (number) => number % 2 === 0;

const evenNumbers = number.filter(isEven);

const sum = (numbersArray) => numbersArray.reduce((acc, curr) => acc + curr, 0);

const totalSum = sum(numbers);

console.log("Doubled Numbers:", doubledNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Total Sum:", totalSum);
