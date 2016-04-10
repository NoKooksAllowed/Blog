$(document).ready(function(){
  var status = 'newpage';
  
  if ( status === 'newpage' ) {
    $('.test').load('home.html');
  }
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(150,150,255)')
      }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
  
  $('#contactLink').click(function(e) {
    status = 'loaded';
    $('.test').hide(500);
    $('.test').show(500).load('contact.html');
    e.stopImmediatePropagation();
    e.preventDefault();
  });
  
  $('#homeLink').click(function(e) {
    status = 'loaded';
    $('.test').hide(500);
    $('.test').show(500).load('home.html');
    e.stopImmediatePropagation();
    e.preventDefault();
  });
  
});
