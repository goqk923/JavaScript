$(function(){
    const menu=$('.menu>li');
    menu.hover(function(){
        close();
        let tg=$(this);
        let onImg=tg.find('.text_img > .on')
        let offImg=tg.find('.text_img > .off');
        let tgImg=tg.find('.menu_img');
        let tgImgwidth=tgImg.find('img').innerWidth();

        onImg.css('display','block');
        offImg.css('display','none');
        //console.log(tgImgheight)
        tgImg.stop().animate({width: tgImgwidth},600)


    },function(){
        let tg=$(this);
        let onImg=tg.find('.text_img > .on')
        let offImg=tg.find('.text_img > .off');
        let tgImg=tg.find('.menu_img');
        let tgImgwidth=0;

        onImg.css('display','none');
        offImg.css('display','block');
        //console.log(tgImgheight)
        tgImg.stop().animate({width: tgImgwidth},600)
         open();
    })
    open();
    function open(){
        let tg=$('.menu>li').eq(3);
        let onImg=tg.find('.text_img > .on')
        let offImg=tg.find('.text_img > .off');
        let tgImg=tg.find('.menu_img');
        let tgImgwidth=tgImg.find('img').innerWidth();

        onImg.css('display','block');
        offImg.css('display','none');
        //console.log(tgImgheight)
        tgImg.stop().animate({width: tgImgwidth},600)
    }
    function close(){
        let tg=$('.menu>li').eq(3);
        let onImg=tg.find('.text_img > .on')
        let offImg=tg.find('.text_img > .off');
        let tgImg=tg.find('.menu_img');
        let tgImgwidth=0;

        onImg.css('display','none');
        offImg.css('display','block');
        //console.log(tgImgheight)
        tgImg.stop().animate({width: tgImgwidth},600)
    }
});