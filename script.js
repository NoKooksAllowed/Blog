$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').fadeIn('2000', function() {
      $('.test').load('contact.html');
    });
  });
});
