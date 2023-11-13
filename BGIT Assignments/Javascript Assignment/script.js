// Create an array of multiple colors

const colors = ["coral", "red", "green", "blue", "magenta", "yellow"];

// Add an EventListener to the button element

const changeTextColor = document.querySelector('#changeTextColor');

// Add an EventListener to the button element
changeTextColor.addEventListener("click", function () {
    document.body.style.color = randomColor;
    let color = "#";
    for (let i = 0; i < colors.length; i++) {
      colors += letters [Math.floor(Math.random() * 6)];
  }
  return color;
});

  
