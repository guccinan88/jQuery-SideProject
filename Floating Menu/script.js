$(function(){
    $(window).scroll(function(){
        $('nav').stop().animate({'top':$(window).scrollTop()+100},500);//加上stop方法是避免不斷重複執行動畫
    });
})