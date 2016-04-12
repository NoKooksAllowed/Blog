$(document).ready(function(){
  $('.test').load('home.html');
  
  $('#homeLink').click(function(){
    $('.test').load('home.html');
  });
  
  $('#contactLink').click(function(){
    $('.test').load('contact.html');
  });
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(130,130,255)')
  }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
});
