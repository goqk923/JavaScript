$(function(){
    const menu=$('.menu>li');
    menu.hover(function(){
        let tg=$(this);
        let onImg=tg.find('.text_img > .on')
        let offImg=tg.find('.text_img > .off');
        let tgImg=tg.find('.menu_img');
        let tgImgheight=tgImg.find('img').innerHeight();

        onImg.css('display','block');
        offImg.css('display','none');
        //console.log(tgImgheight)
        tgImg.stop().animate({height: tgImgheight},600)


    },function(){
        let tg=$(this);
        let onImg=tg.find('.text_img > .on')
        let offImg=tg.find('.text_img > .off');
        let tgImg=tg.find('.menu_img');
        let tgImgheight=0;

        onImg.css('display','none');
        offImg.css('display','block');
        //console.log(tgImgheight)
        tgImg.stop().animate({height: tgImgheight},600)
    })
});