// Accessing array elements
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits[0];
const secondFruit = fruits[1];

console.log(firstFruit);
console.log(secondFruit);

const matrix = [
    [1, 2, 3],
    [4,5,6],
    [7,8,9]
];

const element = matrix[1][2];

console.log(element);

//checking array length
const fruits = ["apple", "banana", "cherry"];
const index = 3;

if (index >= 0 && index < fruits.length) {
    const chosenFruit = fruits[index];
    console.log(chosenFruit);
    else{
        console.log("Index is out of bounds.");
    }
}
