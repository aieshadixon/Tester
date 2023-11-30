// traditional function to add two numbers
function add (a, b) {
    return a + b;
}

// arrow function to add two numbers
const arrowAdd = (a, b) => a + b;

// traditional function to square a number
function square (x) {
    return x * x;
}

// arrow function to square a number
const arrowSquare = (x) => x * x;

// An array of numbers
const numbers = [1, 2, 3, 4, 5]

// using map function with traditional and arrow functions
const traditionalSquared = numbers.map(function (x) {
    return square(x);
});

const arrowSquared = numbers.map((x) => arrowSquare(x));

// Output the results
console.log("Traditional square(4):", square(4));
console.log("Traditional add(2, 3):", add(2, 3));
console.log("Arrow add(2, 3):", arrowAdd(2, 3));
console.log("Arrow square(4):", arrowSquare(4));

console.log("Traditional square using map:", traditionalSquared);

console.log("Arrow square using map:", arrowSquared);