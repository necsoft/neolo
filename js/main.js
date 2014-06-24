$(document).ready(function() {
    $('.country').hover(function() {
        $(".othersCountries").slideDown("fast");
    }, function() {
        $(".othersCountries").slideUp("fast");
    });


});