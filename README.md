# learning_JS

Extensions USed ::
0 Quokka.js
1 Auto Rename tag
2 ES7+ React Redux
3 ESLint
4 Image Preview
5 issort
6 Live Server
7 Night Owl Theme
8 npm Intellisense
9 Prettier

Revised, JavaScript again from Youtube BroCode.It was requiredt to prepare for interviews.

Link :: https://www.youtube.com/playlist?list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1

GEneral Notes ::

Variable scope : where a variable is accessible.

let = variables are limited to block scope {}
var = variables are limited to function(){} scope. It can escape parenthesis() but not the curly braces;

Global variable is declared outside any function.
If global, var will UN-INTENTIONALLY CHANGE browser's window properties.

//Short Theory Notes 👇👇

Beginner best language to learn and words language also
We can get anything by doing it but on other hand its weird,ugly and surrounded by a dystopiom wasteland of frame works and libraries
Created by Brendon ike in 1993 at Netscape
Standard implementation is called ecma script
Default language in browsers
Runs natively in web browser aside from web assembly
Js code can also be run on servers, with tools like node js and dino
Js is a scripting language that means you can execute code on fly by opening console in dev tools
Js is interpreted line by line as opposed to other languages like c that are compiled ahead of time
However interpreted is not the accurate term to use. There's a V8 engine that makes js run extremely fastly taking the code, k/a Just in time compilation
Js is a dynamically typed language, does no data type annotations are necessary
Without assignment js uses undefined value (primitive) as default value
Primitive belt in 7 datatype annotations in Js :
String *number *bignit*null
Boolean*undefined\*symbol
We can also represent an empty value using null and later on we can replace it with string
Any value that's not a primitive will inherit as a from a object class
Semi-colons ;
Functions are the building blocks of js
Variable declared inside a function becomes local to function does cannot be used out of it
And in statements like if else, variables can be script inside the braces or block unless you use variable which is not block scope in this case it will be hoisted up in the local slope for that function
Function keyword used by itself is function definition or statement
Functions are just objects, which can also be used as expressions variables or construct higher order functions where a function is used as argument or return value
Function can also be nested to create a closer that encapsulates data and logic from rest of program
When we call a function that has a variable with prim value, it's stored in call stack which is the browser short term memory however inclusive case the inner function can still access variables in the outer function ever after the initial function call . This is because js stores the data in out of function in heat memory which pursessed between function calls
This: a keyword that references and object and based on how a function is called when called from global scope it references the window object in browser however if that same function is attached to in object and called by that object 'this' will be a reference to that object and we can manually bind a function to some other object using bind method
Arrow function: Arrow function do not have their own this value and they are always anonymous which makes them idol for function exp
When passing arguments a primitive like number is passed by value, however if argument is an object that means it's stored in heap and its passed by reference
Object contains a collection of key value pairs or properties and values object can inherit values from each other by prototype chain
OOP is supported in Js , as class keyword being syntatic sugar for prototypal inheritance and objects
A class can define a constructor which is a function called when object is first created
Inbuilt data strs' array, set,map,weakmap and weaket
Non blocking event loop in a script next line can't start until previous financies with an event loop we can write a asynchronous code in Js late runs in a separate thread pool while the rest of app continuous to execute
As our code grows in complexity it won't fit in a single file we can use ES modules to share code between files by default all the code in the file or module is private to that file if we want to use a code in some other file we can make a default expert this allows us to go in different file and use import function ever there
Largest js package manager is NPM, when install a package from npm it downloads it's code in note modules folder in project
Browser is based on DOM (document object model) where the UI is represented as a free of HTML elements or nodes
The browser provides apris to interact with these nodes with most important object being document. The document allows us to great individual html using a query selector method it takes a CSS selector for as an argument and will find HTML element that has the same class, name, ID or tag name
Events with advent listener a function can be called when ever event takes place
The vanilla js results in imperative code where UI is mutated directly many developers now use front and frameworks that produce declarative code where UI is a function of its input data
These libraries in capsulate JS HTML and CS into components are then used to form a component tree to represent a UI most importantly data inside component is reactive it can be bound from the JS- HTML, i.e any change in data UI updates:-
After building a complete JS app we need to take all of our JS files and bundle them with module bundler in a single bundle to make it usable by brouser like vot aur webpack
JSS also runable on server with browser, node js is most popular runtime
Type script or eslint do static analysis to improve code quality.
