const images = document.querySelectorAll(".slideshow .slide");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");


function slider() {
  let index = 0;

  function removeActive() {
    for (let img of images) {
      img.classList.remove("active");
    }
  }

  function addActive(img) {
    img.classList.add("active");
  }

  function swipePrev() {
    index--;

    if (index < 0) {
      index = images.length - 1;
    }
    removeActive();
    addActive(images[index]);
  }

  function swipeNext() {
    index++;

    if (index >= images.length) {
      index = 0;
    }
    removeActive();
    addActive(images[index]);
  }

  return {swipeNext, swipePrev}

}



nextBtn.addEventListener("click", slide.swipeNext);
prevBtn.addEventListener("click", slide.swipePrev);

