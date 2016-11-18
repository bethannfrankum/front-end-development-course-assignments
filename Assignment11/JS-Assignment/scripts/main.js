function update() {
    //////////////////////My Code/////////////////////
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var emailAddress = getValue('emailAddress')
    var messages = []
    if (firstName == '') {
        messages.push("First name required")
    }
    if (lastName == '') {
        messages.push("Last name is required")
    }
    if (emailAddress == '') {
        messages.push("Email address is required")
    }
    var email = getE('emailAddress');
    if (email.value.indexOf('@') == -1) {
        messages.push('Enter a valid Email');
        var html = '<ul>'
        for (var i = 0; i < messages.length; i++) {
            html = html + '<li>' + messages[i] + '</li>'
        }
        html = html + '</ul>'
        document.getElementById('error-list').innerHTML = html;
        var user = {
            firstname: firstName
            , lastname: lastName
            , email: emailAddress
            , fullname: function () {
                return this.firstName + " " + this.lastName;
            }
        }
        if (firstName != "" && lastName != "" && emailAddress != "") {
            window.alert("Thank your for completing this form!")
        }
    }
    ////
    var btn = document.getElementById('btnUpdate');
    btn.addEventListener('click', update);

    function getValue(id) {
        return getElm(id).value;
    }

    function getElm(id) {
        return document.getElementById(id);
    }