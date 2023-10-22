// Create an array of multiple colors
const colors = ["coral", "red", "green", "blue", "magenta", "yellow"];

let changeTextColor = document.querySelector('changeTextColor');

// Add an EventListener to the button element
changeTextColor.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.color = randomColor;
});

function getRandomColor() {
  // Generate a random index within the range of the colors array length
  const randomIndex = Math.floor(Math.random() * colors.length);
  // Return the color at the randomly generated index
  return colors[randomIndex];
}
