$(document).on('click', '.hamburger', function(e) {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('is-visible');
});

$(window).on('scroll', function() {
    setTimeout(function() {
      let getTop = $(window).scrollTop();
      if (getTop > 46) {
        $('.header-nav').addClass('is-scrolled');
        $('.header-dev__mobile').show();
      } else {
        $('.header-nav').removeClass('is-scrolled');
        $('.header-dev__mobile').hide();
      }
    }, 0);
})
.trigger('scroll');