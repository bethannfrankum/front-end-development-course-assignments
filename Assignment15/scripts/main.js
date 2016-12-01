$(document).ready(function () {
    ///// Code goes here
    ////// Part 1
    $('#btnOne').on('click', update1)

    function update1() {
        return alert('Hello');
    }
    /////Part 2
    $('#btnTwo').on('click', update2)

    function update2() {
        $('.update-html').html('<h3>Hello World</h3>')
    }
    ////Part 3
    $('#btnThree').on('click', update3)

    function update3() {
        $('#text-update').val('Hello World')
    }
    /////Part 4
    $('#btnCopyHtml').on('click', update4)

    function update4() {
        var copiedHtml = $('.copy-html').html();
        $('.paste-html').html(copiedHtml);
    }
    ////Part 5
    $('#btnCopyValues').on('click', update5)

    function update5() {
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    }
});