$(document).ready(function(){
  $('.contactLink').click(function(e) {
    $('.test').hide(1000);
    $('.test').show(2000).load('contact.html');
    e.stopImmediatePropagation();
    e.preventDefault();
  });
});
