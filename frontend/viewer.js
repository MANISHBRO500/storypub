document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:5000/api/stories");
    const stories = await response.json();

    const storiesContainer = document.getElementById("stories-container");

    if (stories.length === 0) {
        storiesContainer.innerHTML += "<p>No stories available. Be the first to publish one!</p>";
        return;
    }

    stories.forEach(story => {
        const storyElement = document.createElement("div");
        storyElement.classList.add("news-item");

        storyElement.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <small>Posted on: ${new Date(story.createdAt).toLocaleDateString()}</small>
        `;

        storiesContainer.appendChild(storyElement);
    });
});
