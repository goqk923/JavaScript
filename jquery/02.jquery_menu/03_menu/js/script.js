$(function(){
    $('nav>ul>li>a').click(function(e){
        e.preventDefault();
         $('nav>ul>li>ul').hide();
         $(this).next().slideDown()
    });
});