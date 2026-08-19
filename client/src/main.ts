import "./styles.css";
import { coverUpPortfolio, tattooPortfolio } from "./data";
import { createCarousel, setupSharedInterface } from "./site";

setupSharedInterface();

const tattooRoot = document.querySelector<HTMLElement>('[data-carousel="tattoos"]');
if (tattooRoot) {
  const tattooCarousel = createCarousel(tattooRoot, tattooPortfolio);
  document.querySelectorAll<HTMLButtonElement>("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter ?? "Todos";
      const visibleItems = filter === "Todos" ? tattooPortfolio : tattooPortfolio.filter((item) => item.label === filter);
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
      tattooCarousel.setItems(visibleItems);
    });
  });
}

const coverUpRoot = document.querySelector<HTMLElement>('[data-carousel="coverups"]');
if (coverUpRoot) createCarousel(coverUpRoot, coverUpPortfolio);
