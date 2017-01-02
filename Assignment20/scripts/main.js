$(document).ready(function () {
    //todo: execute a fake get request
    //Wire up our event listeners
    //I'm going to use function names so I can reuse them later
    $('#name').on('blur', validateName);
    $('#answer').on('blur', validateAnswer);

    function errorMessage() {
        var input = $(input);
        if (input.val() === '') {
            input.closest('div').find('span').fadeIn();
        }
        else {
            input.closest('div').find('span').fadeOut()
        }
    }
    //Register button click events
    $('#btnSubmit').on('click', function () {
        console.log('Success');
    });
    $('#btnReset').on('click', function () {
        var allInputs = $('input, textarea')
        allInputs.val('');
        allInputs.removeClass('invalid');
        $('.error').hide();
        $('#messages').html('');
    });
    //checks to see if an name is filled out and 
    //shows an error message if it is not
    function validateName() {
        var nameElm = $('#name');
        var nameElmVal = nameElm.val();
        console.log(nameElmVal);
        var nameErrorMsg = nameElm.closest('.input-group').find('.error-name');
        if (nameElmVal === '') {
            nameErrorMsg.show();
            nameElm.addClass('invalid');
        }
        else {
            nameErrorMsg.hide();
            nameElm.removeClass('invalid')
        }
    }
    //checks to see if an answer is filled out and 
    //shows an error message if it is not
    function validateAnswer() {
        var answerElm = $('#answer');
        var answerElmVal = answerElm.val();
        console.log(answerElmVal);
        var answerErrorMsg = answerElm.closest('.input-group').find('.error-answer');
        if (answerElmVal === '') {
            answerErrorMsg.show();
            answerElm.addClass('invalid');
        }
        else {
            answerElmMsg.hide();
            answerElm.removeClass('invalid');
        }
    }
    //Clears our inputs and hides all error messages
    function resetForm() {}
    //submit form
    function submitForm() {
        //TODO: is the form valid?
        //Update UI with new post
        //Display thank you message
        //Execute ajax post
    }
});