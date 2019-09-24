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
	$.post("getName", function (data) {
		$("#d_name").append(data.message);
	});

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
                $('#father'+i).append("<li>\n" +
                    "<h3 class=\"mcate-item-hd\"><span>"+str[j]+"</span></h3>\n" +
                    "</li>\n");
            }
        }
        $("#nav .js_toggle").Jdropdown({
            delay: 100
        });
    });
/**
 * 获取项目的信息
 */
    $(document).ready(function(json){
        $.post("/task/show", function (data, staus) {
            for (var i = 0; i < data.data.length; i++) {
                $('#ul-id').append('<li class="position_list_item default_list">'
                                +'<span class="top_icon direct_recruitment"></span>'
                                +'<div class="pli_top">'
                                    +'<div class="clearfix pli_top_l">'
                                        +'<div class="position_name fl">'
                                           +'<h2 class="dib clearfix">'
                                                +'<a href="taskdetails?rid='+data.data[i].rid+'"+ target="_blank" class="position_link fl wordCut"'
                                                   +'data-index="8" >'+data.data[i].pname+'</a>'
                                            +'</h2>'
                                            +'<span class="dib create-time">&ensp;&ensp;&ensp;'+data.data[i].tdate+'&ensp;</span>'
                                        +'</div>'
                                        +'<span class="salary fr" style="margin-right: 20%;">'+data.data[i].pmoney+'</span>'
                                   +'</div>'
                                   +'<div class="position_main_info wordCut">'
                                        +'<span>任务完成时限：'+data.data[i].findate+'</span>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="pli_btm clearfix">'
                                    +'<div class="bottom-right">'
                                        +'<h3 class="company_name wordCut">'
                                            +data.data[i].psynopsis
                                        +'</h3>'
                                    +'</div>'
                                +'</div>'
                            +'</li>');
            }
        });
    });
    
    /**
     * 获取团队信息
     */
    $(document).ready(function(json){
        $.post("showTeam", function (data, staus) {
            for (var i = 0; i < data.data.length; i++) {
                $('#team-data').append('<li class="company-item" data-companyid="28818">'
                        +'<div class="top">'
                           +'<p><a href="#"><img src="http://www.yinggoo.com/resources/images/favicon.ico" alt="公司logo" width="80" height="80"></a></p>'
                            +'<h3 class="company-name wordCut">'
                                +'<a href="publisherdetails?tid='+data.data[i].taskcount+'" target="_blank">'+data.data[i].tname+'</a></h3>'
                            +'<h4 class="indus-stage wordCut">'
                                +'<span>擅长方面</span>'
                               +'<span>'+data.data[i].tasktype+'</span>'
                            +'</h4>'
                            +'<h4 class="advantage wordCut">'+data.data[i].experience+'</h4>'
                       + '</div>'
                       +'<div class="bottom clearfix">'
                          +'<a class="bottom-item bottom-1 fl" href="#" target="_blank" data-lg-tj-id="19wb"'
                              + 'data-lg-tj-no="0008" data-lg-tj-cid="">'
                               +' <p class="green">'
                                   +'<span>'+data.data[i].taskcount+'</span>'
                                +'</p>'
                               +'<p class="gray">接包数量</p>'
                           +'</a>'
                            +'<a class="bottom-item bottom-2 fl" href="#" target="_blank" data-lg-tj-id="19wc"'
                              +'data-lg-tj-no="0008" data-lg-tj-cid="">'
                              +' <p class="green">'
                                   +'<span>'+data.data[i].fintask+'</span>'
                                +'</p>'
                               + '<p class="gray">完成数量</p>'
                            +'</a>'
                           + '<a class="bottom-item bottom-3 fl" href="#" target="_blank" data-lg-tj-id="19wd"'
                              +' data-lg-tj-no="0008" data-lg-tj-cid="">'
                               +' <p class="green">'
                                   + '<span>'+data.data[i].goodtask+'%</span>'
                                +'</p>'
                                +'<p class="gray">完成率</p>'
                           +' </a>'
                        +'</div>'
                    +'</li>');
            }
        });
    });
    
});
function uid(data){
	$.get("list?uid="+data, function (data, staus) {
		alert("sul");
	});
};
    