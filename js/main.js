
// Open Side Menu
$(".open_hamburger_menu").on("click", () => {
    $(".navbar_side_menu").animate({ opacity: "1", zIndex: "999999" }, 400)
})
// Close Side Menu
$(".close_hamburger_menu").on("click", () => {
    $(".navbar_side_menu").animate({ opacity: "0", zIndex: "-999999" }, 400)
})