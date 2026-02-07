document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    if (expanded) {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  });
});