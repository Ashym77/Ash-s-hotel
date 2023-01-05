const menuButton=document.querySelector
(".menu-button");

const mobileMenuItems=document.querySelector
(".mobile-menu-items")


menuButton.addEventListener("click",()=>{

    mobileMenuItems.classList.toggle("active")
}
)
 



const form = document.querySelector('form');

const thankYouMessage = document.querySelector('.thank-you-message');

form.addEventListener('submit', (e) => {
  console.log("hello")
  e.preventDefault();
  setTimeout(() => form.submit(), 2000)
  thankYouMessage.classList.add('show');
  
});