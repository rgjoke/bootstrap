$('#blogCarousel').carousel({
    interval: 5000
});

var menu = $("#navbar");
var logo = $('.navbar-brand');
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if ( top > 20 ) {
    menu.css({background: 'rgba(0, 0, 0, 0.7)'});
    logo.css({opacity: 1});
  } else if (top < 20) {
      menu.css({background: 'none'});
  }
});