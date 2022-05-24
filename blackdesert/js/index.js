
$(function(){

    $(".main_ul>li").hover(function() {

    $(this).find(".submenu").stop().slideToggle(150)
    $(this).find(".more_menu").stop().slideToggle(150)

    });

    $(".more_menu>li").hover(function(){

    $(this).find(".more_submenu").stop().slideToggle(150)    
    });

    $('.mobile_menu>a').click(function(){

        $('.mobile_box').animate({left:'0'}, 500);
        $('.menu_bg').show();

        });
        
        $('.close').click(function(){
        
        $('.mobile_box').animate({left:'-363px'}, 500);
        $('.menu_bg').hide();
        
        });


});