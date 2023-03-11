// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

let fruit = document.getElementsByName("fruits");
console.log(fruit[2]);
fruit.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});
