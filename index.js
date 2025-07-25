document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // --- Product Search Functionality ---
  const searchForm = document.getElementById("product-search-form");
  const searchInput = document.getElementById("product-search-input");
  const productList = document.getElementById("product-list");
  const productCards = productList.getElementsByClassName("product-card");
  let highlightedCard = null;

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Remove previous highlight
    if (highlightedCard) {
      highlightedCard.classList.remove("highlight");
    }

    let found = false;
    for (let card of productCards) {
      const productName = card.dataset.productName.toLowerCase();
      if (productName.includes(searchTerm)) {
        // Scroll to the card
        card.scrollIntoView({ behavior: "smooth", block: "center" });

        // Add highlight class
        card.classList.add("highlight");
        highlightedCard = card;

        // Remove highlight after a few seconds
        setTimeout(() => {
          if (highlightedCard === card) {
            // Ensure it's still the same card
            card.classList.remove("highlight");
            highlightedCard = null;
          }
        }, 3000); // Highlight for 3 seconds

        found = true;
        break; // Stop after finding the first match
      }
    }

    if (!found) {
      alert("Product not found. Please try another search.");
    }
  });

  // --- Set Current Year in Footer ---
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
