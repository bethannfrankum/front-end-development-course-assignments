$(document).ready(function () {
    $('.error').hide();
    $('.input-group').filter(':even').addClass('even');
    $('#firstName').on('blur', errorMessage);
    $('#lastName').on('blur', errorMessage);
    $('#emailAddress').on('blur', errorMessage);

    function errorMessage() {
        var input = $(this);
        if (input.val() === '') {
            input.closest('div').find('span').fadeIn();
        }
        else {
            input.closest('div').find('span').fadeOut()
        }
    }
    $('#emailAddress').on('blur', function () {
        var input = $(this);
        var inputValue = input.val();
        var msg = input.closest('.input-group').find('.emailMsg');
        if (inputValue.indexOf('@') === -1 || inputValue.indexOf('.com') === -1) {
            msg.fadeIn();
        }
        else {
            msg.fadeOut();
        }
    });
});