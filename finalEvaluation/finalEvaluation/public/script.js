/*javascript code*/
// var main = document.querySelector("main");
// main.addEventListener('mouseenter', hello);

// function hello() {
//   console.log('hello');
// }

var body = document.querySelector('body');

var hero = document.getElementById("Hero");

var form = document.createElement("form");
form.action = './nextpage';

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
fullName.innerText = "Full Name:";

form.appendChild(fullName);
fullName.style.fontWeight = "600";
fullName.style.color = "white";
fullName.style.minWidth = "40px";
fullName.style.paddingTop = "100px";
fullName.style.fontSize = "20px";
fullName.style.marginLeft = "50px";
fullName.style.fontWeight = '700';

var input1 = document.createElement("input");
form.appendChild(input1);
input1.style.border = "none";
form.style.minHeight = "400px";
input1.style.width = "60%";
input1.style.marginLeft = "40px";
input1.style.height = "28px";
input1.style.backgroundColor = "white";

form.style.paddingTop = "20px";

// form.style.paddingLeft = "50px";

var phone = document.createElement("span");
phone.style.position = "relative";
phone.style.top = "24px";
phone.innerText = "Phone:";
phone.style.fontWeight = "600";
phone.style.color = "white";
phone.style.minWidth = "40px";
phone.style.fontSize = "20px";
phone.style.marginLeft = "50px";
phone.style.fontWeight = '700';
form.appendChild(phone);

var input2 = document.createElement("input");
form.appendChild(input2);
input2.style.border = "none";
input2.style.width = "60%";
input2.style.marginLeft = "40px";
input2.style.height = "28px";
input2.style.backgroundColor = "white";
input2.style.marginLeft = "185px";
// input2.style.marginTop = "20px";

var email = document.createElement("span");
email.style.position = "relative";
email.style.top = "24px";
email.innerText = "Email:";
email.style.fontWeight = "600";
email.style.color = "white";
email.style.minWidth = "40px";
email.style.fontSize = "20px";
email.style.marginLeft = "50px";
email.style.fontWeight = '700';
form.appendChild(email);

var input4 = document.createElement("input");
form.appendChild(input4);
input4.style.border = "none";
input4.style.width = "60%";
input4.style.height = "40px";
input4.style.backgroundColor = "white";
input4.style.marginLeft = "185px";


var space2 = document.createElement("div");
space2.style.minHeight = "10px";
form.appendChild(space2);

var br = document.createElement("hr");
form.appendChild(br);
br.style.color = "white";


var sendYour = document.createElement("div");
sendYour.innerText = "Send Your Enquiry";
form.appendChild(sendYour);
sendYour.style.color = "white";
sendYour.style.fontWeight = "700";
sendYour.style.fontSize = "20px";
sendYour.style.paddingLeft = "175px";

var input3 = document.createElement("textarea");
form.appendChild(input3);
input3.style.height = "100px";
input3.style.marginTop = "10px";
input3.style.width = "80%";
input3.style.marginLeft = "10%";
input3.style.border = "none";
input3.style.borderRadius = "10px";
input2.style.borderRadius = "7px";
input1.style.borderRadius = "7px";
input4.style.borderRadius = "7px";

var button = document.createElement("button");
button.innerText = "Submit";
form.appendChild(button);
button.classList.add('btn');
button.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem('Name',input1.value);
    localStorage.setItem('Phone',input2.value);
    localStorage.setItem('Email',input4.value);
    var toastElement = document.getElementById('formToast');
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
    form.reset();
}