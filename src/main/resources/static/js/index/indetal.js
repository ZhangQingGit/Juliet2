layui.use(['carousel', 'form'], function(){
    var carousel = layui.carousel,form = layui.form;
    carousel.render({
        elem: '#test10'
        ,width: '840px'
        ,height: '346px'
        ,interval: 5000
    });
});


$(document).ready(function(json){

    //获取用户昵称名字
    $.post("/getNickName", function (data) {
        $("#d_name").append(data.message);
    });

    //获取项目的信息
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

    //获取团队的信息
    $.post("showTeam", function (data, staus) {
        for (var i = 0; i < data.data.length; i++) {
            $('#team-data').append('<li class="company-item" data-companyid="28818">'
                +'<div class="top">'
                +'<p><a href="#"><img src="http://www.yinggoo.com/resources/images/favicon.ico" alt="公司logo" width="80" height="80"></a></p>'
                +'<h3 class="company-name wordCut">'
                +'<a href="publisherdetails?tid='+data.data[i].tid+'" target="_blank">'+data.data[i].tname+'</a></h3>'
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
