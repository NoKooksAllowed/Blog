$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').load('contact.html', {}, function() {
      $(this).fadeIn('slow');
    });
  });
});
