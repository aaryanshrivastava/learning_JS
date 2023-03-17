const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin() {
  let timerID = null;
  let x = 0;
  let y = 0;

  //   timerID = setInterval(frameLeft, 5);
  function frameLeft() {
    if (x >= 200) {
      clearInterval(timerID);
    } else {
      x += 1;
      myAnimation.style.left = x + "px";
    }
  }
  //   timerID = setInterval(frameDown, 5);
  function frameDown() {
    if (y >= 200) {
      clearInterval(timerID);
    } else {
      y += 1;
      myAnimation.style.top = y + "px";
    }
  }
  //   timerID = setInterval(diagonally, 5);
  function diagonally() {
    if (x >= 200 || y >= 200) {
      clearInterval(timerID);
    } else {
      x += 1;
      y += 1;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
    }
  }

  // rotate the element
  degrees = 0;
  //timerId = setInterval(rotate, 5);

  function rotate() {
    if (degrees >= 360) {
      clearInterval(timerId);
    } else {
      degrees += 1;
      myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
  }

  timerId = setInterval(rotateDiagonally, 34);
  function rotateDiagonally() {
    if (x >= 1100 || y >= 21100) {
      clearInterval(timerId);
    } else {
      degrees += 675789697;
      x += 1;
      y += 1;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
      myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
  }
}
