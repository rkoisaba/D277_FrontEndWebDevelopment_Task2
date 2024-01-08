function validateEmail() {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirm-email').value;
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var question = document.getElementById('question').value;

    if (!email || !confirmEmail || !firstName || !lastName || !question) {
        alert("All fields must be filled out.");
        return false;
    }

    if (email != confirmEmail) {
        alert("Email addresses do not match.");
        return false;
    }

    return true;
}
