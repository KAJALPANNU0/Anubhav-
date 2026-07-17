/* ==========================
        PAGE LOADED
========================== */

window.addEventListener("load", () => {

    console.log("Welcome to ANUBHAV!");

});



/* ==========================
        NAVBAR ACTIVE LINK
========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ==========================
        BLOG CARD HOVER
========================== */

const cards = document.querySelectorAll(".blog-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


/* ==========================
      READ STORY BUTTON
========================== */

const buttons = document.querySelectorAll(".read-btn");

buttons.forEach(button => {

    button.addEventListener("click", function (event) {

        console.log("Opening Blog...");

        // Later:
        // window.location.href = "blog.html?id=1";

    });

});


/* ==========================
      SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => {

    observer.observe(card);

});

















