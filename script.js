

$(document).ready(function(){
  
  $.post('home.html', function(data) {
    $('.test').html(data);
  });

  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(150,150,255)')
      }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
  
 $('#contactLink').click(function(e) {
    $('.test').hide(500);
    $('.test').show(500).html('<object data="contact.html">');
  });
  
  $('#homeLink').click(function(e) {
    $('.test').hide(500);
    $('.test').show(500).html('<object data="home.html">');
  });
});
