
$(document).ready(function() {
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
        appendDots: ".hero_carousel",
        // draggable: true,
        // adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    })    
    $(".hero_gadget_carousel").slick({
        autoplay: true,
        arrows: false,
        // fade: true,
        // easing: "swing",
        // rtl: true,
        // dots: true,
        // appendDots: ".hero_carousel",
        // centerMode: true,
        // draggable: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
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

//     const observeChanges = (targetId) => {

//         // Select the node that will be observed for mutations
//         const targetNode = document.getElementById(targetId);
        
//         // Options for the observer (which mutations to observe)
//         const config = { attributes: true, childList: true, subtree: true };
        
//         // Callback function to execute when mutations are observed
//         const callback = (mutationList, observer) => {
//         for (const mutation of mutationList) {
//             if (mutation.type === "attributes" && mutation.attributeName === "class") {
//                 if (mutation.target.classList.includes("slick-active")) {
//                     $(".slick-active input").prop("checked", true)
//                 }
//                 // observer.disconnect()
//             }
//         }
//         };
        
//         // Create an observer instance linked to the callback function
//         const observer = new MutationObserver(callback);
        
//         // Start observing the target node for configured mutations
//         observer.observe(targetNode, config);
        
//         // Later, you can stop observing
//         observer.disconnect();
//     }

//     observeChanges("hero_intro")
})

