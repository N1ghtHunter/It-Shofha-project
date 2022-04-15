/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
const menuToggle = document.querySelector('.menuToggle');
menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle('active')
    openNav();
  });

function openNav() {
  var width = window.innerWidth;
  if (width <= 700) {
    document.getElementById("mySidenav").classList.toggle('side-fullwidth');
  }
  else{
    document.getElementById("mySidenav").classList.toggle('side-width');
    document.getElementById("main").classList.toggle('margin-250');
    document.getElementById("navbarColor01").classList.toggle('margin-250');
  }
    
  }
  var myDiv = document.querySelectorAll(".pic-container");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
          entry.target.classList.toggle("fadeInTop",entry.isIntersecting)
          if(entry.isIntersecting) observer.unobserve(entry.target)
          })
    },
{
  threshold: 0.7,
}
)
myDiv.forEach(card =>{
  observer.observe(card);
})