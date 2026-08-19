import type { GalleryItem } from "./data";

export function setupSharedInterface(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");

  if (toggle && mobileNav) {
    const closeMenu = (): void => {
      mobileNav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.classList.remove("is-open");
    };
    toggle.addEventListener("click", () => {
      const willOpen = mobileNav.hidden;
      mobileNav.hidden = !willOpen;
      toggle.setAttribute("aria-expanded", String(willOpen));
      toggle.classList.toggle("is-open", willOpen);
    });
    mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  document.querySelectorAll<HTMLElement>("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

export type CarouselController = { setItems: (items: GalleryItem[]) => void };

export function createCarousel(root: HTMLElement, initialItems: GalleryItem[]): CarouselController {
  const image = root.querySelector<HTMLImageElement>("[data-carousel-image]");
  const title = root.querySelector<HTMLElement>("[data-carousel-title]");
  const label = root.querySelector<HTMLElement>("[data-carousel-label]");
  const description = root.querySelector<HTMLElement>("[data-carousel-description]");
  const count = root.querySelector<HTMLElement>("[data-carousel-count]");
  const thumbnails = root.querySelector<HTMLElement>("[data-carousel-thumbnails]");
  const previous = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
  let items = initialItems;
  let activeIndex = 0;

  const render = (): void => {
    const item = items[activeIndex];
    if (!item || !image || !title || !label || !count || !thumbnails) return;
    image.src = item.image;
    image.alt = item.title;
    title.textContent = item.title;
    label.textContent = item.label;
    count.textContent = `${activeIndex + 1} / ${items.length}`;
    if (description) description.textContent = item.description ?? "";
    thumbnails.replaceChildren(...items.map((entry, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `thumbnail${index === activeIndex ? " is-active" : ""}`;
      button.setAttribute("aria-label", `Ver ${entry.title}`);
      button.setAttribute("aria-pressed", String(index === activeIndex));
      const thumbnail = document.createElement("img");
      thumbnail.src = entry.image;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      button.append(thumbnail);
      button.addEventListener("click", () => { activeIndex = index; render(); });
      return button;
    }));
  };

  previous?.addEventListener("click", () => { activeIndex = (activeIndex - 1 + items.length) % items.length; render(); });
  next?.addEventListener("click", () => { activeIndex = (activeIndex + 1) % items.length; render(); });
  render();
  return { setItems: (nextItems: GalleryItem[]): void => { items = nextItems; activeIndex = 0; render(); } };
}
