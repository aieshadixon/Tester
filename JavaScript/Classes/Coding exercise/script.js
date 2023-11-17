// Create a class to represent a car and its properties

class car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return '${this.make} ${this.model} ${this.year}';
    }
}

const car1 = new car("Kia", "Picanto", "2018");
const car2 = new car("VW", "Polo", "2020");

console.log(car1.make);
console.log(car1.model);
console.log(car2.year);