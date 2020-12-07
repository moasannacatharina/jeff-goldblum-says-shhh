// const container = document.querySelector(".container");
// const boxes = container.querySelectorAll("div");

// // const img =
// //   "https://www.geekwiththat.com/wp-content/uploads/2017/06/1898130_285125985022594_7169533043432192446_n.png";

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     const imgTag = `<img src="${img}" alt="Jeff Goldblum"/>`;
//     // box.innerHTML = imgTag;

//     if (box.innerHTML === "") {
//       box.innerHTML = imgTag;
//     } else {
//       box.innerHTML = "";
//     }
//   });
// });

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

// const h1 = document.querySelector(".reveal-text");

// function changeText() {
//   h1.textContent = "click anywhere!";
// }

// setTimeout(changeText, 3000);

// console.log(h1);
