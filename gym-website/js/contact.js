// Load trainers data using async AJAX and display them
async function loadTrainers() {
    try {
        const res = await fetch("data/trainers.json");
        const trainers = await res.json();
        displayTrainers(trainers);
        // Save trainers in global variable for filtering
        window.allTrainers = trainers;
        // Restore previous search from localStorage
        const savedSearch = localStorage.getItem("lastSearch") || "";
        $("#searchInput").val(savedSearch);
        if (savedSearch) {
            filterTrainers(savedSearch);
        }
    } catch (error) {
        console.error("Error loading trainers:", error);
    }
}

// Display trainers on the page
function displayTrainers(trainers) {
    const container = $("#trainersList");
    container.empty();
    if (trainers.length === 0) {
        container.html("<p>No trainers found.</p>");
        return;
    }
    trainers.forEach(trainer => {
        container.append(`
            <div class="col-md-6 col-lg-4 transition-fade">
                <div class="card h-100">
                    <img src="${trainer.photo}" class="card-img-top" alt="${trainer.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${trainer.name}</h5>
                        <p class="card-text">${trainer.specialty}</p>
                    </div>
                </div>
            </div>
        `);
    });
}

// Filter trainers based on search input
function filterTrainers(query) {
    const filtered = window.allTrainers.filter(t =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.specialty.toLowerCase().includes(query.toLowerCase())
    );
    displayTrainers(filtered);
}

// Validate email format using simple regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

$(document).ready(function () {
    // Load trainers
    loadTrainers();
    // Handle search input
    $("#searchInput").on("input", function () {
        const query = $(this).val().trim();
        localStorage.setItem("lastSearch", query);
        filterTrainers(query);
    });
    // Handle contact form submission
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        const name = $("#contactName").val().trim();
        const email = $("#contactEmail").val().trim();
        const message = $("#contactMessage").val().trim();
        // Validate form
        if (!name || !email || !message) {
            alert("Please fill in all fields!");
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // Show success message (keep form visible)
        $("#contactForm").after(`<div class="alert alert-success mt-3">Thank you for contacting us! We will get back to you soon.</div>`);
        // Clear form and saved data
        $("#contactForm")[0].reset();
        localStorage.removeItem("contactData");
    });

    // Load saved contact data into form if needed
    const savedData = JSON.parse(localStorage.getItem("contactData"));
    if (savedData) {
        $("#contactName").val(savedData.name);
        $("#contactEmail").val(savedData.email);
        $("#contactMessage").val(savedData.message);
    }
});
