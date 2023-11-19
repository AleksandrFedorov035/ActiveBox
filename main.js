$(function() {
    let header = $("#header"),
        headerH,
<<<<<<< HEAD
        nav = $("#nav"),
        navH,
=======
>>>>>>> 4a519cf209c40d62b4fae1427d46dfa957837778
        intro = $("#intro"),
        introH,
        scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load", function() {
        headerH = header.innerHeight();
        navH = nav.innerHeight();
        introH = intro.innerHeight();
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();


<<<<<<< HEAD
        if(scrollPos > navH) {
=======
        if(scrollPos > headerH) {
>>>>>>> 4a519cf209c40d62b4fae1427d46dfa957837778
            header.addClass("fixed");    
        } else {
            header.removeClass("fixed")
        }

    })

});