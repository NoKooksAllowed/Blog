$(document).ready(function(){
  
  $(".test").load("home.html .test > *");
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(150,150,255)')
      }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
  
  $('#contactLink').click(function(e) {
  });
  
  $('#homeLink').click(function(e) {
  });
});
