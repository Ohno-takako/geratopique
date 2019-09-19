$('.slide').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    appendDots: $('.slide'),
    arrows:false
});

$('.slide-sp').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    appendDots: $('.slide-sp'),
    arrows: false

});

$('.newitem').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    accessibility: true,
    slidesToScroll:4,
    

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows:false,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots:true
            }
        }
    ]
});


$('.rank-sp').slick({
    slidesToShow: 1,
    accessibility: true,
    slidesToScroll: 1,

});
