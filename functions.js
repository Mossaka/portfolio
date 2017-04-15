$(window).scroll(function () {
    var $wScroll = $(this).scrollTop();

    $(".intro-message").css({
        'transform' : 'translate(0px, ' + $wScroll /30 +'%)'
    })
})