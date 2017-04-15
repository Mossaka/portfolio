$(window).scroll(function () {
    var $wScroll = $(this).scrollTop();

    $(".intro-message").css({
        'transform' : 'translate(0px, ' + $wScroll /10+'%)'
    })
    if($wScroll > 550) {
        $(".intro-message").fadeOut("fast");
    } else {
        $(".intro-message").fadeIn("fast");
    }
})