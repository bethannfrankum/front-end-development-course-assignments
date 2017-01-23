$(document).ready(function () {
    $('.mobile-collapse').hide();
    $('.mobile-collapse-toggle').on('click', function () {
        var btn = $(this);
        var navi = btn.closest('.row');
        navi.find('.mobile-collapse').slideToggle();
    });
    $('.drop-down-toggle').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var navi = btn.closest('.row');
        navi.find('.drop-down-content').slideToggle();
    });
    $('.drop-down-toggle2').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var navi = btn.closest('.row');
        navi.find('.drop-down-content2').slideToggle();
    });
});