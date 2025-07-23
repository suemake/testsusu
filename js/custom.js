$(function () {

    const category_first_slide = new Swiper('.category_first_slide', {
        loop: true,
        slidesPerView: 1.5,
        slidesToScroll: 1,
        spaceBetween: 80,
        speed: 1000,

    });

    const description_slide = new Swiper('.description_slide', {
        loop: true,
        slidesPerView: 1,
        slidesToScroll: 1,
        spaceBetween: 80,
        speed: 1000,

    });

    category_first_slide.controller.control = description_slide;
    description_slide.controller.control = category_first_slide;


});
