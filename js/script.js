const languageBtn = document.querySelector("#language-btn");
const languageContainer = document.querySelector(".lang-dropdown");
// const headerContainer = document.querySelector("header");

languageBtn.addEventListener("click", function () {
  languageContainer.classList.toggle("visible");
});
