let x = 0;
let y = 0;
const main = document.querySelector("main");
const box = document.querySelector("div");
const img = document.querySelector(".click-image");
const textBox = document.querySelector(".textbox");

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

const pictureSet = document.querySelector("picture");
const introText = document.querySelector(".intro");
const options = document.querySelector(".options");
const secretBox = document.querySelector(".secret");

const changeView = () => {
  options.style.display = "flex";
  pictureSet.style.display = "none";
  secretBox.style.display = "block";
  // introText.style.display = "none";

  main.addEventListener("mousemove", (e) => {
    img.style.display = "block";

    x = e.pageX;
    y = e.pageY;

    img.style.top = e.pageY + "px";
    img.style.left = e.pageX + "px";
  });
};

setTimeout(changeView, 7000);

const buttons = document.querySelectorAll(".btn");

const responses = [
  "uh, no, please don't.",
  "are you dumb?",
  "finally! thanks.",
];

let textBoxOpen = false;
const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    textBoxOpen = true;

    textBox.style.display = "flex";
    textBox.style.animation = "slide 1s linear 1";

    if (button.textContent === "I will keep talking") {
      textBox.innerHTML = `<h1> ${responses[0]}</h1>`;
    } else if (button.textContent === "I just wanna sing") {
      textBox.innerHTML = `<h1>${responses[1]}</h1>`;
    }

    if (button.textContent === "Fine! I'll shut up") {
      textBox.innerHTML = `<h1>${responses[2]}</h1>`;
      celebrate();
      scrollToTop();
    }
  });
});

const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  const targetIsButton = e.target.className.match("btn");

  if (targetIsButton) {
    textBoxOpen = true;
    textBox.style.display = "flex";
  } else {
    textBoxOpen = false;
    textBox.style.display = "none";
  }
});

const hiddenbtn = document.querySelector(".hidden");
const audio = hiddenbtn.querySelector("audio");

const play = () => {
  audio.play();
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    document.body.style.backgroundColor = "#7ba5f1";
    hiddenbtn.style.display = "block";
  } else {
    document.body.style.backgroundColor = "var(--bg-color";
  }
});

hiddenbtn.addEventListener("click", () => {
  play();
});
