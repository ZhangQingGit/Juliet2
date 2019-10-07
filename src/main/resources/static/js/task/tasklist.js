var pageNum=1;
var pageSize=5;
$(document).ready(function(){
    //得到名字
    $.post("/getName", function (data) {
        $("#d_name").append(data.message);
    });
    //菜单栏
    $.post("showList", function (data, staus) {
        for (var i = 0; i < data.length; i++) {
            $('#filterCollapse').append('<li class="multi-chosen" id="father'+i+'"><span class="title">'+data[i].father+'：</span>\n' +
                '        <a rel="nofollow" href="javascript:;" class="active"\n' +
                '        data-lg-tj-cid="idnull">不限\n' +
                '        </a>'+
                '          </li>');
            var str = data[i].son.split(",");
            for(var j = 0; j < str.length; j++){
                $('#father'+i).append('<a rel="nofollow" href="javascript:;" data-lg-tj-id=8r00 data-lg-tj-no="0002"\n' +
                    '        data-lg-tj-cid="idnull" id="type'+1+i+j+'" onclick="search_type('+1+i+j+');">'+str[j]+'\n'+'</a>'+
                    '        <i class="delete"></i>');
            }
        }
    });
    //从主页传来得数据进行查询
    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {    //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        if(strs[1]!=''){
            if(strs[0]=='s'){
                var title = decodeURI(strs[1]);
                $.post("/task/search",{msg:title},function (json) {
                    $("#keyword").val(title);
                    $("#taskList").empty();
                    var data=json.data;
                    appendtask(json.data.length,data);
                });
            }
            if(strs[0]=='t'){
                var title = decodeURI(strs[1]);
                $.post("/task/search",{tasktype:title},function (json) {
                    var data=json.data;
                    appendtask(json.data.length,data);
                });
            }
        }
    }else {
        //初始列表
        $.post("/task/taskList",{pageNum:pageNum,pageSize:pageSize},function (json) {
            var data=json.data;
            appendtask(json.data.length,data);
            $("#fenye").append('当前第<span id="page"></span>页&nbsp;&nbsp;&nbsp;&nbsp;\n' +
                '                        <a class="page_no"  data-index="" id="up" onclick="javascript:up();">上一页</a>\n' +
                '                        <a class="page_no" data-index="2" id="next" onclick="javascript:next();">下一页</a>\n' +
                '                        共<span id="totle"></span>页');
            $("#page").text(pageNum);
            $("#totle").text(json.pages);
        });
    }

});
    function up(){
            if(pageNum>1){
                pageNum=pageNum-1;
                $.post("/task/taskList",{pageNum:pageNum,pageSize:pageSize},function (json) {
                    var data=json.data;
                    appendtask(json.data.length,data);
                    $("#page").text(pageNum);
                });
            }else {
                pageNum=1;
                $("#page").text(1);
                return null;
            }
    }
    function next(){
            if(pageNum<$("#totle").text()){
                pageNum=pageNum+1;
                $.post("/task/taskList",{pageNum:pageNum,pageSize:pageSize},function (json) {
                    var data=json.data;
                    appendtask(json.data.length,data);
                    $("#page").text(pageNum);
                });
            }else {
                pageNum=$("#totle").text();
                $("#page").text($("#totle").text());
                return null;
            }
    }
function appendtask(length,data){
    $("#taskList").empty();
    for(var i=0;i<length;i++) {
        $("#taskList").append('<li class="con_list_item default_list">\n' +
            '                        <span class="top_icon direct_recruitment"></span>\n' +
            '                        <div class="list_item_top">\n' +
            '                            <div class="position">\n' +
            '                                <div class="p_top">\n' +
            '                                   <a href="taskdetails?rid=' + data[i].rid + '" target="_blank"> <h3>' + data[i].pname + '</h3></a>\n' +
            '                                    <span class="add">[<em>' + data[i].tasktype + '</em>]</span>\n' +
            '                                    </a>\n' +
            '                                    <span class="format-time" id="pushtime">发布时间：' + data[i].tdate + '</span>\n' +
            '                                </div>\n' +
            '                                <div class="p_bot">\n' +
            '                                    <div class="li_b_l">\n' +
            '                                        <span class="money">金额：' + data[i].pmoney + '</span>\n' +
            '                                        ' + data[i].psynopsis + '\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="company">\n' +
            '                                <div class="company_name">\n' +
            '                                   发布人： <a href="publisherdetails?cid=' + data[i].cid + '"  target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data[i].cname + '</a>\n' +
            '                                </div>\n' +
            '                                <div class="industry">\n' +
            '                                    公司注册资金：' + data[i].pmoney + '\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="list_item_bot">\n' +
            '                            <div class="li_b_l">\n' +
            '                                <span>' + data[i].tasktype + '</span>\n' +
            '                            </div>\n' +
            '                            <div class="li_b_r">“' + data[i].psynopsis + '”</div>\n' +
            '                        </div>\n' +
            '                    </li>');
    }
}
$("#submit").click(function () {
    var msg = $("#keyword").val();
    $.post("/task/search",{msg:msg},function (json) {
        var data=json.data;
        appendtask(json.data.length,data);
    });
});
function search_type(msg){
    var type = $("#type"+msg).text();
    var msg = $("#keyword").val();
    $.post("/task/search",{msg:msg,tasktype:type},function (json) {
        var data=json.data;
        appendtask(json.data.length,data);
    });
}