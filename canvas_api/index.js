//Canvas API a means for drawing graphics used for animations,games, data visualisation

//drawing lines
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();

//triangle
let triangle = document.getElementById("myCanvas2");
let triContext = triangle.getContext("2d");
triContext.fillStyle = "yellow";
triContext.beginPath();
triContext.lineWidth = 5;
triContext.moveTo(250, 0);
triContext.lineTo(0, 250);
triContext.lineTo(500, 250);
triContext.lineTo(250, 0);
triContext.stroke();
triContext.fill();

//rectangle
let rectangle = document.getElementById("myCanvas3");
let rectContext = rectangle.getContext("2d");
rectContext.strokeStyle = "yellow";
rectContext.fillRect(0, 0, 250, 250); //color rect
rectContext.strokeRect(0, 0, 250, 250); //bordered rect

rectContext.strokeStyle = "yellow";
rectContext.fillRect(0, 250, 250, 250);
rectContext.strokeRect(0, 250, 250, 250);

rectContext.strokeStyle = "yellow";
rectContext.fillRect(250, 0, 250, 250);
rectContext.strokeRect(250, 0, 250, 250);

rectContext.strokeStyle = "yellow";
rectContext.fillRect(250, 250, 250, 250);
rectContext.strokeRect(250, 250, 250, 250);

//circle
let circle = document.getElementById("myCanvas4");
let cirContext = circle.getContext("2d");
cirContext.fillStyle = "lightblue";
cirContext.strokeStyle = "blue";
cirContext.beginPath();
cirContext.lineWidth = 10;
cirContext.arc(250, 250, 225, 0, 2 * Math.PI);
cirContext.stroke();
cirContext.fill();

//text drawing
let text = document.getElementById("myCanvas5");
let textContext = text.getContext("2d");
textContext.font = "50px MV Boli";
textContext.fillStyle = "grey";
textContext.textAlign = "center";
textContext.fillText("YOU WIN!", text.width / 2, text.height / 2);
