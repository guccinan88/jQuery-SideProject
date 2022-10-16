$(function(){
    $('a').click(function(){
        $('figure img').attr('src',$(this).attr('href'));
        return false;//將<a>元素的連結功能改為無效
    })
})