import "./styles.css";
import { paintingsPortfolio } from "./data";
import { createCarousel, setupSharedInterface } from "./site";

setupSharedInterface();
const paintingRoot = document.querySelector<HTMLElement>('[data-carousel="paintings"]');
if (paintingRoot) createCarousel(paintingRoot, paintingsPortfolio);
