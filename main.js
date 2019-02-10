$(document).ready(() => {


  $(window).scroll(function () {
    console.log($(window).scrollTop())
      if ($(window).scrollTop() >= 0.5) {
        $('#nav').addClass("sticky");
      } else {
        $('#nav').removeClass("sticky");
      }
    });

    jQuery(function($){
    	$(document).keydown(function(e){
    		switch(e.keyCode){
    			case 37: {//left arrow
    				$('.mySlides').trigger('plusDivs(-1)');
    				break;
    			}
    			case 39: {//right arrow
    				$('mySlides').trigger('plusDivs(1)');
    				break;
    			}
    		}
    		if(Math.abs(e.keyCode - 38) === 1){
    			e.preventDefault();
    		}
    	});
    });

});
