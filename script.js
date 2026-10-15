const experience = document.getElementById("experience");
const enterButton = document.getElementById("enterButton");
const homeLink = document.getElementById("homeLink");
const toast = document.getElementById("toast");
const year = document.getElementById("year");

// Current year
if (year) {
  year.textContent = new Date().getFullYear();
}

// Enter the four elements
if (enterButton && experience) {
  enterButton.addEventListener("click", () => {
    experience.classList.add("is-exploring");
  });
}

// Return to the opening screen
if (homeLink && experience) {
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    experience.classList.remove("is-exploring");

    if (toast) {
      toast.classList.remove("show");
    }
  });
}

// Descriptions for elements that are not developed yet
const descriptions = {
  fire: "Fire — Intention & Action. Choose a priority and find one small first step.",
  water: "Water — Exploration & Experience. Keep the thoughts, music and moments that make a day meaningful.",
  earth: "Earth — Reflection & Growth. Notice the connections and changes that emerge over time."
};

let toastTimer;

// Only Fire, Water and Earth use the temporary preview.
// Air is now a normal link to air.html.
document.querySelectorAll(".element-card").forEach((card) => {

  if (card.dataset.element === "air") {
    return;
  }

  card.addEventListener("click", () => {
    if (!toast) return;

    toast.textContent =
      descriptions[card.dataset.element] || "";

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4200);
  });
});

// Press Escape to return to the opening screen
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && experience) {
    experience.classList.remove("is-exploring");

    if (toast) {
      toast.classList.remove("show");
    }

    clearTimeout(toastTimer);
  }
});