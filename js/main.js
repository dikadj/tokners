
$(document).ready(function() {
    const cb = () => {
        
        const showNavbarBackground = () => {
            if ($("#largerNavbar").offset().top > 150) { // show after scroll to 150px from top
                $("#largerNavbar").css({
                    background: "top right / 90% url('../img/purplish-gradient-lg.png') no-repeat, #0F1320",
                    opacity: "0.95",
                    backdropFilter: "blur(10px)",
                })
            } else {
                $("#largerNavbar").css({
                    background: "none",
                    opacity: "1",
                    backdropFilter: "none",
                })
            }
        }

        // call once for initial render
        showNavbarBackground()

        // call on scroll
        $(document).on("scroll", () => { 
            showNavbarBackground()
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
            autoplay: $(window).width() >= 992, // play on large viewport
            speed: 500,
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
            autoplay: false,
            speed: ($(window).width() >= 992) ? 500 : 1,
            arrows: false,
            fade: $(window).width() < 992,
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
        })
        if ($(window).width() < 992) {
            $("#presale_details #phases").slick({
                autoplay: false,
                // speed: 500,
                arrows: false,
                // fade: true,
                // easing: "swing",
                // rtl: true,
                dots: true,
                appendDots: "#presale_details #phases",
                // centerMode: true,
                // draggable: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                infinite: false,
            })
        }
        $("#color_year_carousel #color_year_bg_carousel, #color_year_carousel #color_year_text_carousel, #color_year_carousel #color_year_number_carousel").slick({
            autoplay: $(window).width() > 992,
            speed: 500,
            arrows: false,
            fade: true,
            // easing: "swing",
            // rtl: true,
            dots: true,
            // appendDots: "#color_year_carousel #color_year_bg_carousel",
            // centerMode: true,
            // draggable: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            infinite: true,
        })
        // $("#color_year_carousel #color_year_text_carousel").slick({
        //     autoplay: true,
        //     speed: 500,
        //     arrows: false,
        //     fade: true,
        //     // easing: "swing",
        //     // rtl: true,
        //     // dots: true,
        //     // appendDots: "#presale_details #phases",
        //     // centerMode: true,
        //     // draggable: true,
        //     pauseOnFocus: false,
        //     pauseOnHover: false,
        //     pauseOnDotsHover: false,
        //     infinite: false,
        // })

            
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
        $(".slick-dots li").addClass("mx-2")
        $(".slick-dots li").parent().addClass("d-flex px-0")
        $(".slick-dots li").html(`
            <span class="dot_hollow pt-1">&#9675;</span> <span class="dot_filled">&#9679;</span>
        `)

        $("#color_year_carousel .slick-dots").addClass("d-none")


        
        // Helper function to detect change in an element

        const heroSlickDotsLiObserver = new MutationObserver( (mutationList, observer) => { 
            // callback here
            if (mutationList[0].target.classList.contains("slick-active")) {
                $("#hero .hero_carousel .slick-dots li:first-child").trigger("click") //.click()
                $("#hero .hero_carousel .slick-dots li:nth-child(3)").trigger("click") //.click()
            } else {
                $("#hero .hero_carousel .slick-dots li:nth-child(2)").trigger("click") //.click()
                $("#hero .hero_carousel .slick-dots li:nth-child(4)").trigger("click") //.click()
            }
        } );
        
        heroSlickDotsLiObserver.observe(
            $(".hero_carousel .slick-dots li")[0], 
            { attributes: true, childList: false, subtree: false }
        );
            
        // heroSlickDotsLiObserver.disconnect()
        
        
        
        $("#color_year_carousel .slick-dots").each((i) => {
            const colorYearCarouselSlickDotsObserver = new MutationObserver( (mutationList, observer) => { 
                // callback here
                $(mutationList[0].target.children).each((ii) => {
                    // console.log(`${i}-${ii}`)
                    // console.log($($("#color_year_carousel .slick-dots")[i]).children()[ii])
                    $($($("#color_year_carousel .slick-dots")[i]).children()[ii]).on("click", () => {
                        // console.log(`ul-${i+1} li-${ii+1}`)
                        // $($($("#color_year_carousel .slick-dots li:first-child")[i]).children()[ii]).hasClass("slick-active")
                        $($("#color_year_carousel .slick-dots li")[ii]).trigger("click")
                        $($("#color_year_carousel .slick-dots li")[((ii+1)*2)-1]).trigger("click")
                        $($("#color_year_carousel .slick-dots li")[((ii+1)*3)-1]).trigger("click")
                        console.log($($("#color_year_carousel_indicator button")[ii]))
                    })
                    $($("#color_year_carousel_indicator button")[ii]).on("click", () => {
                        $($("#color_year_carousel .slick-dots li")[ii]).trigger("click")
                        $($("#color_year_carousel .slick-dots li")[((ii+1)*2)-1]).trigger("click")
                        $($("#color_year_carousel .slick-dots li")[((ii+1)*3)-1]).trigger("click")
                    })
                })
            } )
            
            colorYearCarouselSlickDotsObserver.observe(
                $("#color_year_carousel .slick-dots")[i],
                { attributes: true, childList: false, subtree: false }
            )
        })
        // console.log($("#color_year_carousel .slick-dots"))


        // shift #presale_details' content to natural position
        const presaleDetailsHeight = $("#presale_details").height()

        if ($(window).width() > 992) {
            $("#presale_details #presale_details_content").css({
                "transform": `translateY(${presaleDetailsHeight/5}px)`, // down 20%
                "top": `${presaleDetailsHeight/5}px`
            }) 
            $("#presale_details").css({
                "margin-bottom": `-${presaleDetailsHeight/5}px`,
            })
            $("#how_to_buy").css("margin-top", `${presaleDetailsHeight/5}px`)
            
        }

        $("#tokners_coming #read_more_coming").on("click", () => {
            $("#tokners_coming #tokners_coming_p").css("height", "auto")
            $("#tokners_coming #read_more_coming").toggleClass("d-none")
            $("#tokners_coming #read_less_coming").toggleClass("d-none")
            $("#tokners_coming .read_more_overlay").toggleClass("d-none")
        })

        $("#tokners_coming #read_less_coming").on("click", () => {
            $("#tokners_coming #tokners_coming_p").css("height", "400px")
            $("#tokners_coming #read_less_coming").toggleClass("d-none")
            $("#tokners_coming #read_more_coming").toggleClass("d-none")
            $("#tokners_coming .read_more_overlay").toggleClass("d-none")
        })

    }

    cb() // call once
    $(window).resize(function() {
        cb() // call on resize window
    })
})
