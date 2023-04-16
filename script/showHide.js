$(function() {
  $('div').css({
    'display': 'none'
  });
  $('.show-btn').click(function() {
    // $('div').css({
    //   'display': 'block'
    // })
    $('div').show()
  })

  $('.hide-btn').click(function() {
    // $('div').css({
    //   'display': 'none'
    // })
    $('div').hide();
  })
  $('.btn').mouseenter(function() {
    $('.mouseOver').css({
      'display': 'block',
      // 'transition': '0.5s'
    });
  })
  $('.btn').mouseleave(function() {
    $('.mouseOver').hide();
  })
});