$(document).on('click', '.hamburger', function(e) {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('is-visible');
});

$(window).on('scroll', function() {
    setTimeout(function() {
      let getTop = $(window).scrollTop();
      if (getTop > 46) {
        $('.header-nav').addClass('is-scrolled');
        $('.header-nav__fill').show();
      } else {
        $('.header-nav').removeClass('is-scrolled');
        $('.header-nav__fill').hide();
      }
    }, 0);
})
.trigger('scroll');

function stickyNav() {
  let nav = document.getElementById('section-nav'),
      navPos = nav.querySelector('.container').getBoundingClientRect().top + pageYOffset,
      menu = document.getElementById('header-nav');

  $(window).on('scroll', function() {
    setTimeout(function() {

      let menuBottom = menu.getBoundingClientRect().bottom + pageYOffset + 50,
          navTop = nav.getBoundingClientRect().top + pageYOffset;

      if(menuBottom >= navTop) {
        nav.classList.add('is-scroll');
      }

      if (menuBottom <= navPos) {
        nav.classList.remove('is-scroll')
      }

    }, 0);
  })
  .trigger('scroll');

}

stickyNav();

$(document).on('click', '.page-nav__link' ,function (e) {
  e.preventDefault();
  let idSection = $(this).attr('href'),
      findTop = $(idSection).find('.js-scroll-target').offset().top;
  $('body,html').animate({
      scrollTop: findTop - 70
  }, 600);
  return false
});

$(window).scroll(function() {
  var $heading = $('.js-scroll-active');
  $heading.each(function(i,el){
      var top  = $(el).offset().top;
      var bottom = top +$(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if( scroll + 100 > top && scroll < bottom){
          $('.page-nav__link.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');
      }
  });
});
