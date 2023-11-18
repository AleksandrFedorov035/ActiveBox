$(function() {
    let header = $("#header"),
     intro = $("#intro"),
     introH,
    scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();


        if(scrollPos > introH) {
            header.addClass("fixed");    
        } else {
            header.removeClass("fixed")
        }

    })

});