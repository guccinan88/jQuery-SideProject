$(function(){
    $('button').click(function(){
        var target=$(this).attr('value');
        $('#list li').each(function(){ //each可以處理選擇器的每個元素，可以把它當成for迴圈的概念
            $(this).animate({'opacity':0},500,function(){
                $(this).hide();
            if($(this).hasClass(target)||target=='all'){ //hasClass判斷是否有所選擇的類別，有的話就顯示
                $(this).show();
                $(this).animate({'opacity':1},500);
            }
            });
        })
    })
})