// Fetch trainers from JSON and display them
async function loadTrainers() {
    try {
        const res = await fetch("../data/trainers.json");
        const trainers = await res.json();
        // Save to localStorage for demo purposes
        localStorage.setItem("trainers", JSON.stringify(trainers));
        displayTrainers(trainers);
    } catch (error) {
        console.error("Failed to load trainers:", error);
    }
}
// Display trainer cards
function displayTrainers(trainers) {
    const container = document.getElementById("trainersList");
    container.innerHTML = "";
    trainers.forEach(trainer => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
      <div class="card h-100 trainer-card shadow transition-hover">
        <img src="${trainer.image}" class="card-img-top" alt="${trainer.name}" />
        <div class="card-body">
          <h5 class="card-title">${trainer.name}</h5>
          <p class="card-text"><strong>Specialty:</strong> ${trainer.specialty}</p>
          <p class="card-text"><strong>Experience:</strong> ${trainer.experience}</p>
        </div>
      </div>
    `;

        container.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", loadTrainers);
