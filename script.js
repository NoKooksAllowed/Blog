$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').load('contact.html', function(){
      $('.test').fadeIn(3000);
      console.log('change')
    });
  });
});
