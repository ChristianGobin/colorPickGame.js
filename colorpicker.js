var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

//Reset button broken when used on easy mode.
var resetButton = document.getElementById("reset");

var hardButton = document.getElementById("hardmode");
var easyButton = document.getElementById("easymode");
var heading = document.querySelector("h1");

hardButton.addEventListener("click", function() {
  this.className = "selected";
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  heading.style.backgroundColor = generateRandomColors(1);
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

easyButton.addEventListener("click", function() {
  this.className = "selected";
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  heading.style.backgroundColor = generateRandomColors(1);
  halfLen = squares.length / 2;
  for (var i = 0; i < halfLen; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  for (var x = halfLen; x < squares.length; x++) {
    squares[x].style.display = "none";
  }
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  heading.style.backgroundColor = generateRandomColors(1);
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      heading.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
