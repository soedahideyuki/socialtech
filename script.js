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

    // エラー判定とメッセージ取得
    let error = result.error;
    let message = result.message;

    // エラーが無かったらフォームを送信する
    if(error == false){
      // Ajaxでformを送信する
      $.ajax({
        url: 'https://api.staticforms.xyz/submit',
        type: 'POST',
        dataType: 'json',
        data: $('#form').serialize(),
        success: function(result){
          alert('お問い合わせを送信しました。')
        },
        error: function (xhr, resp, text){
          alert('お問い合わせを送信できませんでした。')
        }
      })
    } else {
      // エラーメッセージを表示する
      alert(message);
    }
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
    }

    // 個人情報チェックボックスのチェック
    if($('#agree').prop('checked') == false){ //チェックボックスがチェックされていないとfalseが返る
    error = true;
    message += '個人情報の取り扱いについて同意いただける場合は、チェックボックスにチェックして下さい。\n';
    }

    // エラーの有無で送信ボタンを切り替え
    if (error == true){  
      //すべてのinputのどこかでエラーが起こっている場合
      $('#dubmit').attr('src' , 'images/button-submit.png');
    }else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値ちしてエラーがあるかどうかを返す
    return result;
  }
});

