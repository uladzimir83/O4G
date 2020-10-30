$(document).on('click', '.hamburger', function(e) {

  if($('.menu').hasClass('is-visible')) {
    $('.menu').removeClass('is-visible')
    $(this).removeClass('is-active');
    $('.section-nav.is-scroll-tablet') ? $('.section-nav').removeClass('is-scroll-tablet') : null;
  } else {
    $('.menu').addClass('is-visible');
    $(this).addClass('is-active');
    $('.section-nav').hasClass('is-scroll') ? $('.section-nav').addClass('is-scroll-tablet') : null;
  }

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
    let pageNav = document.getElementById('section-nav'),
        pageNavPos = pageNav.querySelector('.container').getBoundingClientRect().top + pageYOffset,
        menu = document.getElementById('header-nav');

    $(window).on('scroll', function() {
      setTimeout(function() {

        let menuBottomPos = menu.getBoundingClientRect().bottom + pageYOffset + 50,
            pageNavTop = pageNav.getBoundingClientRect().top + pageYOffset;

        if(menuBottomPos >= pageNavTop && $('.menu').hasClass('is-visible')) {
          pageNav.classList.add('is-scroll', 'is-scroll-tablet');
        } else if (menuBottomPos >= pageNavTop) {
          pageNav.classList.add('is-scroll');
        }

        if (menuBottomPos <= pageNavPos) {
          pageNav.classList.remove('is-scroll', 'is-scroll-tablet');
        }

      }, 0);
    }).trigger('scroll');
}

if($('main').hasClass('nav-page')) {
  stickyNav();
}



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


function toggleList() {
  $(document).on('click', '.faq__item', function(e) {
    let $this = $(this),
        items = $('.faq__item'),
        itemsBody = $('.faq__body'),
        itemBody = $this.find('.faq__body');

        if ($this.hasClass('is-open')) {
          $this.removeClass('is-open');
          itemBody.slideUp(400);
          return;
        }

        itemsBody.slideUp();

        items.removeClass('is-open');

        $this.addClass('is-open');
        itemBody.slideDown(400);
  });
};

toggleList();

function initO4GPopup() {
      let popupImage = document.querySelectorAll('.sync-media__icon img');
      console.log(popupImage.length);

      for(let img of popupImage) {
        img.addEventListener('click', function(e) {
          let popupWrap = document.createElement('div'),
              popupInner = document.createElement('div');
          popupWrap.className = 'o4g-popup-wrap';
          popupInner.className = 'o4g-popup-inner';
          document.body.append(popupWrap);
          popupWrap.append(popupInner);
          setTimeout(() => {
              popupWrap.classList.add('active');
          }, 100);
          
          let popupImg = document.createElement('img');
          popupImg.className = 'o4g-popup-img';
          popupImg.setAttribute('src', this.getAttribute('src'));
          popupInner.append(popupImg);
          
          
          setTimeout(() => {
              popupInner.classList.add('active');
          }, 100);
        });
      }
      
      $(document).mouseup(function (e) { 
        var popup = $('.o4g-popup-img');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
          let popupWrap = document.querySelector('.o4g-popup-wrap');
          popupWrap ? popupWrap.remove() : null;
          document.body.classList.remove('js-stop-scrolling');
        }
      });
  }

initO4GPopup();