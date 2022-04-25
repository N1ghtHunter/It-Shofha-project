/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
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
var btn = $(".m-play-btn");
var clip = document.querySelectorAll(".m-clip");
var firstBtn = $("#firstBtn");
var firstClip = $(".firstClip");
var close = $(".m-close");
var firstVideo = $("#firstVid");
var video = document.querySelectorAll("video");

$(".m-play-btn").click(function () {
	let userClickedBtn = $(this).attr("id");
	if (userClickedBtn == "firstBtn") {
		clip[0].classList.add("active");
		video[0].play();
		video[0].currentTime = 0;
	} else if (userClickedBtn == "secBtn") {
		clip[1].classList.add("active");
		video[1].play();
		video[1].currentTime = 0;
	} else if (userClickedBtn == "thirdBtn") {
		clip[2].classList.add("active");
		video[2].play();
		video[2].currentTime = 0;
	}
	console.log(userClickedBtn);
});

close.click(function () {
	for (let i = 0; i < 3; i++) {
		clip[i].classList.remove("active");
		video[i].pause();
	}
});
var myDiv = document.querySelectorAll(".pic-container");
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("fadeInTop", entry.isIntersecting);
			if (entry.isIntersecting) observer.unobserve(entry.target);
		});
	},
	{
		threshold: 0.7,
	}
);
myDiv.forEach((card) => {
	observer.observe(card);
});
