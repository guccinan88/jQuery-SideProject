$(function(){
    $('a').click(function(){
        $('body').append('<div id="bg">');//增加背景元素
        $('body').append('<div id="photo">');//增加圖片元素
        $('#bg').hide();
        $('#photo').hide();
        $('#photo').html('<img>');
        $('#photo img').attr('src',$(this).attr('href'));//將點選的縮圖href傳給大圖的src
        $('#photo img').attr('width',640);
        $('#photo img').attr('height',420);
        $('#bg').fadeIn();//淡入背景
        $('#photo').fadeIn();//淡入圖片
        //點擊圖片之外的區域淡出大圖預覽，並且移除相關元素
        $('#bg').click(function(){
            $(this).fadeOut(function(){$(this).remove()});
            $('#photo').fadeOut(function(){$(this).remove()});
        });
        return false;
    })
})