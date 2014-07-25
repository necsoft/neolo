/* ==========================================================================
   Scroll
   ========================================================================== */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/* ==========================================================================
   DNS
   ========================================================================== */

$(document).ready(function() {
    $("input[id$='domFin1']").click(function() {
        $(".ar").show();
        $(".com").hide();
    });

    $("input[id$='domFin2']").click(function() {
        $(".com").show();

    });

    $("input[id$='domFin3']").click(function() {
        $(".br").show();
    });

    $("input[id$='domFin4']").click(function() {
        $(".cl").show();
    });
});