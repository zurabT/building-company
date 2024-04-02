const img = document.querySelector(".header__slider__img");
const img1 = document.querySelectorAll(".header__slider__img--1");
const btnLeft = document.querySelector(".header__btn__button-left");

const btnRight = document.querySelector(".header__btn__button-right");
const btnUp = document.querySelector(".scrollUp");
const dots = document.querySelectorAll(".header__btn__dot--1");

let i = 1;
let counter = 0;

const size = img1[0].clientWidth;

btnLeft.addEventListener("click", function () {
  if (counter >= 0) {
    counter = -4;
  }
  counter++;
  let dotNum = counter * -1;
  let val = size * counter;
  img.style.transform = `translateX(${val}px)`;
  console.log(val + "right", counter);
  dots[dotNum].classList.add("active");
  if (dotNum < 3) {
    dots[dotNum + 1].classList.remove("active");
  }
  if (dotNum === 3) {
    dots[0].classList.remove("active");
  }
  console.log(dotNum);

  // i++;
  // if (i > 4) {
  //   i = 1;
  // }
  // console.log(img);
  // img.innerHTML = ` <div class="header__slider__img"  >
  //   <img
  //     class="header__slider__img--${i}"
  //     src="/images/Rectangle ${i}.png"
  //     alt=""
  //     id="img"
  //   />
  // </div>
  // `;
});
btnRight.addEventListener("click", function () {
  counter--;
  if (counter <= -4) {
    counter = 0;
  }
  let dotNum = counter * -1;
  if (counter >= -3) {
    let val = size * counter;
    img.style.transform = `translateX(${val}px)`;
    console.log(val + "left", counter);
  }
  dots[dotNum].classList.add("active");
  if (dotNum === -0) {
    dots[3].classList.remove("active");
  }

  if (dotNum < 4) {
    dots[dotNum - 1].classList.remove("active");
  }
  if (counter === 0) {
    dots[3].classList.remove("active");
  }
  console.log(dotNum);
  // i--;
  // if (i < 1) {
  //   i = 4;
  // }
  // console.log(img);
  // img.innerHTML = ` <div class="header__slider__img"  >
  //     <img
  //       class="header__slider__img--${i}"
  //       src="/images/Rectangle ${i}.png"
  //       alt=""
  //       id="img"
  //     />
  //   </div>
  //   `;
});

function moveLeft() {
  const img1 = this.document.querySelector(".flat__img--1");
  const img3 = this.document.querySelector(".flat__img--3");
  const pageWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const txt = document.getElementById("text");

  const rect = txt.getBoundingClientRect();
  const pageHeight = document.body.scrollHeight;

  let scrollPos = this.window.scrollY;

  if (scrollPos >= rect.top) {
    img1.style.transform = "translateX(30px)";
    img3.style.transform = "translateX(30px)";
  }

  if (scrollPos <= 300 && pageWidth > 930) {
    img1.style.transform = "translateX(-110px)";
    img3.style.transform = "translateX(-110px)";
  } else if (pageWidth < 930 && scrollPos <= 300) {
    img1.style.transform = "translateX(-0px)";
    img3.style.transform = "translateX(-0px)";
  }
}

function moveRight() {
  const img2 = this.document.querySelector(".flat__img--2");
  const img4 = this.document.querySelector(".flat__img--4");
  const pageWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const txt = document.getElementById("text");

  const rect = txt.getBoundingClientRect();
  const pageHeight = document.body.scrollHeight;

  let scrollPos = this.window.scrollY;

  if (scrollPos >= rect.top) {
    img2.style.transform = "translateX(-30px)";
    img4.style.transform = "translateX(-30px)";
  }
  if (scrollPos <= 300 && pageWidth > 930) {
    img2.style.transform = "translateX(110px)";
    img4.style.transform = "translateX(110px)";
  } else if (pageWidth < 930 && scrollPos <= 300) {
    img2.style.transform = "translateX(-0px)";
    img4.style.transform = "translateX(-0px)";
  }
}

function move() {
  moveLeft();
  moveRight();
  scrollUp();
}
window.addEventListener("scroll", move);

function scrollUp() {
  if (window.scrollY > 20) {
    btnUp.style.opacity = "1";
  } else {
    btnUp.style.opacity = "0";
  }
}

btnUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
