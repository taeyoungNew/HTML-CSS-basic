$(function() {
  $('.show-btn').click(function() {
    $('.box').fadeIn(1000);
  })
  $('.hide-btn').click(function() {
    $('.box').fadeOut();
  })
  $('.toggle-btn').click(function() {
    $('.box').fadeToggle(5000);
  })
})