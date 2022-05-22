
$(function(){

    $(".main_ul>li").hover(function() {

    $(this).find(".submenu").stop().slideToggle(150)
    $(this).find(".more_menu").stop().slideToggle(150)

    });

    $(".more_menu>li").hover(function(){

    $(this).find(".more_submenu").stop().slideToggle(150)    
    });


});