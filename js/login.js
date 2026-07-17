const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    // For now just redirect.
    // Later we'll add localStorage login.

    window.location.href = "home.html";

});