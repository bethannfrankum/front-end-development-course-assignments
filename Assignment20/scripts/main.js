$(document).ready(function () {
    //todo: execute a fake get request
    //Wire up our event listeners
    //I'm going to use function names so I can reuse them later
    $('#name').on('blur', validateName);
    $('#answer').on('blur', validateAnswer);
    $('.newForm').hide();

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
        var isValidName = validateName();
        var isValidAnswer = validateAnswer();
        //Add an if statement and only execute this block if both variables are set to true
        $('.newForm').show();
    });
    //checks to see if an name is filled out and 
    //shows an error message if it is not
    function validateName() {
        var nameElm = $('#name');
        var nameElmVal = nameElm.val();
        var nameErrorMsg = nameElm.closest('.input-group').find('.error-name');
        if (nameElmVal === '') {
            nameErrorMsg.show();
            nameElm.addClass('invalid');
        }
        else {
            nameErrorMsg.hide();
            nameElm.removeClass('invalid');
            $('.newForm').hide();
        }
    }
    //checks to see if an answer is filled out and 
    //shows an error message if it is not
    function validateAnswer() {
        var answerElm = $('#answer');
        var answerElmVal = answerElm.val();
        var answerErrorMsg = answerElm.closest('.input-group').find('.error-answer');
        if (answerElmVal === '') {
            answerErrorMsg.show();
            answerElm.addClass('invalid');
            return false;
        }
        else {
            answerErrorMsg.hide();
            answerElm.removeClass('invalid');
            return true;
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