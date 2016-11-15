var submit = function () {
        var messages = [];
        var fName = getElm('firstName');
        if (fName.value === '') {
            messages.push('First Name is Required');
            var lName = getElm('lastName');
            if (lName.value === '') {
                messages.push('Last Name is Required')
            }
        }
        var inputs = ['firstName', 'lastName', 'emailAddress', 'password', 'passwordConfirm'];
        for (var i = 0; i < inputs.length; i++) {
            var elm = getElm(inputs[i]);
            if (elm.value === '') {
                messages.push(elm.placeholder + ' is required');
                elm.classList.add(invalid);
            } else {
                elm.classList.remove(invalid);
            }
        }