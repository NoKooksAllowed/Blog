$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').fadeIn('slow', function() {
      $('.test').load('contact.html');
    });
  });
});
