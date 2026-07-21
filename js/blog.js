const params = new URLSearchParams(window.location.search);

const blogId = Number(params.get("id"));

const blog = blogs.find(item => item.id === blogId);

if(blog){

    document.getElementById("blogImage").src = blog.image;

    document.getElementById("title").textContent = blog.title;

    document.getElementById("author").textContent = "👤 " + blog.author;

    document.getElementById("batch").textContent = "🎓 Batch " + blog.batch;

    document.getElementById("category").textContent = "🏷 " + blog.category;

    document.getElementById("date").textContent = "📅 " + blog.date;

    document.getElementById("content").innerHTML = blog.content;

    const learningList = document.getElementById("learningList");

    blog.learnings.forEach(point => {

        const li = document.createElement("li");

        li.textContent = point;

        learningList.appendChild(li);

    });

}
else{

    document.querySelector(".container").innerHTML = "<h2>Blog Not Found!</h2>";

}