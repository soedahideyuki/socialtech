$(function(){
  $('.button-more').on('mouseover' , function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft:20,
    },100);
    });
  
  $('.button-more').on('mouseout' , function(){
    $(this).animate({
      marginLeft: 0 ,
      opacity: 1 , 
    },100);
  });

  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplayspeed: 5000,
    arrows: false,
  });

  // AjaxでSTATIC　FORMSにデータを送信
  $('#submit').on('click' , function(event){
    // formタグによる送信を拒否
    event.preventDefault();
    // 入力チェックをした結果、エラーがあるかないか判断
    let result = inputCheck();
  });

  // フォーカスが外れた時(blur)にフォームの入力チェックをする
  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#agree').click(function(){  //on('click',function)　の書き方でないのか
    inputCheck();
  });

  inputCheck=()=>{//質問　これはjQuery??
    console.log('inputCheck関数の呼び出し');
  }  
});

