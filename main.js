$(function() {
    let header = $("#header"),
        headerH,
        intro = $("#intro"),
        introH,
        scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load", function() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();


        if(scrollPos > headerH) {
            header.addClass("fixed");    
        } else {
            header.removeClass("fixed")
        }

    })

});