const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");

myButton.addEventListener("click", () => {
  if (myImage.style.display == "none") {
    myImage.style.display = "block";
  } else {
    myImage.style.display = "none";
  }
});
