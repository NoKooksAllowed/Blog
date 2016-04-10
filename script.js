$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').load('contact.html', function(){
      $('.test').fadein('slow');
    });
  });
});
