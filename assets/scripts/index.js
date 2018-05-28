const Typed = require('./../../node_modules/typed.js');
const particlesJS = require('./../../node_modules/particles.js');
const slick = require('./../../node_modules/slick-carousel');
const $ = require('./../../node_modules/jquery');

var options = {
  strings: ["startup.", "aplikację.", "stronę www.", "sklep internetowy."],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 300,
  loop: true,
}

var typed = new Typed(".baner__headline__typed", options);

console.log(particlesJS);

window.particlesJS.load('home', './assets/scripts/particles.json', function() {
  console.log($('.baner .particles-js-canvas-el'));
  $('.baner .particles-js-canvas-el').css({"top": 115});
});

window.particlesJS.load('realizacje', './assets/scripts/particles2.json', function() {
  console.log('callback - particles.js config loaded');
});

$(document).scroll(function(){
  var top = $(document).scrollTop() - $('.baner').position().top;
  $('.baner .particles-js-canvas-el').css({"top": top +115 - (top/3)});
});

$(document).scroll(function(){
  var top = $(document).scrollTop() - $('.opinie').position().top;
  $('.opinie .particles-js-canvas-el').css({"top": top - (top/3)});
});

opinionCarousel();
createSticky($("header"));

function createSticky(sticky) {
	
	if (typeof sticky !== "undefined") {

		var	pos = sticky.offset().top,
            win = $(window);
			
		win.on("scroll", function() {
            win.scrollTop() >= pos+45 ? sticky.addClass("fixed").removeClass("unfixed") : sticky.removeClass("fixed").addClass("unfixed");  
		});			
	}
}

function opinionCarousel(){
  var $carousel = $(".jsCarousel"),
      $carouselItems = $(".jsCarouselItem"),
      $arrowLeft = $(".jsArrowLeft"),
      $arrowRight = $(".jsArrowRight");


      $arrowLeft.on("click", function(e){
          e.preventDefault();
          var level = /level/;
          $carouselItems.each(function(){
              var $this = $(this);
              changeView(1, $this);
          });

      });

      $arrowRight.on("click", function(e){
          e.preventDefault();
          
          $carouselItems.each(function(){
              var $this = $(this);
              changeView(-1, $this);
          });

      });

      function changeView(order, $this) {
          var level = /level/;
          $this.attr("class").split(" ").forEach(function(item){
              if(level.exec(item)){
                  var itemNumber = parseInt(item.replace(level, "")),
                      itemNumberNew = parseInt(item.replace(level, "")) + order;

                      if(itemNumberNew >= 3) {
                          itemNumberNew = -1;
                      }
                      if(itemNumberNew <= -3) {
                          itemNumberNew = 1;
                      }
                   
                  $this.removeClass(item).addClass("level"+itemNumberNew);
              }   
          })
      }

}



  $('.logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });


  $(".menu__item a").click(function(e) {
    e.preventDefault();
    let id = $(this).attr("href");
    console.log(id)
    $('html, body').animate({
        scrollTop: $(id).offset().top - 80
    }, 1200);
});