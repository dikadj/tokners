
$(document).ready(function() {

    $(document).on("scroll", () => { 
        if ($("#largerNavbar").offset().top > 150) { // show after scroll to 150px from top
            $("#largerNavbar").css({
                background: "top right / 90% url('../img/purplish-gradient-lg.png') no-repeat, #0F1320",
                opacity: "0.95",
                backdropFilter: "blur(10px)",
            })
        } else {
            $("#largerNavbar").css({
                background: "",
                opacity: "1",
            })
        }
    })

    // Open Side Menu
    $(".open_hamburger_menu").on("click", () => {
        $(".navbar_side_menu").toggleClass("d-none")
        $(".navbar_side_menu").animate({ opacity: "1", zIndex: "999999" }, 400)
    })
    // Close Side Menu
    $(".close_hamburger_menu").on("click", () => {
        $(".navbar_side_menu").animate({ opacity: "0", zIndex: "-999999" }, 400)
        setTimeout( $(".navbar_side_menu").toggleClass("d-none"), 400)
    })

    // Enabling Slick JS
    $(".hero_carousel").slick({
        autoplay: true,
        arrows: false,
        fade: true,
        // easing: "swing",
        // rtl: true,
        dots: true,
        // appendDots: ".hero_carousel",
        // draggable: true,
        // adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        // infinite: false,
    })    
    $(".hero_gadget_carousel").slick({
        autoplay: true,
        arrows: false,
        // fade: true,
        // easing: "swing",
        // rtl: true,
        dots: true,
        appendDots: ".hero_carousel",
        // centerMode: true,
        // draggable: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        // infinite: false,
        autoplay: false
    })    
        
//     // Carousel Dots
    
//     if ($(".slick-dots li").hasClass("slick-active")) {
//         $(".slick-dots li").html("<input type='radio' name='hero-carousel-dots' checked>")
//     } else {
//         $(".slick-dots li").html("<input type='radio' name='hero-carousel-dots'>")
//     }
    $(".slick-dots").addClass("my-4")
    
//     // $("#hero_intro").change(function(e) {
//     //     console.log("changed")
//     // })
    

    $(".slick-dots li").addClass("list-unstyled d-flex align-items-center")
    $(".slick-dots li:nth-child(2)").addClass("px-2")
    $(".slick-dots li").parent().addClass("d-flex px-0")
    $(".slick-dots li").html(`
        <span class="dot_hollow pt-1">&#9675;</span> <span class="dot_filled">&#9679;</span>
    `)

    
//     // Helper function to detect change in an element

    const config = { attributes: true, childList: false, subtree: false };
    const observer = new MutationObserver( (mutationList, observer) => { 
        // callback here
        if (mutationList[0].target.classList.contains("slick-active")) {
            $(".hero_carousel .slick-dots li:first-child").trigger("click") //.click()
        } else {
            $(".hero_carousel .slick-dots li:nth-child(2)").trigger("click") //.click()
        }
    } );
    
    observer.observe(
        $(".hero_carousel .slick-dots li")[0], 
        { attributes: true, childList: false, subtree: false }
    );
        
    // observer.disconnect()

})

