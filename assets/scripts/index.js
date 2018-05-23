var options = {
  strings: ["passion.", "knowledge.", "technology."],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 300,
  loop: true,
}

var typed = new Typed(".baner__headline__typed", options);

particlesJS.load('baner', './assets/scripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('opinie', './assets/scripts/particles2.json', function() {
  console.log('callback - particles.js config loaded');
});

$(document).scroll(function(){
  var top = $(document).scrollTop() - $('.baner').position().top;
  $('.baner .particles-js-canvas-el').css({"top": top +80 - (top/3)});
});

$(document).scroll(function(){
  var top = $(document).scrollTop() - $('.opinie').position().top;
  $('.opinie .particles-js-canvas-el').css({"top": top - (top/3)});
});

opinionCarousel();

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
