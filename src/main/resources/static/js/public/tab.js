$(function(){
    $('.tabbox .content ul').width(300*$('.tabbox .content li').length+'px');
    /*$(".tabbox .tab a").mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        var distance = -500*index;
        $('.tabbox .content ul').stop().animate({
            left:distance
        });
    });*/

    $(".tabbox .tab a").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        var distance = -300*index;
        $('.tabbox .content ul').stop().animate({
            left:distance
        });
        $('#error-phone-email').hide();
        $('#error-password').hide();
        $('#error-phone').hide();
        $('#error-phone-password').hide();

        $('#error-email').hide();
        $('#error-email-password').hide();
        $('#error-email-code').hide();
        /*$('#error-phone').hide();
        $('#error-phone-password').hide();*/
        $('#error-phone-code').hide();
    });

    /*var auto = 2;  //等于1则自动切换，其他任意数字则不自动切换
    if(auto ==1){
        var number = 0;
        var maxNumber = $('.tabbox .tab a').length;
        function autotab(){
            number++;
            number == maxNumber? number = 0 : number;
            $('.tabbox .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
            var distance = -300*number;
            $('.tabbox .content ul').stop().animate({
                left:distance
            });
        }
        var tabChange = setInterval(autotab,3000);
        //鼠标悬停暂停切换
        $('.tabbox').mouseover(function(){
            clearInterval(tabChange);
        });
        $('.tabbox').mouseout(function(){
            tabChange = setInterval(autotab,3000);
        });
    }*/
});