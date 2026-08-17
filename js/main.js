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

// Globalna warstwa porządkująca starsze komponenty.
if (!document.querySelector('link[data-pro-layout]')) {
  const proLayout = document.createElement("link");
  proLayout.rel = "stylesheet";
  proLayout.href = "css/pro-layout.css?v=20260817";
  proLayout.dataset.proLayout = "true";
  document.head.appendChild(proLayout);
}

// Finalna warstwa premium — wspólna dla strony głównej i podstron.
if (!document.querySelector('link[data-premium-v2]')) {
  const premium = document.createElement("link");
  premium.rel = "stylesheet";
  premium.href = "css/premium-v2.css?v=20260817";
  premium.dataset.premiumV2 = "true";
  document.head.appendChild(premium);
}
