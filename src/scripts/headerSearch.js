(function () {
  let searchSubmitButton = $('.header__search-submit');
  let serchInput = $('.header__search-input');
  let searchForm = $('.header__search-form');
  
  searchSubmitButton.on('click', e => {
    if(!serchInput.hasClass('active') || serchInput.val().length <= 0) {
      e.preventDefault();
      serchInput.addClass('active');
      serchInput.focus();
    }   
  });
  $(document).on('click', e => {
    if(!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
      serchInput.removeClass('active');
    }
  });
})();