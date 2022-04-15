window.onload = function () {

    function validate(e) {
        var fnameDiv = document.getElementById('fName')
        var firstName = document.getElementById('firstName');
        if (firstName.value.trim() == '') {
            // Add a class that defines an animation
            fnameDiv.classList.add('shake-horizontal');
            // remove the class after the animation completes
            setTimeout(function() {
                fnameDiv.classList.remove('shake-horizontal');
            }, 800);
            e.preventDefault();
        }
        var passDiv = document.getElementById('pass');
        var password = document.getElementById('password');
        if (password.value.trim() == '') {
            
            // Add a class that defines an animation
            passDiv.classList.add('shake-horizontal');
            // remove the class after the animation completes
            setTimeout(function() {
                passDiv.classList.remove('shake-horizontal');
            }, 800);
            e.preventDefault();
        }
        var emailDiv = document.getElementById('Email');
        var email = document.getElementById('email');
        if (email.value.trim() == '') {
            
            // Add a class that defines an animation
            emailDiv.classList.add('shake-horizontal');
            // remove the class after the animation completes
            setTimeout(function() {
                emailDiv.classList.remove('shake-horizontal');
            }, 800);
            e.preventDefault();
        }
    }
    document.getElementById('login').addEventListener('submit', validate);
}