<<<<<<< HEAD
export function setupNavigation() {
  var button = document.getElementById("nav-toggle");

  console.log(button);

  button.classList.toggle("is-active");
  var navList = document.querySelector("ul.nav");
  if (navList) {
    navList.classList.toggle("show");
  }
}
=======
export function setupNavigation() {
  var button = document.getElementById("nav-toggle");

  console.log(button);

  button.classList.toggle("is-active");
  var navList = document.querySelector("ul.nav");
  if (navList) {
    navList.classList.toggle("show");
  }
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
