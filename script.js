$(document).ready(function(){
  $('.test').load('home.html');
  
  $('#homeLink').click(function(){
    $('.test').load('home.html');
  });
  
  $('#contactLink').click(function(){
    $('.test').load('contact.html');
  });
});
