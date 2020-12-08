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
  textBox.innerHTML = "";
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
const choices = [
  "I will keep talking",
  "I just wanna sing",
  "Fine! I'll shut up",
];

choices.forEach((choice) => {
  const btnContainer = document.querySelector(".button-container");
  const template = `<button class="btn">${choice}</button>`;
  btnContainer.innerHTML += template;
});

const buttons = document.querySelectorAll("button");
const textBox = main.querySelector(".textbox");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "I will keep talking") {
      textBox.innerHTML = `<h1>No! Please don't.</h1>`;
    } else if (button.textContent === "I just wanna sing") {
      textBox.innerHTML = `<h1>Oh my god. Stop.</h1>`;
    } else {
      textBox.innerHTML = `<h1>Finally! Thanks.</h1>`;
    }
  });
});
