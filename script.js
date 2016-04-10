$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').hide(1000);
    $('.test').load('contact.html').show(2000);
  });
});
