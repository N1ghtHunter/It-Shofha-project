window.onload = function () {
	function validate(e) {
		let warningText = $(".warning");
		const fnameDiv = document.getElementById("fName");
		const firstName = document.getElementById("firstName");
		const emailDiv = document.getElementById("Email");
		const email = document.getElementById("email");
		const passDiv = document.getElementById("pass");
		const password = document.getElementById("password");
		const paswd =
			/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
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
				document
					.querySelector(".tooltips")
					.classList.remove("wrong-pass");
			}, 4000);
			e.preventDefault();
		}
	}
	document.getElementById("login").addEventListener("submit", validate);
};
