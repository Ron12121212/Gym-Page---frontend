$(document).ready(function () {
    // Handle membership form submission
    $("#membershipForm").on("submit", function (e) {
        e.preventDefault();
        const name = $("#fullName").val().trim();
        const email = $("#emailAddress").val().trim();
        const membershipType = $("#membershipType").val();
        const duration = $("#duration").val();
        // Validate form
        if (!name || !email || !membershipType || !duration) {
            alert("Please fill in all fields!");
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // Show success message (like contact form)
        $("#membershipForm").after(`<div class="alert alert-success mt-3">Thank you for joining! We’re excited to have you!</div>`);
        // Clear form and local storage
        $("#membershipForm")[0].reset();
        localStorage.removeItem("membershipData");
    });

    // Load saved data if needed
    const savedData = JSON.parse(localStorage.getItem("membershipData"));
    if (savedData) {
        $("#fullName").val(savedData.name);
        $("#emailAddress").val(savedData.email);
        $("#membershipType").val(savedData.membershipType);
        $("#duration").val(savedData.duration);
    }
});

// Email validation helper
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

$(document).ready(function () {
    let selectedPrice = 0; // Default price

    // Handle plan selection
    $(".select-plan").on("click", function () {
        // Remove 'selected' class from all buttons
        $(".select-plan").removeClass("selected");

        // Add 'selected' class to the clicked button
        $(this).addClass("selected");

        // Get the selected price
        selectedPrice = parseFloat($(this).data("price"));

        // Update the total price
        updateTotalPrice();
    });

    // Handle duration change
    $("#duration").on("change", function () {
        updateTotalPrice();
    });

    // Function to update the total price
    function updateTotalPrice() {
        const duration = parseInt($("#duration").val());
        const total = selectedPrice * duration;
        $("#totalPrice").text(`Total Price: $${total.toFixed(2)}`);
    }
});
