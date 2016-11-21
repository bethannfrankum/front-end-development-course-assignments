document.getElementById('btnSubmit').addEventListener('click', submit);

function submit() {
    var btn = getElm('btnSubmit');
    btn.addEventListener('click', update);
    var errClass = "invalid";
    //creates empty array for our array messages
    var errorMsg = [];
    //get the firstName element
    var firstName = getElm('firstName');
    //Check to see if first name is empty
    if (firstName.value === '') {
        //Add our error message to the array
        errorMsg.push('First Name is required');
        //Add an error class to our input
        firstName.classList.add(errClass);
    }
    var lastName = getElm('lastName');
    if (lastName.value === '') {
        errorMsg.push('Last Name is required');
        lastName.classList.add(errClass);
    }
    var email = getElm('emailAddress');
    if (email.value === '') {
        errorMsg.push('Email is required');
        email.classList.add(errClass);
        //Check to see if our input contains @ or .com
    }
    else if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        errorMsg.push('A Valid Email is required');
        email.classList.add(errClass);
    }
    //Do we have any error messages?
    if (errorMsg.length > 0) {
        //Create a variable for our html messages
        var html = '';
        //Loop through and add each message to our html variable
        for (var i = 0; i < errorMsg.length; i++) {
            //html += errorMsg[i] + '<br />';            
            html = html + errorMsg[i] + '<br />';
        }
        //Update our html with new string
        getElm('errors').innerHTML = html;
    }
    else {
        //Everything checked out. Display a thank you message
        getElm('errors').innerHTML = "Thank you for submitting your information";
    }
}
var resetBtn = getElm('btnReset');
resetBtn.addEventListener('click', reset);

function reset() {
    var inputIdArray = ['firstName', 'lastName', 'emailAddress']
        //Loop through all inputs and reset their value
    for (var i = 0; i < inputIdArray.length; i++) {
        getElm(inputIdArray[i]).value = '';
    }
}
/////////////////
function getElm(id) {
    return document.getElementById(id);
}