// Light and dark mode
const body = document.querySelector("body");
const modeBtn = document.querySelector("#light-mode");
let imgMode = document.querySelector("#img-mode");

modeBtn.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  if (imgMode.src === "http://127.0.0.1:5500/img/sun-i.svg") {
    imgMode.src = "./img/moon-on-i.svg";
  } else if (imgMode.src === "http://127.0.0.1:5500/img/moon-on-i.svg") {
    imgMode.src = "./img/sun-i.svg";
  }
});

// Language dropdown
const languageBtn = document.querySelector("#language-btn");
const languageContainer = document.querySelector(".lang-dropdown");

languageBtn.addEventListener("click", function () {
  languageContainer.classList.toggle("visible");
});
