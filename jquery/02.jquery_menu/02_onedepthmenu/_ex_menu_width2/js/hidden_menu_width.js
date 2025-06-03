jQuery(document).ready(function(){
	var menu = $('#quickMenu li');
	var showImg = $('#quickMenu li:nth-child(4) .textImage .on');
	var hideImg = $('#quickMenu li:nth-child(4) .textImage .off');
	var onShowImg = $('#quickMenu li:nth-child(4) .menuImage');
		
	showImg.css('display','block');
	hideImg.css('display','none');
	onShowImg.animate(
			{width:70},
			{duration:1000, queue:false, easing:'easeOutCubic'}
		);
	
	menu.hover(function(){
		var tg = $(this);
		var onImg = tg.find('.textImage > .on');
		var offImg = tg.find('.textImage > .off');
		var menuImg = tg.find('.menuImage');
		var imageWidth = menuImg.find('img').innerWidth();
		
		showImg.css('display','none');
		hideImg.css('display','block');
		onShowImg.animate(
			{width:0},
			{duration:1000, queue:false, easing:'easeOutCubic'}
		);
		
		onImg.css('display','block');
		offImg.css('display','none');
		
		menuImg.animate(
			{width:imageWidth},
			{duration:1000, queue:false, easing:'easeOutCubic'}
		);
		
	},function(){
		var tg = $(this);
		var onImg = tg.find('.textImage > .on');
		var offImg = tg.find('.textImage > .off');
		var menuImg = tg.find('.menuImage');
		var imageWidth = 0;
		
		onImg.css('display','none');
		offImg.css('display','block');
		
		menuImg.animate(
			{width:imageWidth},
			{duration:1000, queue:false, easing:'easeOutCubic'}
		);
					
		showImg.css('display','block');
		hideImg.css('display','none');
		onShowImg.animate(
			{width:70},
			{duration:1000, queue:false, easing:'easeOutCubic'}
		);
	});
});


