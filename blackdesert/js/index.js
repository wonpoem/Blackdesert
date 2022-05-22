
$(function(){

    $(".main_ul>li").hover(function() {

    $(this).find(".submenu").stop().slideToggle(300)

    });

});