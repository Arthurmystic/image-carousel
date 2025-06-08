// functions.js

const findImageElementByIndex = (array, index) =>
  [...array].filter((item) => Number(item.dataset.imgidx) === index)[0];

function createDot(index) {
  const thisDot = document.createElement("div");
  thisDot.classList.add("dot");
  thisDot.dataset.imgidx = index + 1;
  scrollDots.appendChild(thisDot);
}

function setActiveDot(dots, index) {
  const currDot = findImageElementByIndex(dots, index);
  currDot.style.backgroundColor = "blue";
  currDot.classList.add("currentDot");
}

function setActiveImg(elem) {
  elem.style.display = "block";
  elem.classList.add("current");
}

function setDotColorOnHover(e, dotClass, color) {
  const dotColor = e.target.classList.contains("currentDot") ? "blue" : color;
  e.target.classList.contains(dotClass)
    ? (e.target.style.backgroundColor = dotColor)
    : null;
}

function nextImage(n, noImgs, images, dots, arrowClicked = true) {
  const currImgIdx = Number(document.querySelector(".current").dataset.imgidx);
  let nextImgIdx;

  if (arrowClicked) {
    if (currImgIdx + 1 * n > noImgs) {
      nextImgIdx = 1;
    } else if (currImgIdx + 1 * n < 1) {
      nextImgIdx = noImgs;
    } else {
      nextImgIdx = currImgIdx + 1 * n;
    }
  } else if (!arrowClicked) {
    nextImgIdx = n;
  }

  [...images].forEach((image, index) => {
    image.classList.remove("current");
    image.style.display = "none";
    [...dots][index].classList.remove("currentDot");
    [...dots][index].style.backgroundColor = "pink";
  });

  const nextImg = findImageElementByIndex(images, nextImgIdx);
  setActiveImg(nextImg);
  setActiveDot(dots, nextImgIdx);
}

export {
  createDot,
  setDotColorOnHover,
  setActiveImg,
  nextImage,
  findImageElementByIndex,
  setActiveDot,
};
