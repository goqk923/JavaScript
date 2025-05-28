$(function(){
    $('#input1').val("텍스트필드를 다시 입력하였습니다");
    $('#textarea1').val("한나야 화내지마");
    $('#select1').val("city2");
    $('#select2').val(['town2','town3']);

    //내용 비우기
    $('#emp').empty();

    //내용 추가하기
    $('.insert p:eq(2)').after("<p>특히 한나는 더 안됨</p>");
    $("<p>그럴리가</p>").insertAfter('.insert p:eq(0)');

    $('.insert p:eq(0)').before("<p>신나는 금요일</p>");
    $("<p>학교종이 땡땡땡</p>").insertBefore('.insert p:eq(0)');

    let basket=$('#basket')
    let apple=$('#apple')
    let banana=$('#banana')
    let orange=$('#orange')

    basket.append(apple);
    basket.append(orange);
    banana.appendTo(basket)

    $('.img>a').hover(function(){
        $(this).find('img').css({transform:'scale(1.3)', transition:'.3s'})
    },function(){
        $(this).find('img').css({transform:'scale(1.0)'})
    });


     let topLine=$('.topLine');
    let bottomLine=$('.bottomLine');
    let leftLine=$('.leftLine');
    let rightLine=$('.rightLine');
    let setIn;
    function line(){
        setIn= setInterval(function(){
            topLine.css('left','-100%').animate({left:0},500);
            bottomLine.css('left','100%').animate({left:0},500);
            leftLine.css('top','-100%').animate({top:0},500);
            rightLine.css('top','100%').animate({top:0},500);
        },1500)
    }
   
    $('.line').hover(function(){
        line()
    }, function(){
        clearInterval(setIn)
    });
});