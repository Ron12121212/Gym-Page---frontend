// Global array of all classes
let allClasses = [];
async function loadClasses() {
    try {
        const res = await fetch("../data/classes.json");
        allClasses = await res.json();
        displayClasses(allClasses);
    } catch (err) {
        console.error("Failed to load classes", err);
    }
}
// Render classes to the page
function displayClasses(classes) {
    const container = $("#classesList");
    container.empty();
    if (classes.length === 0) {
        container.html("<p>No classes found.</p>");
        return;
    }
    classes.forEach(cls => {
        const isFav = isFavorite(cls.id);
        container.append(`
            <div class="col-md-6 col-lg-4 transition-fade">
                <div class="card h-100">
                    <img src="${cls.image}" class="card-img-top" alt="${cls.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${cls.name}</h5>
                        <p class="card-text">${cls.description}</p>
                        <button class="btn ${isFav ? 'btn-success' : 'btn-outline-primary'} favorite-btn" data-id="${cls.id}">
                            ${isFav ? "Favorited" : "Add to Favorites"}
                        </button>
                    </div>
                </div>
            </div>
        `);
    });
}
// Search handler
function filterClasses(query) {
    const result = allClasses.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
    );
    displayClasses(result);
}
// Favorite class handler
function toggleFavorite(id) {
    const favs = getFavorites();
    const index = favs.indexOf(id);
    if (index > -1) {
        favs.splice(index, 1);
    } else {
        favs.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
}
// Check if class is favorite
function isFavorite(id) {
    return getFavorites().includes(id);
}
// Get favorites array
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}

$(document).ready(function () {
    loadClasses();

    $("#classSearch").on("input", function () {
        const query = $(this).val();
        filterClasses(query);
    });

    $(document).on("click", ".favorite-btn", function () {
        const id = parseInt($(this).data("id"));
        toggleFavorite(id);
        displayClasses(allClasses); // Refresh the list
    });
});
