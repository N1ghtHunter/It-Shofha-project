// LOGIN PAGEEEEEEEEEEEEEE
window.onload = function () {
	function validate(e) {
		let warningText = $(".warning");
		const fnameDiv = document.getElementById("fName");
		const firstName = document.getElementById("firstName");
		const emailDiv = document.getElementById("Email");
		const email = document.getElementById("email");
		const passDiv = document.getElementById("pass");
		const password = document.getElementById("password");
		const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
		if (email.value.trim() == "") {
			warningText.addClass("error");
			// Add a class that defines an animation
			emailDiv.classList.add("shake-horizontal");
			// remove the class after the animation completes
			setTimeout(function () {
				emailDiv.classList.remove("shake-horizontal");
			}, 800);
			setTimeout(() => {
				warningText.removeClass("error");
			}, 4000);
			e.preventDefault();
		}
		if (firstName.value.trim() == "") {
			warningText.addClass("error");
			// Add a class that defines an animation
			fnameDiv.classList.add("shake-horizontal");
			// remove the class after the animation completes
			setTimeout(function () {
				fnameDiv.classList.remove("shake-horizontal");
			}, 800);
			setTimeout(() => {
				warningText.removeClass("error");
			}, 4000);
			e.preventDefault();
		}
		if (password.value.trim() == "") {
			warningText.addClass("error");
			passDiv.classList.add("shake-horizontal");
			setTimeout(function () {
				passDiv.classList.remove("shake-horizontal");
			}, 800);
			setTimeout(() => {
				warningText.removeClass("error");
			}, 4000);
			e.preventDefault();
		}
		if (password.value.match(paswd)) {
			console.log(done);
		} else {
			document.querySelector(".tooltips").classList.add("wrong-pass");
			setTimeout(() => {
				document.querySelector(".tooltips").classList.remove("wrong-pass");
			}, 4000);
			e.preventDefault();
		}
	}
	const login = document.getElementById("login");
	if (login) login.addEventListener("submit", validate);
	//--------------------------------
	// LOGIN PAGE END
	//--------------------------------

	//--------------------------------
	// SEASONS SWITCH
	//--------------------------------

	const gotEpisodes = $(".got-episodes");
	epcloseAll();
	function epcloseAll() {
		console.log(gotEpisodes);
		if (gotEpisodes) {
			gotEpisodes.addClass("hide");
		}
		setTimeout(function () {
			gotEpisodes.css("display", "none");
		}, 400);
	}
	epcloseAll();
	const gotSeasons = $(".gotSeasons");
	gotSeasons.click(function () {
		let userClickedSeasons = $(this).attr("id");
		console.log(userClickedSeasons);
		if (userClickedSeasons == "season1") {
			console.log("done");
			epcloseAll();
			setTimeout(function () {
				$("#season-1").css("display", "flex");
				$("#season-1").removeClass("hide");
			}, 410);
		} else if (userClickedSeasons == "season2") {
			epcloseAll();
			setTimeout(function () {
				$("#season-2").css("display", "flex");
				$("#season-2").removeClass("hide");
			}, 500);
		} else if (userClickedSeasons == "season3") {
			epcloseAll();
			setTimeout(function () {
				$("#season-3").css("display", "flex");
				$("#season-3").removeClass("hide");
			}, 500);
		} else if (userClickedSeasons == "season4") {
			epcloseAll();
			setTimeout(function () {
				$("#season-4").css("display", "flex");
				$("#season-4").removeClass("hide");
			}, 500);
		} else if (userClickedSeasons == "season5") {
			epcloseAll();
			setTimeout(function () {
				$("#season-5").css("display", "flex");
				$("#season-5").removeClass("hide");
			}, 500);
		} else if (userClickedSeasons == "season6") {
			epcloseAll();
			setTimeout(function () {
				$("#season-6").css("display", "flex");
				$("#season-6").removeClass("hide");
			}, 500);
		} else if (userClickedSeasons == "season7") {
			epcloseAll();
			setTimeout(function () {
				$("#season-7").css("display", "flex");
				$("#season-7").removeClass("hide");
			}, 500);
		} else if (userClickedSeasons == "season8") {
			epcloseAll();
			setTimeout(function () {
				$("#season-8").css("display", "flex");
				$("#season-8").removeClass("hide");
			}, 500);
		}
	});

	//--------------------------------
	// SIDE MENU
	//--------------------------------
};

//--------------------------------
// PIC fading when intersecting
//--------------------------------
var myDiv = document.querySelectorAll(".pic-container");
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("fadeInTop", entry.isIntersecting);
			if (entry.isIntersecting) observer.unobserve(entry.target);
		});
	},
	{
		threshold: 0.6,
	}
);
myDiv.forEach((card) => {
	observer.observe(card);
});

//--------------------------------
// PIC fading when intersecting END
//--------------------------------

//--------------------------------
// Vidoe popup
//--------------------------------
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
//--------------------------------
// Vidoe popup END
//--------------------------------

//--------------------------------
// SIDE MENU
//--------------------------------

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
const menuToggle = document.querySelector(".menuToggle");
if (menuToggle) {
	menuToggle.addEventListener("click", function () {
		menuToggle.classList.toggle("active");
		openNav();
	});
}

function openNav() {
	var width = window.innerWidth;
	if (width <= 700) {
		document.getElementById("mySidenav").classList.toggle("side-fullwidth");
	} else {
		document.getElementById("mySidenav").classList.toggle("side-width");
		document.getElementById("main").classList.toggle("margin-250");
		document.getElementById("navbarColor01").classList.toggle("margin-250");
	}
}
//--------------------------------
// SIDE MENU END
//--------------------------------

//--------------------------------
// search bar
//--------------------------------
const searchInput = document.querySelector("[data-search]");
let movies = [];
const names = document.querySelectorAll("#searchResult li");

const searchResult = document.querySelector("#searchResult");
document.onclick = function (event) {
	if (event.target.id == "search-input" || event.target.id == "search-btn") {
		console.log("block");
		searchResult.style.display = "block";
	} else if (event.target.id !== "searchResult" && event.target.id !== "search-input" && event.target.id !== "search-btn") {
		console.log("none");
		searchResult.style.display = "none";
	}
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
					document.getElementById("no-result").style.display = "block";
				}
			}
		}
	}
}

//--------------------------------
// search bar END
//--------------------------------

//--------------------------------
// DARK & LIGHT MODE
//--------------------------------

const toggle = document.getElementById("themetoggle");
const body = document.querySelector("body");
const footerBtn = document.querySelectorAll("footer .btn-outline-light");
const textChanger = document.querySelectorAll(".text-white");
toggle.onclick = () => {
	$(".user-info").toggleClass("text-dark");
	document.getElementById("search-btn").classList.toggle("btn-outline-light");
	document.getElementById("search-btn").classList.toggle("btn-outline-dark");
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
//--------------------------------
// DARK & LIGHT MODE END
//--------------------------------

//--------------------------------
// trailer got
//--------------------------------
const gotTrailerbtn = $(".got-play");
const gotClip = $(".got-clip");
const gotClose = $(".got-close");
const gotVideo = document.querySelector(".got-clip video");
gotTrailerbtn.click(function () {
	gotClip.addClass("active");
	gotVideo.play();
	gotVideo.currentTime = 0;
});

gotClose.click(function () {
	gotClip.removeClass("active");
	gotVideo.pause();
});
//--------------------------------
// trailer got end
//--------------------------------
//   slider
const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");
if (arrows) {
	arrows.forEach((arrow, i) => {
		arrow.addEventListener("click", () => {
			movielists[i].style.transform = "translateX(-500PX)";
		});
	});
}
function myalert() {
	if (confirm("are you sure want download this video?") == true) {
		alert("video downloaded successfully");
	} else {
		alert("downloading cancel");
	}
}

const imgCards = document.querySelectorAll(".movies-container .cards");
for (let i = 0; i < imgCards.length; i++) {
	imgCards[i].addEventListener("mouseover", function () {
		setEffect(this);
	});
	imgCards[i].addEventListener("mouseout", resEffect);
}
function setEffect(el) {
	for (let i = 0; i < imgCards.length; i++) {
		imgCards[i].setAttribute("style", "filter: blur(5px);");
	}
	el.removeAttribute("style");
}

function resEffect() {
	for (let i = 0; i < imgCards.length; i++) {
		imgCards[i].removeAttribute("style");
	}
}




function mydown() {
	if (confirm("هل تود تحميل الفيديو؟") == true) {
		alert("تم التحميل بنجاح");
	} else {
		alert("فشل التحميل");
	}
}
// kiro soliman

window.onload = function () {
	var span = document.querySelectorAll(".sully_span");
	var div = document.querySelectorAll(".item-a");
	var l = 0;
	if (span) {
		span[1].onclick = () => {
			console.log("right span");
			l++;
			for (var divIndex of div) {
				if (l == 0) {
					divIndex.style.left = "0px";
					console.log(l + divIndex);
				}
				if (l == 1) {
					divIndex.style.left = "-740px";
					console.log(l + divIndex);
				}
				if (l == 2) {
					divIndex.style.left = "-1480px";
					console.log(l + divIndex);
				}
				if (l == 3) {
					divIndex.style.left = "-2220px";
					console.log(l + divIndex);
				}

				if (l == 4) {
					divIndex.style.left = "-2990px";
					console.log(l + divIndex);
				}

				if (l > 4) {
					divIndex = 2;
					console.log(l + divIndex);
				}
			}
		};

		span[0].onclick = () => {
			console.log("left span ");
			l--;
			for (var divIndex of div) {
				if (l == 0) {
					divIndex.style.left = "0px";
					console.log(l + divIndex);
				}
				if (l == 1) {
					divIndex.style.left = "-740px";
					console.log(l + divIndex);
				}
				if (l == 2) {
					divIndex.style.left = "-1480px";
					console.log(l + divIndex);
				}
				if (l == 3) {
					divIndex.style.left = "-2220px";
					console.log(l + divIndex);
				}
				if (l > 0) {
					divIndex = 0;
					console.log(l + divIndex);
				}
			}
		};
	}

	var koko = document.querySelectorAll(".sully_spanb");
	var kiro = document.querySelectorAll(".item-b");
	var x = 0;
	if (koko) {
		koko[1].onclick = () => {
			console.log("right koko");
			x++;
			for (var divIndex1 of kiro) {
				if (x == 0) {
					divIndex1.style.left = "0px";
					console.log(l + divIndex1);
				}
				if (x == 1) {
					divIndex1.style.left = "-740px";
					console.log(l + divIndex1);
				}
				if (x == 2) {
					divIndex1.style.left = "-1480px";
					console.log(l + divIndex1);
				}
				if (x == 3) {
					divIndex1.style.left = "-2220px";
					console.log(l + divIndex1);
				}

				if (x == 4) {
					divIndex1.style.left = "-2990px";
					console.log(l + divIndex1);
				}

				if (x > 4) {
					divIndex1 = 2;
					console.log(l + divIndex1);
				}
			}
		};

		koko[0].onclick = () => {
			console.log("left koko ");
			x--;
			for (var divIndex1 of kiro) {
				if (x == 0) {
					divIndex1.style.left = "0px";
					console.log(l + divIndex1);
				}
				if (x == 1) {
					divIndex1.style.left = "-740px";
					console.log(l + divIndex1);
				}
				if (x == 2) {
					divIndex1.style.left = "-1480px";
					console.log(l + divIndex);
				}
				if (x == 3) {
					divIndex1.style.left = "-2220px";
					console.log(l + divIndex1);
				}
				if (x > 0) {
					divIndex1 = 0;
					console.log(l + divIndex1);
				}
			}
		};
	}

	var koko1 = document.querySelectorAll(".sully_spanc");
	var kiro1 = document.querySelectorAll(".item-c");
	var y = 0;
	if (koko1) {
		koko1[1].onclick = () => {
			console.log("right koko1");
			y++;
			for (var divIndex2 of kiro1) {
				if (y == 0) {
					divIndex2.style.left = "0px";
					console.log(+divIndex2);
				}
				if (y == 1) {
					divIndex2.style.left = "-740px";
					console.log(l + divIndex2);
				}
				if (y == 2) {
					divIndex2.style.left = "-1480px";
					console.log(l + divIndex2);
				}
				if (y == 3) {
					divIndex2.style.left = "-2220px";
					console.log(l + divIndex2);
				}

				if (y == 4) {
					divIndex2.style.left = "-2990px";
					console.log(l + divIndex2);
				}

				if (y > 4) {
					divIndex2 = 2;
					console.log(l + divIndex2);
				}
			}
		};

		koko1[0].onclick = () => {
			console.log("left koko1");
			y--;
			for (var divIndex2 of kiro1) {
				if (y == 0) {
					divIndex2.style.left = "0px";
					console.log(l + divIndex2);
				}
				if (y == 1) {
					divIndex2.style.left = "-740px";
					console.log(l + divIndex2);
				}
				if (y == 2) {
					divIndex2.style.left = "-1480px";
					console.log(l + divIndex2);
				}
				if (y == 3) {
					divIndex2.style.left = "-2220px";
					console.log(l + divIndex2);
				}
				if (y > 0) {
					divIndex2 = 0;
					console.log(l + divIndex2);
				}
			}
		};
	}

	var koko2 = document.querySelectorAll(".sully_spand");
	var kiro2 = document.querySelectorAll(".item-d");
	var z = 0;
	if (koko2) {
		koko2[1].onclick = () => {
			console.log("right koko2");
			z++;
			for (var divIndex3 of kiro2) {
				if (z == 0) {
					divIndex3.style.left = "0px";
					console.log(+divIndex3);
				}
				if (z == 1) {
					divIndex3.style.left = "-740px";
					console.log(l + divIndex3);
				}
				if (z == 2) {
					divIndex3.style.left = "-1480px";
					console.log(l + divIndex3);
				}
				if (z == 3) {
					divIndex3.style.left = "-2220px";
					console.log(l + divIndex3);
				}

				if (z == 4) {
					divIndex3.style.left = "-2990px";
					console.log(l + divIndex3);
				}

				if (z > 4) {
					divIndex3 = 2;
					console.log(l + divIndex3);
				}
			}
		};

		koko2[0].onclick = () => {
			console.log("left koko2");
			z--;
			for (var divIndex3 of kiro2) {
				if (z == 0) {
					divIndex3.style.left = "0px";
					console.log(l + divIndex3);
				}
				if (z == 1) {
					divIndex3.style.left = "-740px";
					console.log(l + divIndex3);
				}
				if (z == 2) {
					divIndex3.style.left = "-1480px";
					console.log(l + divIndex3);
				}
				if (z == 3) {
					divIndex3.style.left = "-2220px";
					console.log(l + divIndex3);
				}
				if (z > 0) {
					divIndex3 = 0;
					console.log(l + divIndex3);
				}
			}
		};
	}

	var koko3 = document.querySelectorAll(".sully_spanf");
	var kiro3 = document.querySelectorAll(".item-f");
	var a = 0;
	if (koko3) {
		koko3[1].onclick = () => {
			console.log("right koko3");
			a++;
			for (var divIndex4 of kiro3) {
				if (a == 0) {
					divIndex4.style.left = "0px";
					console.log(l + divIndex4);
				}
				if (a == 1) {
					divIndex4.style.left = "-740px";
					console.log(l + divIndex4);
				}
				if (a == 2) {
					divIndex4.style.left = "-1480px";
					console.log(l + divIndex4);
				}
				if (a > 2) {
					divIndex4 = 2;
					console.log(l + divIndex4);
				}
			}
		};

		koko3[0].onclick = () => {
			console.log("left koko3");
			a--;
			for (var divIndex4 of kiro3) {
				if (a == 0) {
					divIndex4.style.left = "0px";
					console.log(l + divIndex4);
				}
				if (a == 1) {
					divIndex4.style.left = "-740px";
					console.log(l + divIndex4);
				}
				if (a == 2) {
					divIndex4.style.left = "-1480px";
					console.log(l + divIndex4);
				}

				if (a > 0) {
					divIndex4 = 0;
					console.log(l + divIndex4);
				}
			}
		};

		var koko4 = document.querySelectorAll(".sully_spanE");
		var kiro4 = document.querySelectorAll(".item-E");
		var g = 0;
		if (koko4) {
			koko4[1].onclick = () => {
				console.log("right koko4");
				g++;
				for (var divIndex5 of kiro4) {
					if (g == 0) {
						divIndex5.style.left = "0px";
						console.log(l + divIndex5);
					}
					if (g == 1) {
						divIndex5.style.left = "-740px";
						console.log(l + divIndex5);
					}
					if (g == 2) {
						divIndex5.style.left = "-1480px";
						console.log(l + divIndex5);
					}
					if (g > 2) {
						divIndex5 = 2;
						console.log(l + divIndex5);
					}
				}
			};
		}

		koko4[0].onclick = () => {
			console.log("left koko4");
			g--;
			for (var divIndex5 of kiro4) {
				if (g == 0) {
					divIndex5.style.left = "0px";
					console.log(l + divIndex5);
				}
				if (g == 1) {
					divIndex5.style.left = "-740px";
					console.log(l + divIndex5);
				}
				if (g == 2) {
					divIndex5.style.left = "-1480px";
					console.log(l + divIndex5);
				}

				if (g > 0) {
					divIndex5 = 0;
					console.log(l + divIndex5);
				}
			}
		};
	}

	var koko5 = document.querySelectorAll(".sully_spanH");
	var kiro5 = document.querySelectorAll(".item-H");
	var k = 0;
	if (koko5) {
		koko5[1].onclick = () => {
			console.log("right koko5");
			k++;
			for (var divIndex6 of kiro5) {
				if (k == 0) {
					divIndex6.style.left = "0px";
					console.log(l + divIndex6);
				}
				if (k == 1) {
					divIndex6.style.left = "-740px";
					console.log(l + divIndex6);
				}
				if (k == 2) {
					divIndex6.style.left = "-1480px";
					console.log(l + divIndex6);
				}
				if (k > 2) {
					divIndex6 = 2;
					console.log(l + divIndex6);
				}
			}
		};

		koko5[0].onclick = () => {
			console.log("left koko5");
			k--;
			for (var divIndex6 of kiro5) {
				if (k == 0) {
					divIndex6.style.left = "0px";
					console.log(l + divIndex6);
				}
				if (k == 1) {
					divIndex6.style.left = "-740px";
					console.log(l + divIndex6);
				}
				if (k == 2) {
					divIndex6.style.left = "-1480px";
					console.log(l + divIndex6);
				}

				if (k > 0) {
					divIndex6 = 0;
					console.log(l + divIndex6);
				}
			}
		};
	}
};
