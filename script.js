$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').fadeOut('slow').load('contact.html').fadeIn('slow');
  });
});
