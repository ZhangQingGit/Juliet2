function GetRequest() {
    var cid=-1;
    var tid=-1;
    var d_name;

    $.post("/getNickName", function (data) {
        $("#d_name").append(data.message);
        d_name = data.message;
    });

    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {    //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
//      alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        if(strs[0]=='cid'){
            cid = strs[1];
        }else if(strs[0]=='tid'){
            tid = strs[1];
        }
    }
    if(cid != -1){
        $.post("com_details",{cid:cid},function (Cdata) {
            console.log(Cdata);
            //标题
            $("#com_main").append('<a href="http://'+Cdata.data.homepage+'" class="hovertips" target="_blank" rel="nofollow"\n' +
                '                       title="'+Cdata.data.cname+'">\n' +
                '                        '+Cdata.data.cname+'\n' +
                '                    </a>');
            $("#com_word").append(Cdata.data.involve);

            $("#taskcount").append('<ul>\n' +
                '                    <li>\n' +
                '                    <strong>\n' +
                '                        \n' +
                '                    </strong>\n' +
                '                    <br/>\n' +
                '                    <span class="tipsys" original-title="该公司发布任务的数量">\n' +
                '                            <span>发布任务</span><span class="tip"></span>\n' +
                '                        </span>\n' +
                '                </li>\n' +
                '                </ul>');

            $("#container_right").append('<div class="company_bussiness_info_container">\n' +
                '                <div class="title">公司基本信息\n' +
                '                <div class="slash"></div>\n' +
                '                </div>\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="//www.lgstatic.com/www/static/company-c/modules/common/img/company-business-companyname_0bd17fb.svg" /></i><span>工商信息</span>\n' +
                '            </div>\n' +
                '            <div class="content">'+Cdata.data.cname+'</div>\n' +
                '                </div>\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="//www.lgstatic.com/www/static/company-c/modules/common/img/company-business-establishtime_cf8ff33.svg"/></i><span>联系邮箱</span></div>\n' +
                '            <div class="content">'+Cdata.data.cemail+'</div>\n' +
                '                </div>\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="//www.lgstatic.com/www/static/company-c/modules/common/img/company-business-money_416d259.svg" /></i><span>注册资金</span>\n' +
                '            </div>\n' +
                '            <div class="content">'+Cdata.data.capital+'</div>\n' +
                '                </div>\n' +
                '\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="images/publisher/phone-outline.png"/></i><span>联系方式</span></div>\n' +
                '            <div class="content">'+Cdata.data.cphone+'</div>\n' +
                '                </div>');

            $("#containerCompanyDetails").append('<div class="item_container" id="company_intro">\n' +
                '                <div class="item_ltitle">公司介绍</div>\n' +
                '                <div class="item_content">\n' +
                '                    <h3>'+Cdata.data.synopsis+'</h3>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '\n' +
                '            <div class="item_container" id="company_project">\n' +
                '                <div class="item_ltitle">所属项目</div>\n' +
                '                <div class="item_content">\n' +
                '                    <h3>暂定</h3>\n' +
                '                </div>\n' +
                '            </div>');
        });
    }
    if(tid != -1){
        $.post("team_details",{tid:tid},function (Tdata) {
            console.log(Tdata);
            //标题
            $("#com_main").append('<a href="http://'+Tdata.data.homepage+'" class="hovertips" target="_blank" rel="nofollow"\n' +
                '                       title="'+Tdata.data.tname+'">\n' +
                '                        '+Tdata.data.tname+'\n' +
                '                    </a>');
            $("#com_word").append(Tdata.data.tasktype);

            $("#taskcount").append('<ul>\n' +
                '                    <li>\n' +
                '                    <strong>\n' +
                '                        '+Tdata.data.fintask+'\n' +
                '                    </strong>\n' +
                '                    <br/>\n' +
                '                    <span class="tipsys" original-title="该团队完成任务的数量">\n' +
                '                            <span>完成任务</span><span class="tip"></span>\n' +
                '                        </span>\n' +
                '                </li>\n' +
                '                </ul>');

            $("#container_right").append('<div class="company_bussiness_info_container">\n' +
                '                <div class="title">团队基本信息\n' +
                '                <div class="slash"></div>\n' +
                '                </div>\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="//www.lgstatic.com/www/static/company-c/modules/common/img/company-business-companyname_0bd17fb.svg" /></i><span>团队名字</span>\n' +
                '            </div>\n' +
                '            <div class="content">'+Tdata.data.tname+'</div>\n' +
                '                </div>\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="//www.lgstatic.com/www/static/company-c/modules/common/img/company-business-establishtime_cf8ff33.svg"/></i><span>联系邮箱</span></div>\n' +
                '            <div class="content">'+Tdata.data.temail+'</div>\n' +
                '                </div>\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="//www.lgstatic.com/www/static/company-c/modules/common/img/company-business-money_416d259.svg" /></i><span>承接项目数</span>\n' +
                '            </div>\n' +
                '            <div class="content">'+Tdata.data.taskcount+'</div>\n' +
                '                </div>\n' +
                '\n' +
                '                <div class="info_item">\n' +
                '                <div class="info_item_title"><i><img src="images/publisher/phone-outline.png"/></i><span>联系方式</span></div>\n' +
                '            <div class="content">'+Tdata.data.tphone+'</div>\n' +
                '                </div>');


            $("#containerCompanyDetails").append('<div class="item_container" id="company_intro">\n' +
                '                <div class="item_ltitle">团队介绍</div>\n' +
                '                <div class="item_content">\n' +
                '                    <h3>'+Tdata.data.experience+'</h3>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '\n' +
                '            <div class="item_container" id="company_project">\n' +
                '                <div class="item_ltitle">承接项目</div>\n' +
                '                <div class="item_content">\n' +
                '                    <h3>暂定</h3>\n' +
                '                </div>\n' +
                '            </div>');
        });
    }


}
