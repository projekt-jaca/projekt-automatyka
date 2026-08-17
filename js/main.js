const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Globalny arkusz dopracowujący układ kart i sekcji.
// Ładowany po głównym CSS, dzięki czemu działa jako bezpieczna warstwa nadpisująca.
if (!document.querySelector('link[data-pro-layout]')) {
  const proLayout = document.createElement("link");
  proLayout.rel = "stylesheet";
  proLayout.href = "css/pro-layout.css";
  proLayout.dataset.proLayout = "true";
  document.head.appendChild(proLayout);
}
