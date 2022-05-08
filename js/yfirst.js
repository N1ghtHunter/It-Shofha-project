const menuToggle = document.querySelector(".menuToggle");
menuToggle.addEventListener("click", function () {
	menuToggle.classList.toggle("active");
	openNav();
});

function openNav() {
	var width = window.innerWidth;
	if (width <= 700) {
		document
			.getElementById("mySidenav")
			.classList.toggle("side-fullwidth");
	} else {
		document.getElementById("mySidenav").classList.toggle("side-width");
		document.getElementById("main").classList.toggle("margin-250");
		document
			.getElementById("navbarColor01")
			.classList.toggle("margin-250");
	}
}
