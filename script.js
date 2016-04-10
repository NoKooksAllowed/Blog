$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').hide(1000);
    $('.test').show(2000).load('contact.html');
    $('.test').dequeue();
  });
});
