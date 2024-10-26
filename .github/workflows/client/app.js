document.addEventListener("DOMContentLoaded", () => {
    loadContent();
});

function loadContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "<h2>Featured Artworks</h2><p>Discover amazing artworks from talented artists.</p>";
}
