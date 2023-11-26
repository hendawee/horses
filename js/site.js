AOS.init({
    duration:700,
    easing:'ease',
    once : true
});


var searchbox = tns({
    container: '.search-list',
    items: 3,
    slideBy: 'page',
    "mouseDrag": true,
    autoplay: false,
    "swipeAngle": false,
    "speed": 400,
    prevButton: '.prev',
    nextButton: '.next',
    navPosition: 'bottom',
    "gutter": 10,
    "responsive": {
        "480": {
          "items": 1,
          "controls": true,
          "edgePadding": 30
        },
        "768": {
            "items": 2,
            "controls": true,
            "edgePadding": 30
          },
        "900": {
          "items": 3
        }
      }
  });

// data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
// data-aos-duration="1000"
// data-aos-easing="ease-in-out"
// data-aos-mirror="true"
// data-aos-once="false"
// data-aos-anchor-placement="top-center"