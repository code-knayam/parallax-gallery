//manages the photo gallery page
//creates the 3-D effect

$(document).ready( function() {
  var $window = $(window);
  var velocity = 1;

  function update(){
    var pos = $window.scrollTop();
    var height = $window.height();
    var width = $window.width();
    var element = $('.row-2');
    var parentOffset = $('.banner').offset();

    // x- left position of cursor and y- top
    var x = event.clientX - parentOffset.left -width/2 ;
    var y = event.clientY - parentOffset.top - height/2;
    x = -x/2;
    y = -y/2;

    $('.row-1').each( function() {
      var top = parseInt($(this).css('top'));
      var left = parseInt($(this).css('left'));
      change_pos(this, -1500+top+y, left+x, 0.15*velocity);
    });

    $('.row-2').each( function() {
      var top = parseInt($(this).css('top'));
      var left = parseInt($(this).css('left'));
      change_pos(this, -1900+top+y, left+x, 0.25*velocity);
    });
    $('.row-3').each( function() {
      var top = parseInt($(this).css('top'));
      var left = parseInt($(this).css('left'));
      change_pos(this, -2300+top+y, left+x, 0.35*velocity);
    });

    //OPENING THE IMAGE IN A NEW TAB WHEN CLICKED
    $('.banner img').click( function() {
      var src = $(this).attr('src');
      window.open(src, '_blank');
    });
  };


  //starting effect when mouse enters in the DIV element

  $('#b-5').mouseenter( function() {
    $('#b-5 .row-1 img').fadeIn('.2s');
    $('#b-5 .row-2 img').fadeIn('.8s');
    $('#b-5 .row-3 img').fadeIn('.8s');
    $window.bind('mousemove', update);
  });

  //stopping effect when mouse leaves the DIV
  $('#b-5').mouseleave( function() {
    $window.unbind();
    $('#b-5 .row-2 img').fadeOut('.5s');
    $('#b-5 .row-1 img').fadeOut('1s');
    $('#b-5 .row-3 img').fadeOut('.8s');
  });


  //function to change the top and left
  function change_pos(element, top, left, velocity){
    $(element).css('top', Math.round( top * velocity ));
    $(element).css('left', Math.round( left * velocity ));
  }

});
