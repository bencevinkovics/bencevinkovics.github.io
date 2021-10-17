
const navBarBackgorund = document.getElementById("navBar")

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) { 
        navBarBackgorund.classList.remove("navBarBackgroundOff");
        navBarBackgorund.classList.add("navBarBackgroundOn");        
    }
    else{
        navBarBackgorund.classList.remove("navBarBackgroundOn");
        navBarBackgorund.classList.add("navBarBackgroundOff");
    }
})