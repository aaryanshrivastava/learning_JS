// console.clear();
// console.log("testing the shit out");
// window.alert("I don't love pizaa.");

// let name1 = "Aaryan";
// let age =23;
// let student = true;

// console.log("Hello",name1);
// console.log("Your age is", age);
// console.log("Enrolled as a student:",student);

// // displaying Variable within DOM

// document.getElementById("p1").innerHTML = "Hello " + name1;
// document.getElementById("p2").innerHTML = "Your age is : " + age + " years Old";
// document.getElementById("p3").innerHTML = "Enrolled as a Student : " + student;



// // Accepting USER INPUT in javascript

// let userName1 = window.prompt("What's your name ??");
// console.log(userName1);

// // Accepting USER INPUT via HTML
// let userName2;
// document.getElementById("mbt").onclick = function(){
//     userName2= document.getElementById("mtx").value;
//     console.log(userName2);
//     document.getElementById("mbl").innerHTML = " Hello " + userName2;
// }

// // Type Conversion
// let age2  = window.prompt("How old are you !");
// console.log(2, typeof age2);
// age2=Number(age2);
// console.log(age2, typeof age2);
// age2 += 1;
// console.log(" Happy Birthday! You are ", age2, " Years Old. ");

// let x,y,z;
// x= Number("3.14"); //if a aSTR--NUM then it's n-a-n;
// y= String(3.14);
// z= Boolean("pizza"); //passing an empty string as only quotes will give you false & passing any vlaue will give you best true value.
// console.log("STR2NUM",x,typeof x);
// console.log("NUM222STR",y,typeof y);
// console.log("STR2BOOL",z, typeof z);

// // const
// const pi=3.14159;
// let radius,circumference;
// radius = window.prompt("Enter the R.")
// radius=Number(radius);
// circumference= 2*pi*radius;
// console.log(circumference);

// // JS Math :: an intrinsic object that provides basic mathematics functionality and constants.
// x=3.14;
// x=Math.round(x);
// console.log(x);
// // math has many functions as sqrt, pow, ceil, abs, max, min.

// // Hypotenuse of a Right angled triangle. h= sqrt*(x.pow + y.pow);
// let a;
// let b;
// let c;
// a= window.prompt("Emter side A");
// a= Number(a);
// b= window.prompt("Enter Side B");
// b= Number(b);
// c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// //c= Math.sqrt(c);
// console.log("Side C:",c);

// document.getElementById("btn").onclick=function(){
//     a= document.getElementById("atx").value;
//     a= Number(a);
//     b= document.getElementById("btx").value;
//     b= Number(b);
//     c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
//     document.getElementById("c").innerHTML= "Side C:"+c;
// }


// // useful string methods & properties
// let nameUser = "Aaryan Bro";
// console.log(nameUser.length);
// let firstLetter = nameUser.charAt(1);
// console.log(firstLetter)
// //other properties of strings :: indexOf, lastIndexOf, trim, toUpperCase, toLowerCase, replaceAll("","") 

// //slice() method, extracts a section of strings and retruns it as a new string without modifying newer ones

// let fullName ="Aaryan Shrivastava";
// let firstName;
// let lastName;

// // firstName = fullName.slice(0,6)
// // lastName = fullName.slice(7);
// firstName = fullName.slice(0,fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ")+1);
// console.log(firstName);
// console.log(lastName);

// //method chaining :: calling one method after other in on continuos line of code.

// let userName = "Aaryan Shrivastava";
// let letter = userName.charAt(0).toUpperCase();
// console.log(letter);

// //control statements :: 

// //if statement :: a basic form of decision making, if a condition is true, then do something; if not, then don't do it.

// let yAge=66;
// if(yAge >= 65){
//     console.log("Won't work for you!");
// }
// else if(yAge >=21){
//     console.log("Okay");
// }
// else{
//     console.log("You are in a wrong place!!");
// }

// let online = true;
// if(online){
//     console.log("You are online!")
// }
// else{
//     console.log("You are offline!")
// }


// //checked property :: lets us know if the check box or a radio button is selected,
// //accesing a cehcked property will give us a boolean vlaue true or flase;

// document.getElementById("mBtn").onclick=function(){
//     const myCheckBox = document.getElementById("mCbx");
//     const rupayBtn = document.getElementById("idr1");
//     const upiBtn = document.getElementById("idr2");
//     const netBankBtn = document.getElementById("idr3");
//     if(myCheckBox.checked){
//         console.log("You are Subscribed!!")
//     }
//     else{
//         console.log("You are not Subscribed!!")
//     }

//     if(rupayBtn.checked){
//         console.log("Rupay Using");
//     }
//     else if(upiBtn.checked){
//         console.log("UPI Using");
//     }
//     else if(netBankBtn.checked){
//         console.log("Net Bnaking Using");
//     }
//     else{
//         console.log("Select a Payment Gateway.")
//     }
// }

// // switch statement that examines a vlaue for a match againstmany case clauses,
// //more efficient than else-if statements.

// let grade= "";

// switch(grade){
//     case "A" :
//         console.log("You Did great!!");
//         break;
//     case "B" :
//         console.log("You did Good!!");
//         break;
//     case "C" :
//         console.log("Barely Passed!!");
//         break;
//     case "D" :
//         console.log("You Failed!!")
//         break;
//     default:
//         console.log(grade,"is not a letter grade!!");
// }

// // Strict Equality operaor helps us to determine if the two given vlaues are two as thier datatype.
//  let x  = 3.14;
// /*
// Assignment Operator " = "
// Comparision Operator " == "
// Strict Equality Operator " === "
// */
//  if(x==3.14){
//     console.log("That is pi!")
//  }
//  else{
//     console.log("Thats not pi")
//  }

// //Gives us the ability to check more then 1 condition Concurrently
// // AND && Logical Operator(Both should be true)
// // || OR Logical Operator (Either condition cna be true)

// let temp = 15;
// if(temp > 0 && temp < 30){
//  console.log("You are good to go!!");
// }
// else{
//     console.log("Bad Conditions Outside");
// }

// let sunny = false;
// if(temp > 0 || temp < 30 || sunny){
//     console.log("The weather is good")
// }
// else{
//     console.log("Bad Conditions Outside");
// }

// // ! NOT logical operator
// // typically used to reverse a condition's boolean vlaue
// // true -> false false -> true
// if(!(temp>0)){
//     console.log("It's cold outside!");
// }
// else{
//     console.log("It's warm outside!")
// }

// if(!sunny){
//     console.log("It's cloudy outside!");
// }
// else{
//     console.log("It's Sunny Outside!")
// }


// //Loops
// // while loop = repeat some code, if a codition is true (potentially infinite).

// let loopName  = "";
// while(loopName == "" || loopName == null){
//     loopName=window.prompt("Enter your Name");
// }
// console.log("hello",loopName);
// let X=2;
// while(1==1){
//     console.log("HELP! I'M STUCK IN AN INFINITE LOOP!!",X*2);
// }

// //do while loop :: do something and then check the condition; if its true;

// do{
//     loopName = window.prompt("Enter Your Name");
// }while(loopName == "")

// console.log("Hello", loopName);

// //for loop repeats some code a certain amaount of times
// for(let counter = 1; counter <= 1000000000; counter += 1){
//     console.log(counter);
// }

// // break :: breaks out of a loop entirely
// //continue :: skip an interaction of a loop

// for( let i=1; i<=20; i+=1){
//     if(i==13){
//         break; // break breaks the statement flow at 13
//     }
//     console.log(i);
// }

// for( let i=1; i<=20; i+=1){
//     if(i==13){ 
//         continue; // continue skips/omits 13
//     }
//     console.log(i);
// }

// // nested loops :: a loop inside a another loop;

// let rows= window.prompt("Enter no. of rows.");
// let cols = window.prompt("Enter no. of Columns.");
// let symbol= window.prompt("Enter the symbol to be used.");

// for(let i=1; i<=rows; i+=1){
//     for(let j=1; j<=cols; j+=1){
//     document.getElementById("mRT").innerHTML += symbol;
//     }
//     document.getElementById("mRT").innerHTML += "<br>";
// }

// // function :: Define the code once, and use it many times.
// //             To perform some code and call the function.

// let name1 = "Aaryan";
// let age =23;
// function details(){
//     console.log("Hello",name1,age);
// }
// details();

// //return = returns a value back to the place
//         //where you invoked a function.

//         let area;
//         let width;
//         let height;
//         width = window.prompt("Enter Width");
//         height = window.prompt("Enter Height");
//         area = getArea(width,height);
        
//         function getArea(width,height){
//                     let rArea = width*height;
//                     return rArea;
//         }
//         console.log("Area is",area);

//         // ternary expression :: shortcut for an If else statement;
// // Take 3 operands
// // 1 a condition with ?
// // 2 expression if true  
// // 3 expression if False

// // condition ? exp-if-True : exp-if-False

// let adult =checkAge(21);
// console.log(adult);

// function checkAge(age){
//     return age >= 18 ? true : false;
// }

// checkWinner(true);

// function checkWinner(win){
//     win ? console.log("You Win") : console.log("You Lose");
// }

// //template literals = delimited with (`)
// //used inetad of double or single quotes
// //allows embedded variables and expressions;

// let userName = "Bro";
// let items = 3;
// let total = 85;

// //console.log("Hello",username)
// //console.log("You have", items, "items in your cart");
// //console.log("Your total is $",total)

// //console.log(`Hello ${username}`)
// //console.log(`You have ${items} items in your cart`);
// //console.log(`Your total is $${total}`)

// let text =
// `Hello ${userName}
// You have ${items} items in your cart
// Your total is $${total}`;
// console.log(text);

// const answer = Math.floor(Math.random()*10 + 1);
// let guesses = 0;
// document.getElementById("submitButton").onclick = function(){
//     let guess = document.getElementById("submitButton").value;
//     guesses += 1;
//     if(guess == answer){
//         alert(`${answer} is the number. It took you ${guesses} guesses`);
//     }
//     else if(guess < answer){
//         alert("Too small");
//     }
//     else{
//         alert("Too large!")
//     }
// }

// //Number Guessing game;
// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("sBt").onclick = function (){

//   let guess = document.getElementById("gFe").value
//   guesses+=1;
  
//   if(guess == answer){
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   }
//   else if(guess < answer){
//     alert("Too small!");
//   }
// }

// // Js arrays think of it as a variable that can store multiple values
// let fruit = ["apple","grapes","banana"];
// fruit.push("lemon"); //adds an element at last
// fruit.unshift("mango")// add element to begging
// fruit.pop(); //removes last element
// fruit.shift(); //removes first element

// let length = fruit.length;
// let index = fruit.indexOf("apple"); // if an element exists then the value will be reflected,
//                                     //otherwise -1 will be returned.

// console.log(length);
// console.log(index);
// console.log(fruit[0]);

// let prices =[1,23,43,44,542,23,54,76,43,5456];

// for(let i = 0; i<=prices.length-1; i+=1){
//     console.log(prices[i]);
// }

// //reverse array print
// for(let i = prices.length-1; i>=0;i-=1){
//     console.log(prices[i]);
// }

// //for up statement
// for(let price of prices){
//     console.log(price);
// }

// fruit = fruit.sort(); //for reverse, add ".reverse()"
// for(let fruits of fruit){
//     console.log(fruit);
// }

// //2D array :: an array of arrays.
// let fruits2D = ["apples", "oranges", "bananas"];
// let vegies2D = ["carrots", "onions", "fish"];
// let cereals2D = ["arhar", "chana", "moong"];

// let groceryList = [fruits2D,vegies2D,cereals2D];
// for(let item of groceryList){
//     for(let food of item){
//         console.log(food);
//     }
// }

// //spread operator :: allows an iterable such as an array or string to be expanded,
// // in places where zero or more arguments are expected (unpacks the elements);

// let numsArr=[1,2,3,4,5,6,7,8,9,10]
// let max = Math.max(...numsArr);
// console.log(max);

// let class1 = ['a','b','c'];
// let class2 = ['x','y','z'];
// class1.push(...class2);
// console.log(class1);


// //rest parameters :: represents an indefinite number of parameters (packs the arguments in array)

// let a=1;
// let b=2;
// let c=3;
// let d=4;
// let e=5;

// console.log(sum(a,b,c,d,e));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }

// //callback a function passed as a argument to another function;

// let total = sum(2,3);
// displayConsole(total);
// function sum(x,y){
//     let result = x+y;
//     return result;
// }
// function displayConsole(output){
//     console.log(output);
// }

