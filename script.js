// Basic UI interactions for Flipkart static clone

document.addEventListener("DOMContentLoaded", () => {
  const moreBtn = document.getElementById("moreBtn");
  const moreDropdown = document.getElementById("moreDropdown");
  const fashionCat = document.querySelector('[data-cat="fashion"]');
  const fashionDropdown = document.getElementById("fashionDropdown");
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const loginCloseBtn = document.getElementById("loginCloseBtn");

  // Helper: close all dropdowns
  function closeDropdowns() {
    moreDropdown?.classList.remove("open");
    fashionDropdown?.classList.remove("open");
  }

  // Toggle "More" dropdown
  moreBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = moreDropdown?.classList.contains("open");
    closeDropdowns();
    if (!isOpen) {
      moreDropdown?.classList.add("open");
    }
  });

  // Toggle Fashion category dropdown
  fashionCat?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = fashionDropdown?.classList.contains("open");
    closeDropdowns();
    if (!isOpen) {
      fashionDropdown?.classList.add("open");
    }
  });

  // Global click to close dropdowns
  document.addEventListener("click", () => {
    closeDropdowns();
  });

  // Stop click from closing when inside dropdowns
  moreDropdown?.addEventListener("click", (e) => e.stopPropagation());
  fashionDropdown?.addEventListener("click", (e) => e.stopPropagation());

  // Login modal open
  loginBtn?.addEventListener("click", () => {
    loginModal?.classList.add("open");
  });

  // Login modal close (button)
  loginCloseBtn?.addEventListener("click", () => {
    loginModal?.classList.remove("open");
  });

  // Login modal close (backdrop click)
  loginModal?.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.classList.remove("open");
    }
  });

  // Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      loginModal?.classList.remove("open");
      closeDropdowns();
    }
  });
});

