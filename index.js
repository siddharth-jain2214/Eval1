let buttons = document.querySelectorAll('.property_btn1');

    for (let item of buttons) {
      item.onclick = function() {
        navigateToReactPage();
      };
    }

    function navigateToReactPage() {
      
      const reactAppURL = "http://localhost:5173";  // Or your deployed React app URL
      window.location.href = reactAppURL;
    }


const prop_name=[
    {
        price: "$65,356",
        prop_name: "Garden City Asset",
        address: "1432 Willow Creek Road, San Diego, CA 92109"
    },
    {
        price: "$35,159",
        prop_name: "Golden Oak Residence",
        address: "4597 Oak Hill Drive, Lexington, KY 40502"
    },
    {
        price: "$75,043",
        prop_name: "Gables Luxurious House",
        address: "2945 Elmwood Street, Minneapolis, MN 55416"
    },
    {
        price: "$86,967",
        prop_name: "Whispering Pines Estate",
        address: "6520 Pinecrest Boulevard, Fort Worth, TX 76107"
    },
    {
        price: "$55,348",
        prop_name: "Maplewood Heaven",
        address: "2876 Maplewood Avenue, Portland, OR 97205"
    },
    {
        price: "$67,521",
        prop_name: "Horizon View Villa",
        address: "4863 Willow Bend Road, Houston, TX 77056"
    }

]

prop_name.forEach((property, index) => {
    document.getElementById(`price-${index}`).textContent = property.price;
    document.getElementById(`prop_name-${index}`).textContent = property.prop_name;
    document.getElementById(`address-${index}`).textContent = property.address;
  });

  var form=document.querySelector(".form1234");
form.addEventListener('submit',myfunc)
function myfunc(event)
{
    
    let inp1=document.querySelector("#input1");
    

    let inp2=document.querySelector("#input2");
    

    let inp3=document.querySelector("#input3");
    event.preventDefault();
    
    console.log("form submitted....");
    alert('We will contact you soon!\nThank you for Visting Us');
    console.log(inp1.value);
    console.log(inp2.value);
    console.log(inp3.value);

    form.reset();
    
    
}


