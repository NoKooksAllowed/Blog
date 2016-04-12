$(document).ready(function(){
  $('.test').load('home.html');
  
  $(function() {
    $( "#accordion" ).accordion();
  });
  
  $('#homeLink').click(function(){
    $('.test').hide(100);
    $('.test').show(100).load('home.html');
  });
  
  $('#contactLink').click(function(){
    $('.test').hide(300);
    $('.test').show(300).load('contact.html');
  });
  
  $('#venuesLink').click(function(){
    $('.test').hide(300);
    $('.test').show(300).load('venues.html');
  });
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(130,130,255)')
  }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
});
