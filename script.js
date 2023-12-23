document.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// bootstrap 4 breakpoints
const breakpoint = {
  // small screen / phone
  sm: 576,
  // medium screen / tablet
  md: 768,
  // large screen / desktop
  lg: 992,
  // extra large screen / wide desktop
  xl: 1200,
};

// bootstrap 4 responsive multi column slick carousel
$("#slick").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: true,
  pauseOnHover: false,
  infinite: true,
  dots: false,
  arrows: true,
  speed: 1000,

  mobileFirst: true,

  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});
