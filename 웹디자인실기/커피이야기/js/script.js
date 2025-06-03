$(function(){
    //메뉴
    $('nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(500);
    },function(){
        $(this).find('ul').stop().slideUp(500);
    });


    //슬라이드
    let slide=$('#mainslider>ul>li');//이미지들
    let current=0;//초기화 변수

    /* setInterval(function(){
        let prev=slide.eq(current);
        move(prev, 1, 0);
        current++;

        if(current==slide.length) current=0;
        let next=slide.eq(current);
        move(next, 0, 1)

    },2000)

    function move(tg, start, end){
        tg.css('opacity', start).stop().animate({opacity:end},500)
    } */

    setInterval(function(){
        let prev=slide.eq(current);
        move(prev, 0, '100%');
        current++;

        if(current==slide.length) current=0;
        let next=slide.eq(current);
        move(next, '-100%', 0)

    },2000)
    function move(tg, start, end){
        tg.css('left', start).stop().animate({'left':end},500)
    }


    $('.click').click(function(e){
        e.preventDefault();
        $('.modal').show();
    });

    $('.close').click(function(){
        $('.modal').hide();
    });


});