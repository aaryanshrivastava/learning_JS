//getting elements by ID
// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

//getting elements by ByName
let fruit = document.getElementsByName("fruits");
console.log(fruit[2]);
fruit.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});

//getting elements by TagName
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "blue";

//getting elements by ClassName
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "blue";

//query selector with ID :: #, class :: .,
let element = document.querySelector("#myTitle");
element.style.backgroundColor = "blue";

//querySeletorAll
let elements = document.querySelectorAll("#myTitle2");
elements.forEach((element) => {
  element.style.backgroundColor = "yellow";
});
