// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = "Bro";
document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);
myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);

//css manipualtion ::

const title = document.getElementById("cssM");

title.style.backgroundColor = "#222212";
title.style.color = "rgb(50,200,250)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";
