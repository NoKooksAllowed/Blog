$(document).ready(function(){
  
  function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }
 
  $('.accordion-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');
    if($(e.target).is('.active')) {
      close_accordion_section();
    }else {
      close_accordion_section();
       // Add active class to section title
      $(this).addClass('active');
        // Open up the hidden content panel
      $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
    }
    e.preventDefault();
  });
  
  $('.test').load('home.html');
  
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
  
  //accordion
  
});
