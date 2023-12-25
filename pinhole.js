$(document).ready(function(){

$('.nav-icon').click(function(){
  $('#nav-menu-mobile').slideToggle(250);
});

});


// 360 Image Viewer

    $('.image1').on('click', () => {
      $('.VRcontainer1').fadeIn();
      $('.VRcontainer1').siblings().hide();
    });

    $('.image2').on('click', () => {
      $('.VRcontainer2').fadeIn();
      $('.VRcontainer2').siblings().hide();
    });

    $('.image3').on('click', () => {
      $('.VRcontainer3').fadeIn();
      $('.VRcontainer3').siblings().hide();
    });
