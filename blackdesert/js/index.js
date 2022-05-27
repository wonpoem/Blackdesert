
$(function(){

    $(".main_ul>li").hover(function() {

    $(this).find(".submenu").stop().slideToggle(150)
    $(this).find(".more_menu").stop().slideToggle(150)

    });

    $(".more_menu>li").hover(function(){

    $(this).find(".more_submenu").stop().slideToggle(150)    
    });

    $('.mobile_menu>a').click(function(){

        $('.mobile_menu_box').animate({left:'0'}, 500);
        $('.menu_bg').show();
        

        });
        
        $('.mobile_menu_box .close').click(function(){
        
        $('.mobile_menu_box').animate({left:'-363px'}, 500);
        $('.menu_bg').hide();
        
        });

        $('.login_menu>a').click(function(){

            $('.mobile_login_box').animate({right:'0'}, 500);
            $('.menu_bg').show();

            });
            
            $('.mobile_login_box .close').click(function(){
            
            $('.mobile_login_box').animate({right:'-374px'}, 500);
            $('.menu_bg').hide();
            
            });

});