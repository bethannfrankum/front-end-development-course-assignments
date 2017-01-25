$(document).ready(function () {
    $('#btnShowModal').on('click', showDialog);

    function showDialog() {
        $('.overlay').fadeIn(100, function () {
            $('.modal').fadeIn(100);
            $('#btnClose, .overlay').on('click', closeModal);
            registerEsc();
        });
    }

    function closeModal() {
        $('.modal').fadeOut(100, function () {
            $('.overlay').fadeOut(100);
            $(document).off('keyup');
            $('#btnClose, .overlay').off('click', closeModal);
        });
    }

    function registerEsc() {
        $(document).on('keyup', function (e) {
            if (e.keyCode === 27) {
                closeModal();
            }
        });
    }
});