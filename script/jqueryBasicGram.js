// 제이쿼리 링크가 헤드안에 있을 경우 기본문법
$(function() {
  // $('css선택자').css({
  //   '속성': '값'
  // })
  $('p').css({
    'display': 'none'
  });

  // 선택자를 클릭했을때 안에 있는 함수가 실행되게 하는 구문
  $('.show-btn').click(function() {
    $('p').css({
      'display': 'block'
    });
  })
  $('.hide-btn').click(function() {
    $('p').css({
      'display': 'none'
    })
  })
    
});