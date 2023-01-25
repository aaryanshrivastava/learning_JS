//callback a function passed as a argument to another function;

let total = sum(2,3);
displayConsole(total);
function sum(x,y){
    let result = x+y;
    return result;
}
function displayConsole(output){
    console.log(output);
}