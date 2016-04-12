$(document).ready(function(){
  
  $('.test').load('home.html');
  
  $('#homeLink').click(function(){
    $('.test').hide(100);
    $('.test').show(100).load('home.html');
  });
  
  $('#contactLink').click(function(){
    $('.test').hide(300);
    $('.test').show(300).load('contact.html', function(){
      $('.hover').hover(function(){
        $(this).css('background-color', 'rgb(130,130,255)')
      }, function() {
        $(this).css('background-color', 'rgb(100,100,255)')
       });
    });
  });
  
  $('#venuesLink').click(function(){
    $('.test').hide(300);
    $('.test').show(300).load('venues.html', function(){
      $("#accordion > li > div").click(function(){
        console.log('hey');
        if(false == $(this).next().is(':visible')) {
          $('#accordion ul').slideUp(300);
        }
        $(this).next().slideToggle(300);
      });
      $('#accordion ul:eq(0)').show();
    });
  });
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(130,130,255)')
  }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
  
  //accordion
});
