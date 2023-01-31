console.clear();
console.log("testing the shit out");
window.alert("I don't love pizaa.");

let name1 = "Aaryan";
let age = 23;
let student = true;

console.log("Hello", name1);
console.log("Your age is", age);
console.log("Enrolled as a student:", student);

// displaying Variable within DOM

document.getElementById("p1").innerHTML = "Hello " + name1;
document.getElementById("p2").innerHTML = "Your age is : " + age + " years Old";
document.getElementById("p3").innerHTML = "Enrolled as a Student : " + student;

// Accepting USER INPUT in javascript

let userName1 = window.prompt("What's your name ??");
console.log(userName1);

// Accepting USER INPUT via HTML
let userName2;
document.getElementById("mbt").onclick = function () {
  userName2 = document.getElementById("mtx").value;
  console.log(userName2);
  document.getElementById("mbl").innerHTML = " Hello " + userName2;
};

// Type Conversion
let age2 = window.prompt("How old are you !");
console.log(2, typeof age2);
age2 = Number(age2);
console.log(age2, typeof age2);
age2 += 1;
console.log(" Happy Birthday! You are ", age2, " Years Old. ");

let x, y, z;
x = Number("3.14"); //if a aSTR--NUM then it's n-a-n;
y = String(3.14);
z = Boolean("pizza"); //passing an empty string as only quotes will give you false & passing any vlaue will give you best true value.
console.log("STR2NUM", x, typeof x);
console.log("NUM222STR", y, typeof y);
console.log("STR2BOOL", z, typeof z);

// const
const pi = 3.14159;
let radius, circumference;
radius = window.prompt("Enter the R.");
radius = Number(radius);
circumference = 2 * pi * radius;
console.log(circumference);

// JS Math :: an intrinsic object that provides basic mathematics functionality and constants.
x = 3.14;
x = Math.round(x);
console.log(x);
// math has many functions as sqrt, pow, ceil, abs, max, min.

// Hypotenuse of a Right angled triangle. h= sqrt*(x.pow + y.pow);
let a;
let b;
let c;
a = window.prompt("Emter side A");
a = Number(a);
b = window.prompt("Enter Side B");
b = Number(b);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//c= Math.sqrt(c);
console.log("Side C:", c);

document.getElementById("btn").onclick = function () {
  a = document.getElementById("atx").value;
  a = Number(a);
  b = document.getElementById("btx").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("c").innerHTML = "Side C:" + c;
};

// useful string methods & properties
let nameUser = "Aaryan Bro";
console.log(nameUser.length);
let firstLetter = nameUser.charAt(1);
console.log(firstLetter);
//other properties of strings :: indexOf, lastIndexOf, trim, toUpperCase, toLowerCase, replaceAll("","")

//slice() method, extracts a section of strings and retruns it as a new string without modifying newer ones

let fullName = "Aaryan Shrivastava";
let firstName;
let lastName;

// firstName = fullName.slice(0,6)
// lastName = fullName.slice(7);
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);

//method chaining :: calling one method after other in on continuos line of code.

let userName = "Aaryan Shrivastava";
let letter = userName.charAt(0).toUpperCase();
console.log(letter);

//control statements ::

//if statement :: a basic form of decision making, if a condition is true, then do something; if not, then don't do it.

let yAge = 66;
if (yAge >= 65) {
  console.log("Won't work for you!");
} else if (yAge >= 21) {
  console.log("Okay");
} else {
  console.log("You are in a wrong place!!");
}

let online = true;
if (online) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
}

//checked property :: lets us know if the check box or a radio button is selected,
//accesing a cehcked property will give us a boolean vlaue true or flase;

document.getElementById("mBtn").onclick = function () {
  const myCheckBox = document.getElementById("mCbx");
  const rupayBtn = document.getElementById("idr1");
  const upiBtn = document.getElementById("idr2");
  const netBankBtn = document.getElementById("idr3");
  if (myCheckBox.checked) {
    console.log("You are Subscribed!!");
  } else {
    console.log("You are not Subscribed!!");
  }

  if (rupayBtn.checked) {
    console.log("Rupay Using");
  } else if (upiBtn.checked) {
    console.log("UPI Using");
  } else if (netBankBtn.checked) {
    console.log("Net Bnaking Using");
  } else {
    console.log("Select a Payment Gateway.");
  }
};

// switch statement that examines a vlaue for a match againstmany case clauses,
//more efficient than else-if statements.

let grade = "";

switch (grade) {
  case "A":
    console.log("You Did great!!");
    break;
  case "B":
    console.log("You did Good!!");
    break;
  case "C":
    console.log("Barely Passed!!");
    break;
  case "D":
    console.log("You Failed!!");
    break;
  default:
    console.log(grade, "is not a letter grade!!");
}

// Strict Equality operaor helps us to determine if the two given vlaues are two as thier datatype.
let x = 3.14;
/*
Assignment Operator " = "
Comparision Operator " == "
Strict Equality Operator " === "
*/
if (x == 3.14) {
  console.log("That is pi!");
} else {
  console.log("Thats not pi");
}

//Gives us the ability to check more then 1 condition Concurrently
// AND && Logical Operator(Both should be true)
// || OR Logical Operator (Either condition cna be true)

let temp = 15;
if (temp > 0 && temp < 30) {
  console.log("You are good to go!!");
} else {
  console.log("Bad Conditions Outside");
}

let sunny = false;
if (temp > 0 || temp < 30 || sunny) {
  console.log("The weather is good");
} else {
  console.log("Bad Conditions Outside");
}

// ! NOT logical operator
// typically used to reverse a condition's boolean vlaue
// true -> false false -> true
if (!(temp > 0)) {
  console.log("It's cold outside!");
} else {
  console.log("It's warm outside!");
}

if (!sunny) {
  console.log("It's cloudy outside!");
} else {
  console.log("It's Sunny Outside!");
}

//Loops
// while loop = repeat some code, if a codition is true (potentially infinite).

let loopName = "";
while (loopName == "" || loopName == null) {
  loopName = window.prompt("Enter your Name");
}
console.log("hello", loopName);
let X = 2;
while (1 == 1) {
  console.log("HELP! I'M STUCK IN AN INFINITE LOOP!!", X * 2);
}

//do while loop :: do something and then check the condition; if its true;

do {
  loopName = window.prompt("Enter Your Name");
} while (loopName == "");

console.log("Hello", loopName);

//for loop repeats some code a certain amaount of times
for (let counter = 1; counter <= 1000000000; counter += 1) {
  console.log(counter);
}

// break :: breaks out of a loop entirely
//continue :: skip an interaction of a loop

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    break; // break breaks the statement flow at 13
  }
  console.log(i);
}

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    continue; // continue skips/omits 13
  }
  console.log(i);
}

// nested loops :: a loop inside a another loop;

let rows = window.prompt("Enter no. of rows.");
let cols = window.prompt("Enter no. of Columns.");
let symbol = window.prompt("Enter the symbol to be used.");

for (let i = 1; i <= rows; i += 1) {
  for (let j = 1; j <= cols; j += 1) {
    document.getElementById("mRT").innerHTML += symbol;
  }
  document.getElementById("mRT").innerHTML += "<br>";
}

// function :: Define the code once, and use it many times.
//             To perform some code and call the function.

let name1 = "Aaryan";
let age = 23;
function details() {
  console.log("Hello", name1, age);
}
details();

//return = returns a value back to the place
//where you invoked a function.

let area;
let width;
let height;
width = window.prompt("Enter Width");
height = window.prompt("Enter Height");
area = getArea(width, height);

function getArea(width, height) {
  let rArea = width * height;
  return rArea;
}
console.log("Area is", area);

// ternary expression :: shortcut for an If else statement;
// Take 3 operands
// 1 a condition with ?
// 2 expression if true
// 3 expression if False

// condition ? exp-if-True : exp-if-False

let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
  return age >= 18 ? true : false;
}

checkWinner(true);

function checkWinner(win) {
  win ? console.log("You Win") : console.log("You Lose");
}

//template literals = delimited with (`)
//used inetad of double or single quotes
//allows embedded variables and expressions;

let userName = "Bro";
let items = 3;
let total = 85;

//console.log("Hello",username)
//console.log("You have", items, "items in your cart");
//console.log("Your total is $",total)

//console.log(`Hello ${username}`)
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`)

let text = `Hello ${userName}
You have ${items} items in your cart
Your total is $${total}`;
console.log(text);

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("submitButton").value;
  guesses += 1;
  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("Too small");
  } else {
    alert("Too large!");
  }
};

//Number Guessing game;
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("sBt").onclick = function () {
  let guess = document.getElementById("gFe").value;
  guesses += 1;

  if (guess == answer) {
    alert(`${answer} is the #. It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("Too small!");
  }
};

// Js arrays think of it as a variable that can store multiple values
let fruit = ["apple", "grapes", "banana"];
fruit.push("lemon"); //adds an element at last
fruit.unshift("mango"); // add element to begging
fruit.pop(); //removes last element
fruit.shift(); //removes first element

let length = fruit.length;
let index = fruit.indexOf("apple"); // if an element exists then the value will be reflected,
//otherwise -1 will be returned.

console.log(length);
console.log(index);
console.log(fruit[0]);

let prices = [1, 23, 43, 44, 542, 23, 54, 76, 43, 5456];

for (let i = 0; i <= prices.length - 1; i += 1) {
  console.log(prices[i]);
}

//reverse array print
for (let i = prices.length - 1; i >= 0; i -= 1) {
  console.log(prices[i]);
}

//for up statement
for (let price of prices) {
  console.log(price);
}

fruit = fruit.sort(); //for reverse, add ".reverse()"
for (let fruits of fruit) {
  console.log(fruit);
}

//2D array :: an array of arrays.
let fruits2D = ["apples", "oranges", "bananas"];
let vegies2D = ["carrots", "onions", "fish"];
let cereals2D = ["arhar", "chana", "moong"];

let groceryList = [fruits2D, vegies2D, cereals2D];
for (let item of groceryList) {
  for (let food of item) {
    console.log(food);
  }
}

//spread operator :: allows an iterable such as an array or string to be expanded,
// in places where zero or more arguments are expected (unpacks the elements);

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(...numsArr);
console.log(max);

let class1 = ["a", "b", "c"];
let class2 = ["x", "y", "z"];
class1.push(...class2);
console.log(class1);

//rest parameters :: represents an indefinite number of parameters (packs the arguments in array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

//callback a function passed as a argument to another function;

let total = sum(2, 3);
displayConsole(total);
function sum(x, y) {
  let result = x + y;
  return result;
}
function displayConsole(output) {
  console.log(output);
}

// array.forEach() = executes a provided callback function once for each element.

let students = ["aaryan", "pankaj", "sameer"];
students.forEach(capitalize);
console.log(students[1]);
students.forEach(print);

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
  console.log(element);
}

// array.map executes a provided callback function once for each array element and creates a new array.

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

squares.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function print(element) {
  console.log(element);
}

// Array.filter() = creates a new array with all elements that pass the test provided by a function.

let ages = [18, 16, 21, 14, 15, 12, 17, 19, 90];
let adults = ages.filter();

adults.forEach(print);

function printFilter(element) {
  console.log(element);
}
console.log(ages.length);
function checkAge(element) {
  return element >= 18;
}

// array.reduce() = reduces an array to a single value.

let prices = [34, 45, 43, 65, 57, 66, 33];

let total = prices.reduce(checkOut);
console.log(`The total is : $${total}`);

function checkOut(total, element) {
  return total + element;
}

// on expression :: function without a name (anonymous) auiod polluting the global scope with names,
// write it, then forget about it.

const greeting = function () {
  console.log("Hello!");
};
greeting();

//arrow function compact alternative to a traditional function expression; =>

const greeting1 = (userName) => console.log(`Hello ${userName}`);
greeting1("Aaryan");

//shuffle an array
let cards = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
shuffle(cards);

console.log(cards);
cards.forEach((cards) => console.log(cards));

function shuffle(array) {
  let currIdx = array.length;

  while (currIdx != 0) {
    let ranIdx = Math.floor(Math.random() * array.length);
    currIdx -= 1;

    let temp = array[currIdx];
    array[currIdx] = array[ranIdx];
    array[ranIdx] = temp;
  }
  return array;
}

// nested functions :: functions inside other functions .Outer functions have access to inner functions;
// but Inner functions are hidden from outside used in closures.

let meh = "arun";
let messages = "75";

login();

function login() {
  displayNames();
  displayMessages();

  function displayNames() {
    console.log(`Your name is :: ${meh}`);
  }
  function displayMessages() {
    console.log(`Your messages are :: ${messages}`);
  }
}

//closure =  A function with preserved and private data.
//                   Gives you access to an outer function’s scope,
//                   from an inner function.

document.getElementById("loginButton").onclick = login();
function login() {
  let userName = "Bro";
  let userInbox = 1;
  function alertUser() {
    alert(`${userName} you have ${userInbox} new messages!`);
    userInbox = 0;
  }
  return alertUser;
}

// map = object that holds key-value pairs of any datatpye;

const store = new Map([
  ["tshirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

let shoppingCart = 0;
shoppingCart += store.get("tshirt");
shoppingCart += store.get("jeans");
shoppingCart += store.get("socks");
console.log(shoppingCart);

store.set("hat", 40);
print();
store.delete("hat");

console.log("<__Break Space__> ");
console.log("<__Break Space__> ");
print();

console.log(store.has("underwear"));
console.log(store.size);

function print() {
  store.forEach((value, key) => {
    console.log(`${value} $${key}`);
  });
}

// Object = A group of properties and method properties,
// which tells an object what to do and what it can.
// ".", used to access properties and methods.

const car = {
  model: "mustang",
  color: "red",
  year: "2023",

  drive: function () {
    console.log("You drive the Car.");
  },
  brakes: function () {
    console.log("You stepped on the Brakes.");
  },
};

console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brakes();

// tihs is refrence to a particular obeject, the object depends on the immediate context;
// it just means that we are replacing the the Object name with this keyword.

const car1 = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
};
const car2 = {
  model: "Corvette",
  color: "blue",
  year: 2024,

  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
};

car1.drive();
car2.drive();

// Class = is a blueprinbt for creating a obeject,
//defines what properties and methods do they have,
// use a constructor for unique properties.

class Player {
  score = 0;
  pause() {
    console.log("You Passed the game.");
  }
  exit() {
    console.log("You exited the game.");
  }
}

const player1 = new Player();
const player2 = new Player();

player1.score += 1;

console.log(player1.score);
player1.pause();
player1.exit();

console.log(player2.score);

// constructor is a special method of a class,
// accepts and assigns properties,

class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`${this.name} is studying.`);
  }
}

const stud1 = new Student("Aaryan", 21, 3.5);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.gpa);
stud1.study();

const stud2 = new Student("Pankaj", 22, 4.2);
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.gpa);
stud2.study();

const stud3 = new Student("Sameer", 24, 3.5);
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.gpa);
stud3.study();

// ststic = belongs to the class , not the objects,
//properties = useful for catches, fixed-configuration.
// methods = useful for utility functions.

class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();

//inheritance = a child class can inherit all the methods  & properties from another class.

class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating.`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping.`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  //these properties are commented so as to show that these can be placed in parent class "animal"  and extended.
  // alive = true;
  // eat() {
  //   console.log(`This ${this.name} is eating.`);
  // }
  // sleep() {
  //   console.log(`This ${this.name} is sleeping.`);
  // }
  run() {
    console.log(`This ${this.name} is running.`);
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming.`);
  }
}

class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`This ${this.name} is flying.`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//rabbit properties.
console.log("Rabbit is alive?: ", rabbit.alive);
rabbit.eat();
rabbit.run();
rabbit.sleep();

//rabbit properties.
console.log("Fish is alive?: ", fish.alive);

fish.eat();
fish.swim();
fish.sleep();

//rabbit properties.
console.log("Hawk is alive?: ", hawk.alive);
hawk.eat();
hawk.fly();
hawk.sleep();

//super keyword refers to the parent class, commonly used to invoke constructor of a parent class.

class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbits extends Animals {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeeed = runspeed;
  }
}
class Fishes extends Animals {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }
}
class Hawks extends Animals {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }
}

const rabbits = new Rabbits("Rabbit", 1, 40);
const fishes = new Fishes("Fish", 4, 70);
const hawks = new Hawks("Hawk", 7, 200);

console.log(rabbits.name);
console.log(rabbits.age);
console.log(rabbits.runspeeed);

console.log(fishes.name);
console.log(fishes.age);
console.log(fishes.swimspeed);

console.log(hawks.name);
console.log(hawks.age);
console.log(hawks.flyspeed);

// get = binds an object property to a function when that property is accessed;
//set = binds an object property to a function whent that property is assigned a value.
class truck {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }
  get power() {
    return `${this._power}hp`;
  }
  get gas() {
    return `${this._gas}Litres : (${(this._gas / 50) * 100}%)`;
  }
  set gas(value) {
    if (value > 50) {
      value = 50; //limited/capped to 50
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}
let trucks = new truck(455);

trucks.gas = 6;

console.log(trucks.power);
console.log(trucks.gas);

// passing objects as arguments;

class superCars {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`You drive a ${this.model}`);
  }
}

const sCar1 = new superCars("Mustang", 2020, "Red");
const sCar2 = new superCars("Ferrari", 2017, "Black");
const sCar3 = new superCars("Lamborghini", 2018, "Yellow");

changeColor(sCar3, "gold");
displayCars(sCar3);

function displayCars(superCars) {
  console.log(superCars.model);
  console.log(superCars.year);
  console.log(superCars.color);
}

function changeColor(superCars, color) {
  superCars.color = color;
}

// array of objects :

const sCars = [sCar1, sCar2, sCar3];

console.log(sCars[0].model);
sCars[0].drive();

startRace(sCars);

function startRace(sCars) {
  for (const car of sCars) {
    car.drive();
  }
}
//annonymous objects = Objects without a name, not directly refrenced.Less Syntax. No need for unique syntax.
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("A", "Diamonds"),
  new Card("A", "Clubs"),
  new Card("2", "Hearts"),
  new Card("2", "Spades"),
  new Card("2", "Diamonds"),
  new Card("2", "Clubs"),
];

cards.forEach((card /*argument*/) => console.log(`${card.value} ${card.suit}`));

// error  :: obejct with a description of something went wrong,

// Can't open a file.
// Lose connection
// User Types incorrect values.
// TypeError eg :: console.lag()

// throw :: executes a user defined error.
try {
  console.lag("Great");

  let x = window.prompt("Enter a no.");
  x = Number(x);

  if (isNaN(x)) throw "That wasn't a no.";
  if (x == "") throw "Enter a no.";
  console.log(`${x} is a number`); //enter a string and check it.
} catch (error) {
  console.log(error);
} finally {
  //always get executes even if nothing above works.
  console.log("this always executes.");
}

// setTimeout() :: invokes a function after a number of miliseconds, it's an asynchronous fn (doesn't pause execution).

let t1 = setTimeout(firstMessage, 3000);
let t2 = setTimeout(secondMessage, 5000);
let t3 = setTimeout(thridMessage, 3000);

function firstMessage() {
  alert(`Buy this For 500₹.`);
}
function secondMessage() {
  alert(`Buy this For 10$.`);
}
function thridMessage() {
  alert(`Buy this For 1,000Yu.`);
}
document.getElementById("myButton").onclick = function () {
  // clearTimeout :: cancels oraganised manner and interrupts to do its work.
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  alert("Do it!");
};

// setInterval() :: invokes a function repeatedly after no. of milliseconds, asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000); // performs an action again after 1000Ms.

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}

Clock program.

const myLabel = document.getElementById("clock");
update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}: ${minutes}: ${seconds} ${amOrPm}`;
  }
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}

//synchronous code = In an ordered sequence.
//                                      Step-by-step linear instructions
//                                     (start now, finish now)

// asynchronous code = Out of sequence.
//                                        Ex. Access a database
//                                              Fetch a file
//                                              Tasks that take time
//                                        (start now, finish sometime later)

// synchronous
console.log("START");

// asynchronous
setTimeout(() => console.log("This is asynchronous"), 5000); // occurs after 5 seconds.

// synchronous
console.log("END");
