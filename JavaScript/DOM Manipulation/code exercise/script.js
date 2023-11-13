// My attemept to change the colour from the class exercise
const button = document.getElementById("changeBackgroundColour");
button.addEventListener("click", function  () {
  document.body.style.backgroundColor = "lightblue";
});

//Below is the correct answer

// select the button element
const changeBackgroundColour = document.getElementById("changeBackgroundColour");

changeBackgroundColour.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
})

function getRandomColor ( ) {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random() * 16)];
    }
    return color;
}