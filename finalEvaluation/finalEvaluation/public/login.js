const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var form=document.querySelector(".form3456");
form.addEventListener('submit',myfunc)
function myfunc(event)
{
    
    let inp1=document.querySelector("#input10");
    

    let inp2=document.querySelector("#input11");
    

    let inp3=document.querySelector("#input12");
    event.preventDefault();
    
    console.log("form submitted....");
    alert('You are successfully signed up.Thanks for choosing us and being a member of us....');
    console.log(inp1.value);
    console.log(inp2.value);
    console.log(inp3.value);

    form.reset();
    
    
}

var form=document.querySelector(".form7890");
form.addEventListener('submit',myfunc)
function myfunc(event)
{
    
    let inpq=document.querySelector("#input123");
    

    let inpp=document.querySelector("#input345");
    

   
    event.preventDefault();
    
    console.log("form submitted....");
    alert('You are successfully signed in.Thanks for choosing us and being a member of us....');
    console.log(inpq.value);
    console.log(inpp.value);

    form.reset();
    
    
}