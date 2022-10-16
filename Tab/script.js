$(function(){
    $('#contents div[id!="tab1"]').hide();//將Tab1以外的標籤隱藏
    $('a').click(function(){
        $('#contents div').hide();//點擊標籤之後先將所有標籤隱藏
        $($(this).attr('href')).show();//顯示所點擊的標籤內容
        $('.current').removeClass('current');//移除當前的current類別
        $(this).addClass('current');//將所選Tab加上類別
        return false;
    })
})