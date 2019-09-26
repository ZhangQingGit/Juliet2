$(document).ready(function(){
    $.post("/task/taskList",function (json) {
        for(var i=0;i<json.data.length;i++){
            $("#taskList").append('<li class="con_list_item default_list">\n' +
                '                        <span class="top_icon direct_recruitment"></span>\n' +
                '                        <div class="list_item_top">\n' +
                '                            <div class="position">\n' +
                '                                <div class="p_top">\n' +
                '                                   <a href="taskdetails?rid='+json.data[i].rid+'" target="_blank"> <h3>'+json.data[i].pname+'</h3></a>\n' +
                '                                    <span class="add">[<em>'+json.data[i].tasktype+'</em>]</span>\n' +
                '                                    </a>\n' +
                '                                    <span class="format-time" id="pushtime">发布时间：'+json.data[i].tdate+'</span>\n' +
                '                                </div>\n' +
                '                                <div class="p_bot">\n' +
                '                                    <div class="li_b_l">\n' +
                '                                        <span class="money">金额：'+json.data[i].pmoney+'</span>\n' +
                '                                        '+json.data[i].psynopsis+'\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                            <div class="company">\n' +
                '                                <div class="company_name">\n' +
                '                                   发布人： <a href="" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+json.data[i].cname+'</a>\n' +
                '                                </div>\n' +
                '                                <div class="industry">\n' +
                '                                    公司注册资金：'+json.data[i].pmoney+'\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        <div class="list_item_bot">\n' +
                '                            <div class="li_b_l">\n' +
                '                                <span>'+json.data[i].tasktype+'</span>\n' +
                '                            </div>\n' +
                '                            <div class="li_b_r">“'+json.data[i].psynopsis+'”</div>\n' +
                '                        </div>\n' +
                '                    </li>');
        }
    });
});