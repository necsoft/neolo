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