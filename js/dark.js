/* Dark mode*/

const html = document.querySelector("html");
const themeBtn = document.querySelector("#theme-btn");

function toggleTheme() {
  console.log("toggleTheme");
  html.classList.toggle("dark");
}

themeBtn.addEventListener("click", toggleTheme);
