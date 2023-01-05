
/* hambuger menu */
const menuButton=document.querySelector
(".menu-button");

const mobileMenuItems=document.querySelector
(".mobile-menu-items")


menuButton.addEventListener("click",()=>{

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
    "your booking have been confirmed!  "
}
buttonEl.addEventListener("click", changeText)

   