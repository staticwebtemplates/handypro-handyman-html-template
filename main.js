document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  const updateHeaderOnScroll = () => {
    if (!header) return;

    if (window.scrollY > 20) {
      header.style.background = "rgba(255, 255, 255, 0.96)";
      header.style.boxShadow = "0 0.8rem 2.2rem rgba(12, 30, 53, 0.08)";
      header.style.borderBottom = "1px solid rgba(12, 30, 53, 0.08)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.85)";
      header.style.boxShadow = "none";
      header.style.borderBottom = "1px solid rgba(12, 30, 53, 0.05)";
    }
  };

  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      const offset = 80;
      const topPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    });
  });
});
