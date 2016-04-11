$(document).ready(function(){
  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) { 
    options.async = true;
  });
  
  function load_side_ad() {
    var aa = jQuery.ajax({
      url: 'home.html',
      async: false
     }).responseText;
    jQuery('.test').html(aa);
  }
  
  load_side_ad();
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(150,150,255)')
      }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
  
  $('#contactLink').click(function(e) {
    $('.test').hide(500);
    $('.test').show(500).load('contact.html');
    e.stopImmediatePropagation();
    e.preventDefault();
  });
  
  $('#homeLink').click(function(e) {
    $('.test').hide(500);
    $('.test').show(500).load('home.html');
    e.stopImmediatePropagation();
    e.preventDefault();
  });
});
