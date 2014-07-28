/*
 * Este es el plugin de pricing para neolo.com
 *
 */

$(document).ready(function() {
    var $slider = $('#slider-horizontal'),
        $slider_amount = $('#amount'),
        $price = $('#price'),
        $features = $('#feature_vpn,#feature_backup'),
        $feature_vpn = $('#feature_vpn'),
        $feature_backup = $('#feature_backup'),
        $more = $('.trianguloder'),
        $minus = $('.trianguloizq'),
        price_value = parseInt($('#price').text()),
        licencias_value = 0,
        ips_value = 0,
        mb_value = 1;

    //Slider Horizontal
    $("#slider-horizontal").slider({
        orientation: "horizontal",
        range: "min",
        min: 1,
        max: 50,
        value: 1,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
            checkPrice(this);
        }
    });
    $("#amount").val($("#slider-horizontal").slider("value"));

    //Toggle class de los features
    $features.click(function() {
        $(this).toggleClass('housingActive');
        checkPrice(this);
    });

    $more.click(function() {
        checkPrice(this);

    })

    $minus.click(function() {
        checkPrice(this);
    })

    // Chequear el precio
    function checkPrice(feature) {

        if ($(feature).attr('id') === "feature_backup" && $(feature).hasClass("housingActive")) {
            price_value += 1080;
        } else if ($(feature).attr('id') === "feature_backup") {
            price_value -= 1080;
        }

        if ($(feature).attr('id') === "feature_vpn" && $(feature).hasClass("housingActive")) {
            price_value += 420;
        } else if ($(feature).attr('id') === "feature_vpn") {
            price_value -= 420;
        }


        if ($(feature).hasClass("trianguloder") && $(feature).parent().attr('id') === "feature_licencias") {
            console.log("Agrego una licencia");
            if (licencias_value >= 0) {
                licencias_value++;
                price_value += 240;
                $(".licencias").text(licencias_value);
                $(".licencias").parent().addClass("housingActive");
            }
        } else if ($(feature).hasClass("trianguloizq") && $(feature).parent().attr('id') === "feature_licencias") {
            console.log("Resto una licencia");
            if (licencias_value > 0) {
                licencias_value--;
                price_value -= 240;
                $(".licencias").text(licencias_value);
                if (licencias_value === 0) {
                    $(".licencias").parent().removeClass("housingActive");
                }
            }
        }

        if ($(feature).hasClass("trianguloder") && $(feature).parent().attr('id') === "feature_ip") {
            console.log("Agrego una ip");
            if (ips_value >= 0) {
                ips_value++;
                price_value += 24;
                $(".adicionalip").text(ips_value);
                $(".adicionalip").parent().addClass("housingActive");
            }
        } else if ($(feature).hasClass("trianguloizq") && $(feature).parent().attr('id') === "feature_ip") {
            console.log("Resto una ip");
            if (ips_value > 0) {
                ips_value--;
                price_value -= 24;
                $(".adicionalip").text(ips_value);
                if (ips_value === 0) {
                    $(".adicionalip").parent().removeClass("housingActive");
                }

            }
        }

        mb_value = $("#amount").val();
        if (mb_value > 1 && mb_value < 6) {
            $price.text(price_value + ((mb_value - 1) * 550));
        } else if (mb_value >= 6 && mb_value < 11) {
            $price.text(price_value + ((mb_value - 1) * 500));
        } else if (mb_value >= 11) {
            $price.text(price_value + ((mb_value - 1) * 450));
        } else {
            $price.text(price_value);
        }
    }


    console.log(price_value);
});