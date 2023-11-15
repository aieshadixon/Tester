// 
const person = {
    firstName: "Kate",
    lastName: "Smith",
    age: 30,
    address: {
        street: "Mountain",
        city:"Mountain",
        postCode:"Mountain",
    },
    greet: function () {
        console.log("Hello, I'm ${this.firstName} ${this.lastName}.");
    },
};

// Access object properties
console.log(person.firstName);

person.greet();
