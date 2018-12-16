function main () {
    $('.nav-button').on('click', function () {
        if ($('.nav-button')) {
            $('.nav-button').toggleClass('click-slide-out');
            $('.nav-button').toggleClass('click-slide-in');
            $('.slidable').toggleClass('slide-in');
            $('.slidable').toggleClass('slide-out');
            console.log('owo');
            
        }
    });
    $('.main-page-button').on('click', function () {
        $('.main-page').siblings().fadeOut();
        $('.main-page').fadeIn();
    });
    $('.button').on('click', function () {
        $('.downloads-page').removeClass('invis');
        $('.downloads-page').siblings().removeClass('invis');
    });
    $('.downloads-button').on('click', function () {
        $('.downloads-page').siblings().fadeOut();
        $('.downloads-page').fadeIn();

    });
    $('.misc-button').on('click', function () {
        $('.misc-page').siblings().fadeOut();
        $('.misc-page').fadeIn();
    });
    $('.pictures-button').on('click', function () {
        $('.pictures-page').siblings().fadeOut();
        $('.pictures-page').fadeIn();
    });

    
}
$(document).ready(main);