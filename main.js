$(function() {
    let header = $("#header"),
        nav = $("#nav"),
        navH = nav.innerHeight(),
        features = $("#features"),
        featuresH = features.innerHeight(),
        works = $("#works"),
        burger = $("#burger"),
        scrollPos = $(window).scrollTop();

        checkScroll(scrollPos, navH, featuresH);
    
    // CheckScroll / HeaderFixed

    $(window).on("scroll resize", function() {
        navH = nav.innerHeight();
        featuresH = features.innerHeight(),
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, navH, featuresH);
    });



    function checkScroll(scrollPos, navH, featuresH) {
        if(scrollPos > navH) {
            header.addClass("fixed");  
        } else {
            header.removeClass("fixed")
        }

        // if(scrollPos > featuresH) {
        //     works.addClass("show")
        // } else {
        //     works.removeClass("show")
        // }
    }

    // burgerMenu
        burger.on("click ", function(event) {
            event.preventDefault();
            nav.toggleClass("active");
            burger.toggleClass("active")
        });
    
        nav.on("click", function() {
            nav.removeClass("active");
            burger.removeClass("active");
        }); 

    // Reviews https://kenwheeler.github.io/slick/

    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});