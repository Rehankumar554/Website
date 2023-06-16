br = document.querySelector(".br");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");

br.addEventListener("click", () => {
  rightnav.classList.toggle("v-class");
  navlist.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
});

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};