$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            }
        }
    });

    getExperience();
});

function getExperience(){
    var currentYear = (new Date).getFullYear();
    var yearFundation = $('.quantity').data("fundation");

    $(".quantity").text(currentYear - yearFundation);
    $(".current-year").text(currentYear + ".");
}