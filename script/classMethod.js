$(function() {
  // $('.active').css({
  //   'border': 'none'
  // })
  $('.add-class').click(function() {
    // class메서드괄호안에 .을 붙이면 오류
    $('.box').addClass('active')
  })
  $('.remove-class').click(function() {
    $('.box').removeClass('active')
  }) 
  $('.toggle-class').click(function() {
    $('.box').toggleClass('active')
  })
})