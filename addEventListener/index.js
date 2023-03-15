//.addEventListener(event, function, useCapture)

//addEventListener allows us to link an event and a function to an HTML element.
//Its the preferred way of handling events. A benefit is that one element has several event listeners.
//even the same event can invoke different functions.

const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", changeRed /** it is a function.*/);
// innerDiv.addEventListener("mouseout", revChangeRed);

// function changeRed() {
//   innerDiv.style.backgroundColor = "red";
// }

// function revChangeRed() {
//   innerDiv.style.backgroundColor = "aqua";
// }

//testing what would happen if both Divs wait for same output.
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true); // true here is used for the prefernce

function changeBlue() {
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = "blue";
}
