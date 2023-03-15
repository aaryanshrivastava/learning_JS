// JS events are actions that Usre or some browser does.
// const element = document.getElementById("mButton");
// element.onclick = doSomething;

// const elementLoad = document.body;
// elementLoad.onload = doSomething;

// const elementText = document.getElementById("mText");
// elementText.onchange = doSomething;

const divElement = document.getElementById("myDiv");
divElement.onmouseover = doColorChange;
divElement.onmouseout = revColorChange;
// divElement.onmousedown = slide click UP to DOWN makes changes.
// divElement.onmouseup = slide click DOWN to UP makes changes.

function doColorChange() {
  divElement.style.backgroundColor = "red";
}

function revColorChange() {
  divElement.style.backgroundColor = "aqua";
}

function doSomething() {
  alert("You Did Something, Aaryan!");
}
