console.clear();
console.log("testing the shit out");
window.alert("I don't love pizaa.");

let name1 = "Aaryan";
let age =23;
let student = true;

console.log("Hello",name1);
console.log("Your age is", age);
console.log("Enrolled as a student:",student);

// displaying Variable within DOM

document.getElementById("p1").innerHTML = "Hello " + name1;
document.getElementById("p2").innerHTML = "Your age is : " + age + " years Old";
document.getElementById("p3").innerHTML = "Enrolled as a Student : " + student;



// Accepting USER INPUT in javascript

let userName1 = window.prompt("What's your name ??");
console.log(userName1);

// Accepting USER INPUT via HTML
let userName2;
document.getElementById("mbt").onclick = function(){
    userName2= document.getElementById("mtx").value;
    console.log(userName2);
    document.getElementById("mbl").innerHTML = " Hello " + userName2;
}

// Type Conversion
let age2  = window.prompt("How old are you !");
console.log(2, typeof age2);
age2=Number(age2);
console.log(age2, typeof age2);
age2 += 1;
console.log(" Happy Birthday! You are ", age2, " Years Old. ");

let x,y,z;
x= Number("3.14"); //if a aSTR--NUM then it's n-a-n;
y= String(3.14);
z= Boolean("pizza"); //passing an empty string as only quotes will give you false & passing any vlaue will give you best true value.
console.log("STR2NUM",x,typeof x);
console.log("NUM222STR",y,typeof y);
console.log("STR2BOOL",z, typeof z);

// const
const pi=3.14159;
let radius,circumference;
radius = window.prompt("Enter the R.")
radius=Number(radius);
circumference= 2*pi*radius;
console.log(circumference);

// JS Math :: an intrinsic object that provides basic mathematics functionality and constants.
x=3.14;
x=Math.round(x);
console.log(x);
// math has many functions as sqrt, pow, ceil, abs, max, min.

// Hypotenuse of a Right angled triangle. h= sqrt*(x.pow + y.pow);
let a;
let b;
let c;
a= window.prompt("Emter side A");
a= Number(a);
b= window.prompt("Enter Side B");
b= Number(b);
c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//c= Math.sqrt(c);
console.log("Side C:",c);

document.getElementById("btn").onclick=function(){
    a= document.getElementById("atx").value;
    a= Number(a);
    b= document.getElementById("btx").value;
    b= Number(b);
    c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("c").innerHTML= "Side C:"+c;
}


// useful string methods & properties
let nameUser = "Aaryan Bro";
console.log(nameUser.length);
let firstLetter = nameUser.charAt(1);
console.log(firstLetter)
//other properties of strings :: indexOf, lastIndexOf, trim, toUpperCase, toLowerCase, replaceAll("","") 

//slice() method, extracts a section of strings and retruns it as a new string without modifying newer ones

let fullName ="Aaryan Shrivastava";
let firstName;
let lastName;

// firstName = fullName.slice(0,6)
// lastName = fullName.slice(7);
firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);

//method chaining :: calling one method after other in on continuos line of code.

let userName = "Aaryan Shrivastava";
let letter = userName.charAt(0).toUpperCase();
console.log(letter);

//control statements :: 

//if statement :: a basic form of decision making, if a condition is true, then do something; if not, then don't do it.

let yAge=66;
if(yAge >= 65){
    console.log("Won't work for you!");
}
else if(yAge >=21){
    console.log("Okay");
}
else{
    console.log("You are in a wrong place!!");
}

let online = true;
if(online){
    console.log("You are online!")
}
else{
    console.log("You are offline!")
}


//checked property :: lets us know if the check box or a radio button is selected,
//accesing a cehcked property will give us a boolean vlaue true or flase;

document.getElementById("mBtn").onclick=function(){
    const myCheckBox = document.getElementById("mCbx");
    const rupayBtn = document.getElementById("idr1");
    const upiBtn = document.getElementById("idr2");
    const netBankBtn = document.getElementById("idr3");
    if(myCheckBox.checked){
        console.log("You are Subscribed!!")
    }
    else{
        console.log("You are not Subscribed!!")
    }

    if(rupayBtn.checked){
        console.log("Rupay Using");
    }
    else if(upiBtn.checked){
        console.log("UPI Using");
    }
    else if(netBankBtn.checked){
        console.log("Net Bnaking Using");
    }
    else{
        console.log("Select a Payment Gateway.")
    }
}

// switch statement that examines a vlaue for a match againstmany case clauses,
//more efficient than else-if statements.

let grade= "";

switch(grade){
    case "A" :
        console.log("You Did great!!");
        break;
    case "B" :
        console.log("You did Good!!");
        break;
    case "C" :
        console.log("Barely Passed!!");
        break;
    case "D" :
        console.log("You Failed!!")
        break;
    default:
        console.log(grade,"is not a letter grade!!");
}

// Strict Equality operaor helps us to determine if the two given vlaues are two as thier datatype.
 let x  = 3.14;
/*
Assignment Operator " = "
Comparision Operator " == "
Strict Equality Operator " === "
*/
 if(x==3.14){
    console.log("That is pi!")
 }
 else{
    console.log("Thats not pi")
 }

//Gives us the ability to check more then 1 condition Concurrently
// AND && Logical Operator(Both should be true)
// || OR Logical Operator (Either condition cna be true)

let temp = 15;
if(temp > 0 && temp < 30){
 console.log("You are good to go!!");
}
else{
    console.log("Bad Conditions Outside");
}

let sunny = false;
if(temp > 0 || temp < 30 || sunny){
    console.log("The weather is good")
}
else{
    console.log("Bad Conditions Outside");
}

// ! NOT logical operator
// typically used to reverse a condition's boolean vlaue
// true -> false false -> true
if(!(temp>0)){
    console.log("It's cold outside!");
}
else{
    console.log("It's warm outside!")
}

if(!sunny){
    console.log("It's cloudy outside!");
}
else{
    console.log("It's Sunny Outside!")
}


//Loops
// while loop = repeat some code, if a codition is true (potentially infinite).

let loopName  = "";
while(loopName == "" || loopName == null){
    loopName=window.prompt("Enter your Name");
}
console.log("hello",loopName);
let X=2;
while(1==1){
    console.log("HELP! I'M STUCK IN AN INFINITE LOOP!!",X*2);
}

//do while loop :: do something and then check the condition; if its true;

do{
    loopName = window.prompt("Enter Your Name");
}while(loopName == "")

console.log("Hello", loopName);

//for loop repeats some code a certain amaount of times
for(let counter = 1; counter <= 1000000000; counter += 1){
    console.log(counter);
}

// break :: breaks out of a loop entirely
//continue :: skip an interaction of a loop

for( let i=1; i<=20; i+=1){
    if(i==13){
        break; // break breaks the statement flow at 13
    }
    console.log(i);
}

for( let i=1; i<=20; i+=1){
    if(i==13){ 
        continue; // continue skips/omits 13
    }
    console.log(i);
}

// nested loops :: a loop inside a another loop;

let rows= window.prompt("Enter no. of rows.");
let cols = window.prompt("Enter no. of Columns.");
let symbol= window.prompt("Enter the symbol to be used.");

for(let i=1; i<=rows; i+=1){
    for(let j=1; j<=cols; j+=1){
    document.getElementById("mRT").innerHTML += symbol;
    }
    document.getElementById("mRT").innerHTML += "<br>";
}

