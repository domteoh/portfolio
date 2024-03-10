$(document).ready(() => {


$(window).scroll(function () {
  console.log($(window).scrollTop())
    if ($(window).scrollTop() >= 130) {
      $('#nav').addClass("sticky");
      $('#banner').addClass("banner-sticky");
      $('.nav-logo').fadeIn();
      $('.icon-container').fadeIn();
    } else {
      $('#nav').removeClass("sticky");
      $('#banner').removeClass("banner-sticky");
      $('.nav-logo').fadeOut(2);
      $('.icon-container').fadeOut(2);
    }
  });


$('.nav-icon').on('click', () => {
  $('#nav-menu-mobile').slideToggle(250);
});

$('.nav-icon').on('click', () => {
  $('#nav-menu-mobile-video').slideToggle(250);
});

});
