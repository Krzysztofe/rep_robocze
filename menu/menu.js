const [primaryHeader, navToggle, primaryNav, hamburger, xMmark] = [
  ".primary-header",
  ".moble-nav-toggle",
  ".primary-navigation",
  ".fa-bars",
  ".fa-xmark",
].map(item => {
  return document.querySelector(item);
});


navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");

  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);

  primaryHeader.toggleAttribute("data-overlay");
  hamburger.classList.toggle("icon-active");
  xMmark.classList.toggle("icon-active");
});


