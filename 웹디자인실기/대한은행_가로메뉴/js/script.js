$(function(){
    $(' nav>ul').hover(function(){
        $(this).find('.sub').stop().slideDown(500)
    },function(){
        $(this).find('.sub').stop().slideUp(500)
    });

    let current=0;
    let slider=$('#imgslider>ul>li');

    setInterval(function(){
        let prev=slider.eq(current);
        move(prev, 0, '-100%')
        current++;//이미지가 1씩 증가해
        //if(current==slider.length) current=0
        if(current==3) current=0 
        //만약에 이미지개수만큼 되면 이미지 처음로 돌아가
        let next=slider.eq(current);
        move(next, '100%', 0)
    },3000);

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500)
    }

    //공지사항탭
    let tab=$('.tabs>ul>li');//공지사항과 갤러리
    let content=$('.tabcontents>div');//공지사항 내용과 갤리리 내용


    tab.click(function(e){
        let i=$(this).index();//니가 클릭한 $('.tabs>ul>li')의 순번이 뭐야?
        e.preventDefault();
        $('.tabs>ul>li>a').removeClass('active')
        $(this).find('a').addClass('active');

        content.hide();
        content.eq(i).show();
    });

    //모달
    $('.notice>ul>li').click(function(e){
        e.preventDefault();
        $('.modal').show();
    });

     $('.close').click(function(){
        $('.modal').hide();
    });
});