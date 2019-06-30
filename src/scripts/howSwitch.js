(function () {
  $(document).ready(function () {
    let howButtons = document.querySelectorAll('.how__item');
 
    for (let i = 0; i < howButtons.length; i++) {
      const howButton = howButtons[i];
      howButton.setAttribute('data-index', i);
    }
    
    $('.how__item').on('click', function() {
      let contentIndex = $(this).attr('data-index');
      let activeContent = document.querySelector('.how__desc-item.active');
      
      if(activeContent) {
        activeContent.classList.remove('active');
      }

      $('.how__item').removeClass('active');

      $(this).addClass('active');      
      $('.how__desc-item')[contentIndex].classList.add('active');      
    })
  });
})();