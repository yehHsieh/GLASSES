$(document).ready(function(){
  $('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.dropMenu').toggleClass('active');
  });
});
