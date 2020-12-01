const container = document.querySelector(".container");
const boxes = container.querySelectorAll("div");

const img =
  "https://www.geekwiththat.com/wp-content/uploads/2017/06/1898130_285125985022594_7169533043432192446_n.png";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const imgTag = `<img src="${img}" />`;
    // box.innerHTML = imgTag;

    if (box.innerHTML === "") {
      box.innerHTML = imgTag;
    } else {
      box.innerHTML = "";
    }
  });
});
