$(document).ready(function () {
    /* scroll */
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    /* set price */
    $('[name="country"]').on('change', function () {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    $('.slider-cont').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        dots: false,
        arrows: true,
        fade: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });
    $('.after-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        dots: false,
        arrows: false,
        fade: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.rev-block-v1 .rev-cont').slick({
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        fade: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });
    $('.rev-block-v3 .rev-cont').slick({
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        fade: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });
    $('.rev-block-v4 .rev-cont').slick({
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        fade: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });
});

/* timer */
window.onload = function(){
    initializeClock('timer', getDayEnd());
    initializeClock('timer2', getDayEnd());
    lastpack(5, 60, 'lastpack');
};