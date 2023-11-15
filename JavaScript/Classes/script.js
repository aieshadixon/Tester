// Define a class named "person"
class Person {
    // constructor method to initialise properties
    constructor(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
    }

    // method to get the full name of the person
    getFullName() {
        return '${this.firstName} ${this.lastName}';
    }
}

// create instances (objects) of the person class
const person1 = new Person("John", "Kennedy");
const person2 = new Person("Lucy", "Hall");

console.log(person1.firstName);
console.log(person2.lastName);

console.log(person1.getFullName());
console.log(person2.getFullName());


