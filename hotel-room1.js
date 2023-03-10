const myMenuButtonEl = document.querySelector(".menu-button");

const mymobileMenuItemsEl = document.querySelector(".mobile-menu-items")


myMenuButtonEl.addEventListener("click", () => {

    mymobileMenuItemsEl.classList.toggle("active")
})


// Get the button:
let mybutton = document.querySelector(".myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
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