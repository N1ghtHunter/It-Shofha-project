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
// search bar

const searchInput = document.querySelector("[data-search]");
let movies = [];
const names = document.querySelectorAll("#searchResult li");

window.onload = function () {
	const searchResult = document.querySelector("#searchResult");
	document.onclick = function (event) {
		if (
			event.target.id == "search-input" ||
			event.target.id == "search-btn"
		) {
			console.log("block");
			searchResult.style.display = "block";
		} else if (
			event.target.id !== "searchResult" &&
			event.target.id !== "search-input" &&
			event.target.id !== "search-btn"
		) {
			console.log("none");
			searchResult.style.display = "none";
		}
	};
};

document.getElementById("search-btn").addEventListener("click", findMyDiv);
searchInput.addEventListener("input", (e) => {
	const value = e.target.value;
	console.log(value);
	movies.forEach((movie) => {
		const isVisible = movie;
	});
});
function closeAll() {
	for (let i = 0; i < names.length; i++) {
		if (names[i]) names[i].style.display = "none";
	}
}
function findMyDiv() {
	closeAll();
	var str_needle = searchInput.value;
	console.log(str_needle);
	str_needle = str_needle.toUpperCase();
	if (str_needle != "") {
		for (let i = 0; i < names.length - 1; i++) {
			if (names[i]) {
				var str_haystack = names[i].innerHTML.toUpperCase();

				if (str_haystack.includes(str_needle)) {
					console.log(str_haystack);
					names[i].style.display = "block";
				} else {
					document.getElementById("no-result").style.display =
						"block";
				}
			}
		}
	}
}
const toggle = document.getElementById("themetoggle");
const body = document.querySelector("body");
const footerBtn = document.querySelectorAll("footer .btn-outline-light");
const textChanger = document.querySelectorAll(".text-white");
toggle.onclick = () => {
	toggle.classList.toggle("theme-active");
	body.classList.toggle("theme-active");
	for (let i = 0; i < footerBtn.length; i++) {
		footerBtn[i].classList.toggle("btn-outline-light");
		footerBtn[i].classList.toggle("btn-outline-dark");
	}
	for (let i = 0; i < textChanger.length; i++) {
		textChanger[i].classList.toggle("text-white");
		textChanger[i].classList.toggle("text-dark");
	}
};
