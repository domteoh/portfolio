$(document).ready(function(){

$('.nav-icon').click(function(){
  $('#nav-menu-mobile').slideToggle(250);
});

});


// 360 Image Viewer

  window.addEventListener('load', onVrViewLoad);

    function onVrViewLoad() {
      // Selector '#vrview' finds element with id 'vrview'.
      var vrView = new VRView.Player('#vrview1', {
        image: 'https://raw.githubusercontent.com/domteoh/portfolio/master/img/pinhole/360_1.jpeg',
        height: '100%'
      });

      var vrView = new VRView.Player('#vrview2', {
        image: 'https://raw.githubusercontent.com/domteoh/domteoh/master/img/360_3.jpeg',
        height: '100%'
      });
    }

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
