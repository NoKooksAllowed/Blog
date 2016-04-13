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
        $(this).addClass('background-color', 'rgb(100,255,160)')
      }, function() {
        $(this).css('background-color', '')
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
    $(this).css('background-color', 'rgb(100,255,130)')
  }, function() {
    $(this).css('background-color', '')
  });
  
  //accordion
});
