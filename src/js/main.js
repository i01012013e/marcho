$(function () {
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
    $(".select-style").styler({});
    // -------------------------------------------
    $(".shop-content__filter-btn").on("click", function () {
        $(".shop-content__filter-btn").removeClass('shop-content__filter-btn--active')
        $(this).addClass('shop-content__filter-btn--active')
    });
    $(".button-list").on("click", function () {
        $(".product-items__card-item, .shop-content__inner").addClass('product-item--list')
    });
    $(".button-grid").on("click", function () {
        $(".product-items__card-item, .shop-content__inner").removeClass('product-item--list')
    });

    // -------------------------------------------

    $(".top-slider__inner").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySped: 1000,
    });
    // -------------------------------------------

    $(".price-box__card-star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        readOnly: true,
        multiColor: {
            startColor: "#fe3e57", //RED
            endColor: "#ffcc66", //YELLOW
        },
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
