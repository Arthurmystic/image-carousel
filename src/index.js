// index.js

import "./styles.css";
import {
  createDot,
  setDotColorOnHover,
  setActiveImg,
  nextImage,
  findImageElementByIndex,
  setActiveDot,
} from "./functions.js";

const images = document.querySelectorAll("img");
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const noImgs = images.length;

// ASSIGN EACH IMG AN INDEX AND CREATE SCROLL DOTS
[...images].forEach((image, index) => {
  image.dataset.imgidx = index + 1;
  createDot(index);
});
const dots = document.querySelectorAll(".dot");

// SET DEFAULT IMAGE AND DOT
const defaultImg = findImageElementByIndex(images, 1);
setActiveImg(defaultImg);
setActiveDot(dots, 1);

//EVENT LISTENERS
prevBtn.addEventListener("click", () => nextImage(-1, noImgs, images, dots));
nextBtn.addEventListener("click", () => nextImage(1, noImgs, images, dots));

[...dots].forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const idx = Number(e.target.dataset.imgidx);
    nextImage(idx, noImgs, images, dots, false);
  });

  //   dot.addEventListener("mouseenter", (e) =>
  //     setDotColorOnHover(e, "dot", "yellow")
  //   );

  //   dot.addEventListener("mouseleave", (e) =>
  //     setDotColorOnHover(e, "dot", "pink")
  //   );
});

setInterval(() => nextBtn.click(), 5000);
