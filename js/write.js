// Select Form

const form = document.getElementById("experienceForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const category = document.getElementById("category").value;

    const experience = document.getElementById("experience").value.trim();

    if(name === "" || experience === ""){

        alert("Please fill all the required fields.");

        return;

    }

    // Blog Object

    const blog = {

        name: name,

        category: category,

        experience: experience

    };

    console.log(blog);

    alert("🎉 Experience Submitted Successfully!");

    form.reset();

});