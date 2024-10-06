/*javascript code*/
// var main = document.querySelector("main");
// main.addEventListener('mouseenter', hello);

// function hello() {
//   console.log('hello');
// }

var body = document.querySelector('body');

var hero = document.getElementById("Hero");

var form = document.createElement("form");

form.classList.add('enquiryForm');

var space = document.createElement("div");
hero.appendChild(space);

var heroForm = document.createElement("div");
hero.appendChild(heroForm);
space.style.minHeight = "100px";
heroForm.classList.add('enquiryFormContainer');
heroForm.appendChild(form);

// form.style.backgroundColor = "black";
// form.style.opacity = "0.4";

var fullName = document.createElement("span");
fullName.innerText = "Full Name";

form.appendChild(fullName);
fullName.style.fontWeight = "600";
fullName.style.color = "white";
fullName.style.minWidth = "40px";
fullName.style.paddingTop = "100px";
fullName.style.fontSize = "20px";
fullName.style.marginLeft = "50px";

var input1 = document.createElement("input");
form.appendChild(input1);
input1.style.border = "none";
form.style.minHeight = "400px";
input1.style.width = "60%";
input1.style.marginLeft = "40px";
input1.style.height = "20px";
input1.style.backgroundColor = "white";

form.style.paddingTop = "20px";

// form.style.paddingLeft = "50px";

var tag1 = document.createElement("p");
tag1.innerText = "First Name";
tag1.style.color = "white";
form.appendChild(tag1);
tag1.style.fontWeight = "600";
tag1.style.paddingLeft = "184px";
tag1.style.paddingTop = "5px";

var input2 = document.createElement("input");
form.appendChild(input2);
input2.style.border = "none";
input2.style.width = "60%";
input2.style.marginLeft = "40px";
input2.style.height = "20px";
input2.style.backgroundColor = "white";
input2.style.marginLeft = "184px";
input2.style.marginTop = "20px";

var tag2 = document.createElement("p");
tag2.innerText = "Last Name";
tag2.style.color = "white";
form.appendChild(tag2);
tag2.style.fontWeight = "600";
tag2.style.paddingLeft = "184px";
tag2.style.paddingTop = "5px";

var space2 = document.createElement("div");
space2.style.minHeight = "10px";
form.appendChild(space2);

var br = document.createElement("hr");
form.appendChild(br);
br.style.color = "white";


var sendYour = document.createElement("div");
sendYour.innerText = "Send Your Message";
form.appendChild(sendYour);
sendYour.style.color = "white";
sendYour.style.fontWeight = "6  00";
sendYour.style.fontSize = "20px";
sendYour.style.paddingLeft = "175px";

var input3 = document.createElement("textarea");
form.appendChild(input3);
input3.style.height = "100px";
input3.style.marginTop = "10px";
input3.style.width = "80%";
input3.style.marginLeft = "10%";
input3.style.border = "none";
input3.style.borderRadius = "5px";
input2.style.borderRadius = "3px";
input1.style.borderRadius = "3px";

var button = document.createElement("button");
button.innerText = "Submit";
form.appendChild(button);
button.style.display = "block";
button.style.marginLeft = "210px";
button.style.marginTop = "15px";
button.style.width = "100px";
button.style.height = "25px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.color = "white";
button.style.backgroundColor = "black";
button.style.opacity = "0.7";
button.style.fontWeight = "600";
