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
    
    //그룹이벤트 등록하는 방법1
    $('.btn1').on("mouseover focus", function(){
            $('.btn1').css('background','red') 
    });

    //그룹이벤트 등록하는 방법2
    $('.btn2').on({"mouseover focus":function(){
        $('.btn2').css('background','yellow')
    }});

    //그룹이벤트 등록하는 방법3
    $('.btn3').on({'mouseover':function(){
        $(this).css('background','pink')
    },'focus':function(){
        $(this).css('background','green')
    }})

    $('.btn4').on("click",function(e){
        e.preventDefault();

            $(".txt4").css('background','green')
    });

    $('.btn5').on("click",function(){

            $(".txt5").css('background','green')
            return false;

    });

    $('.btn6').on("dblclick",function(){

            $(".txt6").css('background','red')

    });

    $('.hover').hover(function(){
        $('.hover').text('한나야 잘 잤어? 그만 자고 나랑 놀자')
    },function(){
        $('.hover').text('우리나라 대통령은 누가 될가?')
    });

    $('.mouse').mouseenter(function(){
        $('.mouse').html('text랑 html랑 차이가 뭘까요?')
    });
    $('.mouse').mouseleave(function(){
        $('.mouse').html('text는 글자로 인지하고 html은 태그로 인지합니다.')
    });

    $('.focus').focus(function(){
        $('.focus').addClass('actives')
        $('.focus').css('outline','none')
    })

    $('.focus').blur(function(){
        $('.focus').removeClass('actives')
        $('.focus').css('outline','none')
    })

    $('.clickTitle').click(function(){
        $(this).text('왕 재미있다')

        let img=$('<img>',{
            src:'https://shop.hansalim.or.kr/im/is/activeDesigner/080601061_content1.jpg',
            alt:'이미지'
        })

        $('#imgContainer').append(img);
    })
});