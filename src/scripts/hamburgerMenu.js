(function () {
  $(document).ready(function () {

    function closeMenu() {
      $('.header').removeClass('active');
      $('body').removeClass('fixed');
      $('.header__submenu').removeClass('active');
      $('.header__menu-link--submenu').removeClass('active');
    }

    function openMenu() {
      $('.header').addClass('active');
      $('body').addClass('fixed');
    }

    $('.hamburger').on('click', function (e) {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        closeMenu();
      } else {
        $(this).addClass('active');
        openMenu();
      }
    });

  });
})();