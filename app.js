let x = 0;
let y = 0;
const main = document.querySelector("main");
const box = document.querySelector("div");
const img = document.querySelector(".click-image");

main.addEventListener("click", (e) => {
  img.style.display = "block";

  x = e.offsetX;
  y = e.offsetY;

  img.style.top = e.offsetY + "px";
  img.style.left = e.offsetX + "px";
});

const border = document.querySelector(".border");
const borderImgs = border.querySelectorAll("img");

borderImgs.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.classList != "spin") {
      img.classList.add("spin");
    } else {
      img.classList.remove("spin");
    }
  });
});

const slideImg = document.querySelector(".slide");
const imgUrl =
  "https://www.geekwiththat.com/wp-content/uploads/2017/06/1898130_285125985022594_7169533043432192446_n.png";

// const addUrl = () => {
//   slideImg.src = imgUrl;
// };

// setTimeout(addUrl, 6000);

// const h1 = document.querySelector(".reveal-text");

// function changeText() {
//   h1.textContent = "click anywhere!";
// }

// setTimeout(changeText, 3000);

// console.log(h1);

const footer = document.querySelector("footer");
const choices = ["I will keep talking", "I just wanna sing", "I will shut up"];

choices.forEach((choice) => {
  template = `<button>${choice}</button>`;
  footer.innerHTML += template;
});

const buttons = footer.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "I will keep talking") {
      window.alert("NO!");
    } else if (button.textContent === "I just wanna sing") {
      window.alert("Oh my god. Stop.");
    } else {
      window.alert("Finally! Good job!");
    }
  });
});
