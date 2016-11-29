document.getElementById('btnSubmit').addEventListener('click', submit);

function submit() {
    var error = [];
    var errorClass = "errors";
    if (firstName.value === '') {
        error.push("First name was left blank");
        firstName.classList.add(errorClass);
    }
    else {
        firstName.classList.remove(errorClass);
    }
    if (lastName.value === '') {
        error.push("Last name was left blank");
        lastName.classList.add(errorClass);
    }
    else {
        lastName.classList.remove(errorClass);
    }
    if (emailAddress.value === '') {
        error.push("Email address was left blank");
        emailAddress.classList.add(errorClass);
    }
    else {
        emailAddress.classList.remove(errorClass);
    }
    if (how.value < 1) {
        error.push("You forgot to select how you heard about us");
        how.classList.add(errorClass);
    }
    else {
        how.classList.remove(errorClass);
    }
    if (why.value === '') {
        error.push("You forgot to tell us why you deserve this amazing blender");
        why.classList.add(errorClass);
    }
    else {
        why.classList.remove(errorClass);
    }
    if (terms.checked === false) {
        error.push("Not so fast! You must swear to our terms.");
        terms.classList.add(errorClass);
    }
    else {
        terms.classList.remove(errorClass);
    }
    if (emailAddress.value.indexOf("@") < 0 || emailAddress.value.indexOf(".com") < 0) {
        console.log("invalid");
    }
    else {
        console.log("valid");
    }
    var output;
    if (error.length > 0) {
        output = "<ul><li>" + error.join("</li><li>") + "</li></ul>";
    }
    else {
        output = "<h1>Thank you!</h1>";
    }
    document.getElementById("error-list").innerHTML = output;
}