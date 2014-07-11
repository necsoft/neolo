// var collapsed = true;
// var collapsed_mobile = true;



$(document).ready(function() {
    $('.country').hover(function() {
        $(".othersCountries").slideDown("fast");
    }, function() {
        $(".othersCountries").slideUp("fast");
    });


});

$(function() {
    $("#slider-horizontal").slider({
        orientation: "horizontal",
        range: "min",
        min: 1,
        max: 50,
        value: 1,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#slider-horizontal").slider("value"));
});
// $(window).resize(function() {
//     ancho_window = $(window).width();
//     alto_window = $(window).height();
//     checkResponsive();

//     if (collapsed == false) {
//         collapseHeader();
//     }
//     if (collapsed_mobile == false) {
//         collapseHeaderMobile();
//     }
// });




// collapseHeader();
// --------------------------------------------------
// Es la funcion para colapsar el header



// var collapseHeader = function() {
//     $("header nav").slideToggle(500);
//     collapsed = !collapsed;
// }

// var collapseHeaderMobile = function() {
//     $("#menuMobile").slideToggle(500);
//     collapsed_mobile = !collapsed_mobile;
// }