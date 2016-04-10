$(document).ready(function(){
  $('.contactLink').click(function() {
    $('.test').load('contact.html', function(){
      $('.test').fadeIn('slow');
      console.log('This is working')
    });
  });
});
