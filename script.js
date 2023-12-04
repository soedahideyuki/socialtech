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
  $('#agree').click(function(){  
    inputCheck();
  });

  inputCheck=()=>{   
    // console.log('inputCheck関数の呼び出し');

    // エラーのチェック
    let result;

    // エラーメッセージのテキスト
    let message ='';

    // エラーが無ければfalse、エラーがあればtrue
    let error = false ;

    // お名前チェック
    if($('#name').val() ==''){
      // エラーあり(テキストボックスが空欄だったら)
      $('#name').css('background-color','#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし(テキストボックスに正確に入力あり)
      $('#name').css('background-color','#fafafa');
    }

    // フリガナチェック
    if($('#furigana').val() ==''){
      // エラーあり(テキストボックスが空欄だったら)
      $('#furigana').css('background-color','#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      // エラーなし(テキストボックスに正確に入力あり)
      $('#furigana').css('background-color','#fafafa');
    }

    // お問い合わせチェック
    if($('#message').val() ==''){
      // エラーあり(テキストボックスが空欄だったら)
      $('#message').css('background-color','#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし(テキストボックスに正確に入力あり)
      $('#message').css('background-color','#fafafa');
    }

    // メールアドレスのチェック
    if($('#email').val() == '' /*空欄*/ || 
    $('#email').val().indexOf('@') == -1 /*@を含まない*/ || 
    $('#email').val().indexOf('.') == -1 /*.をふくまない*/
    ){
      // エラーあり(テキストボックスが空欄だったら)
      $('#email').css('background-color','#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし(テキストボックスに正確に入力あり)
      $('#email').css('background-color','#fafafa');
    }

    // 電話番号チェック
    if($('#tel').val() != '' /*空欄でない*/ &&
    $('#tel').val().indexOf('-') == -1 /*-を含まない*/ )
     {
      // エラーあり(テキストボックスが空欄だったら)
      $('#tel').css('background-color','#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし(テキストボックスに正確に入力あり)
      $('#tel').css('background-color','#fafafa');
    };
  }
});

