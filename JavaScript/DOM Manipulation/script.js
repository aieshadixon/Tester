// Access the element by its ID using const
const element = document.getElementById('example');

// Change the text content of the element
element.textContent = "Hello, Updated DOM!";

// Add an event listener to the button to change the text
const button = document.getElementById("changeTextButton");
button.addEventListener("click", function() {
    element.textContent = "Text changed by button click!";
});

// get elements by tag name
let paragraphs = document.getElementsByTagName('p');

// Change the text content of the first paragraph
if (paragraphs.length > 0) {
    paragraphs[0].textContent = "Text changed by getElementsByTagName";
}

// Get an element by ID using querySelector
let heading = document.querySelector("#example-heading");

// Add an event listener to change the text of the heading
if (heading) {
    heading.addEventListener("click", function() {
        heading.textContent = "Heading clicked!"
});
}

// Get elements by class name using querySelectorAll
let highlightedElements = document.querySelectorAll("paragraph");

// Loop through the selected elements and change their text content
highlightedElements.forEach(function(element, index) {
    element.textContent = "Highlighted Element" + (index + 1)
});

// Create a new HTML element using createElement
let newDiv = document.createElement("div");
