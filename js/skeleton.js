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