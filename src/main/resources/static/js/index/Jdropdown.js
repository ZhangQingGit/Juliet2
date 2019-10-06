//延时切换
(function(a) {
    a.fn.Jdropdown = function(d, e) {
        if (!this.length) {
            return
        }
        if (typeof d == "function") {
            e = d;
            d = {}
        }
        var c = a.extend({
            event: "mouseover",
            current: "hover",
            delay: 0,
            fun: "default"
        }, d || {});
        var b = (c.event == "mouseover") ? "mouseout" : "mouseleave";
        a.each(this, function() {
            var h = null,
                g = null,
                f = false;
            a(this).bind(c.event, function() {
                if (f) {
                    clearTimeout(g)
                } else {
                    var j = a(this);
                    h = setTimeout(function() {
                        if( c.fun == "default" )
                        {
                            var _flag_temp = 0;
                            j.addClass(c.current).children(".menu-in").show();
                            var _c = j.children(".menu-in");
                            var _c_height = _c.height();
                            var _t_height = j.height();

                            var _c_to_top = j.offset().top-$(window).scrollTop()+_c_height;
                            var _j_to_top = j.offset().top-$(window).scrollTop()+_t_height;
                            var _c_to_bottom =$(window).height()-_c_to_top;
                             var tg_top = _c_to_bottom-30;
                            if (_c_to_bottom < 30&&tg_top!=(-1)&&tg_top!=1) {
                               
                                if(($(window).height()-30)<_j_to_top){
                                    var border_height = ($.browser.msie && $.browser.version =='7.0')? (-2):2;
                                    _c.css('top','-'+(_c_height-_t_height+border_height)+'px')
                                }else{
                                         _c.css('top',tg_top+'px');
                                }
                                
                            }else{
                                _c.css('top','-2px');
                            }
                            if((_flag_temp==1)&&$.browser.msie && $.browser.version <7.0){
                                j.addClass(c.current).children(".menu-in").hide().show();
                            }
                        }
                          
                        f = true;
                        if (e) {
                            e(j)
                        }
                    }, c.delay)
                }
            }).bind(b, function() {
                if (f) {
                    var j = a(this);
                    g = setTimeout(function() {
                        if( c.fun == "default" )
                        {
                            j.removeClass(c.current).children(".menu-in").hide();
                        }    
                        f = false
                    }, c.delay)
                } else {
                    clearTimeout(h)
                }
            })
        })
    }
})(jQuery);

/**
 * 获取一二级菜单的ajax
 *
 * */
$(document).ready(function(){

    $.post("showList", function (data, staus) {
        for (var i = 0; i < data.length; i++) {
            $('#indetalMenu').append("<li class=\"js_toggle\" >\n" +
                "<div class=\"category-info list-xl\">\n" +
                "<h3 class=\"category-name\">\n" +
                "<i></i>\n" +
                "<a href="+" class=\"ml-22\">"+data[i].father+"</a>\n"+
                "</h3>\n" +
                "<em>&gt;</em>\n" +
                "</div>\n" +
                "<div class=\"menu-item menu-in\">\n" +
                "<div class=\"area-bg\">\n" +
                "<ul class=\"sublist clearfix\" id=father"+i+">\n" +
                "</ul>\n" +
                "</div>\n" +
                "</div>\n" +
                "</li>");
            var str = data[i].son.split(",");
            for(var j = 0; j < str.length; j++){
                $('#father'+i).append('<a onclick="search_type('+1+i+j+');">\n' +
                    '<li><h3 class="mcate-item-hd"><span id="type'+1+i+j+'">'+str[j]+'</span></h3></li>\n' +
                    '</a>');
            }
        }
        $("#nav .js_toggle").Jdropdown({
            delay: 100
        });
    });
});

function uid(data){
	$.get("list?uid="+data, function (data, staus) {
		alert("sul");
	});
};
$("#search_button").click(function () {
    var s = $("#search_input1").val();
    if(s!=""){
        window.location.href="tasklist?s="+s;
    }
});
function search_type(msg){
    var s = $("#type"+msg).text();
    window.location.href="tasklist?t="+s;
}