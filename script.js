const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

const mountain1 = document.querySelector(".mountains1");

btn1.addEventListener("click", () => {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  mountain1.classList.remove("mountains2");
  mountain1.classList.add("mountains1");
  sch2.classList.add("hide");
  sch1.classList.remove("hide");
});

btn2.addEventListener("click", () => {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  mountain1.classList.remove("mountains1");
  mountain1.classList.add("mountains2");
  sch2.classList.remove("hide");
  sch1.classList.add("hide");
});

const sch1 = document.querySelector(".sch1");
const sch2 = document.querySelector(".sch2");

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
