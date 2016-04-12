if(!window.hcb_user){
  hcb_user={ 
    
  };
} (function(){
  s=document.createElement("script");
  s.setAttribute("type","text/javascript");
  s.setAttribute("src", "http://www.htmlcommentbox.com/jread?page="+escape((window.hcb_user && hcb_user.PAGE)||(""+window.location)).replace("+","%2B")+"&opts=470&num=10");
  
  if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})();


$(document).ready(function(){
  $('.test').load('home.html');
  
  $('#homeLink').click(function(){
    $('.test').hide(100);
    $('.test').show(100).load('home.html');
  });
  
  $('#contactLink').click(function(){
    $('.test').hide(300);
    $('.test').show(300).load('contact.html');
  });
  
  $('.hover').hover(function(){
    $(this).css('background-color', 'rgb(130,130,255)')
  }, function() {
    $(this).css('background-color', 'rgb(100,100,255)')
  });
});
