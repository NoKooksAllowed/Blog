$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').fadeIn(3000, function() {
      $('.test').load('contact.html');
    });
  });
});
