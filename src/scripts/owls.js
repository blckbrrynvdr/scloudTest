(function(){
  $(document).ready(function () {
    $('.comments-right__slider').owlCarousel({
      items: 2,
      margin: 7,
      loop: true,
      nav: true
    });
    $('.comments-left-slider').owlCarousel({
      items:1,
      loop: false,
      rewind: true,
      autoplay: true
    });
    $('.comments-left-length').text($('.comments-left-item').length);
    $('.comments-left-slider').on('changed.owl.carousel', function(e) {
      $('.comments-left-current').text(e.item.index + 1);
      $('.comments-left-length').text(e.item.count);
    });
  });
})();