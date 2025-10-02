const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

const cardsPerPage = 4;
let currentVisible = cardsPerPage;

// Show initial cards
function showInitialCards() {
  cards.forEach((card, index) => {
    card.style.display = (index < cardsPerPage) ? "block" : "none";
  });
  seeMoreBtn.style.display = cards.length > cardsPerPage ? "block" : "none";
}
showInitialCards();

// See More logic
seeMoreBtn.addEventListener("click", () => {
  let shown = 0;
  for (let i = currentVisible; i < currentVisible + cardsPerPage; i++) {
    if (cards[i]) {
      cards[i].style.display = "block";
      shown++;
    }
  }
  currentVisible += shown;
  if (currentVisible >= cards.length) {
    seeMoreBtn.style.display = "none";
  }
});

// Search logic
searchInput.addEventListener("keyup", function () {
  const query = searchInput.value.toLowerCase();

  if (query === "") {
    // Reset to pagination mode
    currentVisible = cardsPerPage;
    showInitialCards();
    return;
  }

  // Show only matching cards
  let found = false;
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // Hide "See More" while searching
  seeMoreBtn.style.display = "none";
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
