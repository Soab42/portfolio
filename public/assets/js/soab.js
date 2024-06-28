export function setupNavigation() {
  var button = document.getElementById("nav-toggle");

  console.log(button);

  button.classList.toggle("is-active");
  var navList = document.querySelector("ul.nav");
  if (navList) {
    navList.classList.toggle("show");
  }
}
