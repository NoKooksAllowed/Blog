

$(document).ready(function(){
  
  $.get('home.html', function(data) {
    $('.test').html(data);
  });

  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(150,150,255)')
      }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
  
 $('#contactLink').click(function(e) {
    $.get('contact.html', function(data) {
      $('.test').html(data);
    });
  });
  
  $('#homeLink').click(function(e) {
    $.get('home.html', function(data) {
      $('.test').html(data);
    });
  });
});
