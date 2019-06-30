(function () {
  let submenuButton = $('.header__menu-link--submenu');
  let submenu = $('.header__submenu');

  submenuButton.on('click', e => {
    e.preventDefault();
    if(submenuButton.hasClass('active')) {
      submenuButton.removeClass('active');
      submenu.removeClass('active');
    } else {
      submenuButton.addClass('active');
      submenu.addClass('active');
    }
  });
})();