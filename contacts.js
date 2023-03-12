
/* hambuger menu */
let menuButtonEl=document.querySelector
(".menu-button");

let mobileMenuItems=document.querySelector
(".dropdown-menu-items")


    menuButtonEl.addEventListener("click",()=>{

    mobileMenuItems.classList.toggle("active")
}
)
 


/*document.querySelector(".button").addEventListener("submit", function(event){
    event.preventDefault()
  })*/

/* message change when button pressed*/

const buttonEl = document.querySelector(".button")



const formEl = document.querySelector(".contacts-form");

function changeText(event) {
    event.preventDefault()
    formEl.innerHTML = 
    " <br> <br> <br>  your booking have been confirmed! <br> <br> <br>  "
}
buttonEl.addEventListener("click", changeText)

   
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop >10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function refreshPage(){

  if(confirm("Are you sure u want to refresh page"))
  
  {
  
    location.reload();
  
  }


}