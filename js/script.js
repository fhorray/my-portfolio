const body = document.querySelector("body");
const languageBtn = document.querySelector("#language-btn");
const languageContainer = document.querySelector(".lang-dropdown");
// const headerContainer = document.querySelector("header");

languageBtn.addEventListener("click", function () {
  languageContainer.classList.toggle("visible");
});

// light and dark mode
const btnLightMode = document.querySelector("#light-mode");

btnLightMode.addEventListener("click", function () {
  body.classList.toggle("light-mode");
});

const heroContainer = document.querySelector(".s-hero .text");
const h2El = document.querySelector(".s-hero .text h1").textContent;

console.log(heroContainerH2.textContent);
