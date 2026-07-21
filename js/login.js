const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    // Redirect to Home Page
    window.location.href = "home.html";

});