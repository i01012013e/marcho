$(function () {
    $(".top-slider__inner").slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        // autoplaySped: 1000,
    });

    $(".price-box__card-star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        readOnly: true,

        multiColor: {
          "startColor": "#fe3e57" , //RED
          "endColor"  : "#ffcc66" ,//YELLOW
        }
    });
});
