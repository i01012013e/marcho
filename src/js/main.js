$(function () {
    // -------------------------------------------
    // -------------------------------------------
    // -------------------------------------------
    // -------------------------------------------
    $(".footer-top__title").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    // -------------------------------------------
    $(".menu__burger-btn").on("click", function () {
        $(".menu__list").toggleClass("menu__list--active");
    });
    // -------------------------------------------
    $(".product-tabs__btn").on("click", function (e) {
        e.preventDefault();
        $(".product-tabs__btn").removeClass("product-tabs__btn--active");
        $(this).addClass("product-tabs__btn--active");

        $(".product-tabs__items-tabs-descript").removeClass("product-tabs__items-tabs-descript--active");
        $($(this).attr("href")).addClass("product-tabs__items-tabs-descript--active");
    });
    // -------------------------------------------
    $(".product-slide__thumb").slick({
        asNavFor: ".product-slide__big",
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });
    $(".product-slide__big").slick({
        asNavFor: ".product-slide__thumb",
        arrows: false,
        fade: true,
    });
    // -------------------------------------------
    $(".filter-price__input").ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $(".filter-price__from").text(data.from);
            $(".filter-price__to").text(data.to);
        },
        onChange: function (data) {
            $(".filter-price__from").text(data.from);
            $(".filter-price__to").text(data.to);
        },
    });
    // -------------------------------------------
    $(".select-style, .product__item-input").styler({});
    // -------------------------------------------
    $(".shop-content__filter-btn").on("click", function () {
        $(".shop-content__filter-btn").removeClass("shop-content__filter-btn--active");
        $(this).addClass("shop-content__filter-btn--active");
    });
    $(".button-list").on("click", function () {
        $(".product-items__card-item, .shop-content__inner").addClass("product-item--list");
    });
    $(".button-grid").on("click", function () {
        $(".product-items__card-item, .shop-content__inner").removeClass("product-item--list");
    });

    // -------------------------------------------

    $(".top-slider__inner").slick({
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySped: 1000,
    });

    $(".blog-page__slider").slick({
        prevArrow:
            '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg></button>',
        nextArrow:
            '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg></button>',
        infinite: false,
    });
    // -------------------------------------------

    $(".price-box__card-star, .product-tabs__star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        readOnly: true,
        multiColor: {
            startColor: "#fe3e57", //RED
            endColor: "#ffcc66", //YELLOW
        },
        starSvg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
    });
    // -------------------------------------------

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    function initializeClock(querySelector, endtime) {
        var clock = document.querySelector(querySelector);
        var daysSpan = clock.querySelector(".promo__days");
        var hoursSpan = clock.querySelector(".promo__hours");
        var minutesSpan = clock.querySelector(".promo__minutes");
        var secondsSpan = clock.querySelector(".promo__seconds");

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
            minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
            secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = $(".promo__clock-box").attr("data-time");
    initializeClock(".promo__clock-box", deadline);
});

// ------------------------------------------------------------
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10,
    });
}

window.initMap = initMap;
// ----------------------------------------------------------------
