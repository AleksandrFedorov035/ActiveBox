$(function() {
    let header = $("#header"),
        headerH,
        nav = $("#nav"),
        navH,
        intro = $("#intro"),
        introH,
        scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load", function() {
        headerH = header.innerHeight();
        navH = nav.innerHeight();
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();


        if(scrollPos > navH) {
            header.addClass("fixed");    
        } else {
            header.removeClass("fixed")
        }

    })

});