$(document).ready(function(){
  $('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.dropMenu').toggleClass('active');
  });

  // $('.topNav li').click(function (e) { 
  //   e.preventDefault();
    
  //   $(this).addClass('navBottom').siblings().removeClass('navBottom');
    
  // });

});
