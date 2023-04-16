$(function() {
  $('.show-btn').click(function() {
    // $('.box').show();
    $('.box').slideDown();
  });
  $('.hide-btn').click(function() {
    // $('.box').hide();
    $('.box').slideUp();
  });
  $('.toggle-btn').click(function() {
    $('.box').slideToggle();
  })
})