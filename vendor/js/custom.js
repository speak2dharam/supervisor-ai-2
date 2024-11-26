window.onscroll = function() {
  stickyNavbar();
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}