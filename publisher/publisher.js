document.getElementById("story-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("Please fill in all fields.");
        return;
    }

    const response = await fetch("https://storypub.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
        alert("Story published successfully!");
        document.getElementById("story-form").reset();
    } else {
        alert("Error publishing story.");
    }
});
