$(function(){
    let current=0;
    let slides=$('.slide>li');

    setInterval(function(){
        let prev=slides.eq(current);
        move(prev, 0, '-100%')

        current++; //1씩 증가 증가가되면 보이는 갯수보다 많이지면 이미가 없음
        if(current==slides.length) current=0;

        let next=slides.eq(current)
        move(next, '100%', 0)
    },1000)

    function move(tg, start, end){
        tg.css('top', start).stop().animate({top: end},500)
    }
});