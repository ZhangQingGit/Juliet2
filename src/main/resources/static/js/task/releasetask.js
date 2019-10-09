var cname_input=document.getElementById("cname");
var cemail_input=document.getElementById("cemail");
var pname_input=document.getElementById("pname");
var pmoney_input=document.getElementById("pmoney");
var findate_input=document.getElementById("findate");

/**
 * input 标签的onfocus事件
 */
cname_input.onfocus=function(){
    $('#error-cname-null').hide();
}
cemail_input.onfocus=function () {
    $('#error-cemail-null').hide();
}
pname_input.onfocus=function () {
    $('#error-pname-null').hide();
}
pmoney_input.onfocus=function () {
    $('#error-pmoney-null').hide();
}
findate_input.onfocus=function () {
    $('#error-findate-null').hide();
}


function getnext(i){

    var sz=new Array("step1","step2","step3");
    for(var j=0;j<sz.length;j++){
        if(i==sz[j]){
            document.getElementById(i).style.display="block";
        }else{
            document.getElementById(sz[j]).style.display="none";
        }
    }
}

layui.use('form', function(){
    var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

    //……

    $(document).ready(function() {
        $.post("/task/findCname", function (data) {
            //console.log(data);
            for (var i = 0; i < data.data.length; i++) {
                $("#cname").append('<option value="' + i + '">'+data.data[i]+'</option>');
            }
            form.render();
        });
        $.post("/task/findTaskType", function (data) {
            //console.log(data);
            for (var i = 0; i < data.data.length; i++) {
                $("#tasktype").append('<option value="' + i + '">'+data.data[i]+'</option>');
            }
            form.render();
        });
    });
    //但是，如果你的HTML是动态生成的，自动渲染就会失效
    //因此你需要在相应的地方，执行下述方法来进行渲染

    form.on('select()', function(data){
        $('#error-tasktype-null').hide();
    });
});

var demand=3;
var j;

/**
 * 获取更多需求功能input框的方法
 */
function getMore() {

    for (var i=demand; i<demand+3;i++){
        console.log(i);
        j=i+1;

        $('#last-demand'+i).after("<div class=\"layui-form-item\" id=\"last-demand"+j+"\">\n" +
            "<label class=\"layui-form-label\" style=\"width: 60px\" id=\"label"+j+"\">"+j+".</label>\n" +
            "<div class=\"layui-input-inline\">\n" +
            "<input type=\"text\" name=\"username\" lay-verify=\"required\" autocomplete=\"off\" class=\"layui-input\"\n" +
            "placeholder=\"例如:用户基本登录注册功能(下面以此类推)\" id=\"demand"+j+"\">\n" +
            "</div>\n" +
            "</div>");
    }
    demand=j;
    //$('#last-demand3').removeAttr("id");
}

/**
 *邮箱的正则
 * @param email  传入的邮箱参数
 * @returns {boolean}  true  邮箱格式正确  false 邮箱格式不正确
 */
function checkEmail(email) {
    var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailReg.test(email);
}

function notEmptyOne(i) {
    var cname=$('#cname option:selected').text();
    var cemail=$('#cemail').val();
    var pname=$('#pname').val();
    var tasktype = $('#tasktype option:selected').text();
    var pmoney=$('#pmoney').val();
    var findate=$('#findate').val();

    if(cname == null | cname == ""){
        $('#error-cname-null').show();
        if(cemail == null | cemail == ""){
            $('#error-cemail-null').show();
            if(pname == null | pname == ""){
                $('#error-pname-null').show();
                if(tasktype == "请选择任务类型或直接搜索"){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }else {
                if(tasktype == "请选择任务类型或直接搜索"){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }
        }else {
            if(!(checkEmail(cemail))){
                $('#error-cemail-format').show();
            }
            if(pname == null | pname == ""){
                $('#error-pname-null').show();
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }else {
                if(tasktype == "请选择任务类型或直接搜索"){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }
        }
    }else {
        if(cemail == null | cemail == ""){
            $('#error-cemail-null').show();
            if(pname == null | pname == ""){
                $('#error-pname-null').show();
                if(tasktype == "请选择任务类型或直接搜索"){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }else {
                if(tasktype == "请选择任务类型或直接搜索"){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }
        }else {

            if(pname == null | pname == ""){
                $('#error-pname-null').show();
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }
            }else {
                if(tasktype == "请选择任务类型或直接搜索"){
                    $('#error-tasktype-null').show();
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }
                }else {
                    if(pmoney == null | pmoney == ""){
                        $('#error-pmoney-null').show();
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }else {
                            return false;
                        }
                    }else {
                        if(findate == null | findate == ""){
                            $('#error-findate-null').show();
                            return false;
                        }/*else if (!(checkEmail(cemail))){
                            $('#error-cemail-format').show();
                            return false;
                        }*/
                    }
                }
            }
        }
    }

    $.post("/task/taskPush_One",{cname:cname,cemail:cemail,pname:pname,tasktype:tasktype,pmoney:pmoney,
        findate:findate},function (data,status) {
        console.log(data);
    });

    getnext(i);

}

function notEmptyTwo(i) {
    var psynopsis=$('#psynopsis').val();

    if(psynopsis == null | psynopsis == ""){
        $('#error-psynopsis-null').show();
        return false;
    }

    $.post("/task/taskPush_Two",{psynopsis:psynopsis},function (data,status) {
        console.log(data);
    });

    getnext(i);
}

var layer;
$().ready(function () {
    layui.use('layer', function(){
        layer = layui.layer;
    });
})

function notEmptyThere() {

    var demand1 = $('#demand1').val();
    var demand2 = $('#demand2').val();
    var demand3 = $('#demand3').val();

    if((demand1 == null | demand1 == "") | (demand2 == null | demand2 == "") | (demand3 == null | demand3 == "")){
        $('#error-demand-null').show();
        return false;
    }

    var core="";
    for (var i=1;i<=demand;i++){
        var demandinput=$('#demand'+i).val();
        //console.log(demandinput);
        if (demandinput != null & demandinput != ""){
            if (i != demand){
                core=core+""+i+"."+demandinput+";<br>";
            }else {
                core=core+""+i+"."+demandinput+"。<br>";
            }
            //console.log(demandstring);
        }
    }

    $.post("/task/taskPush_Three",{core:core},function (data) {
        if(data.state == 200){
            layer.open({
                type: 1,
                title: '提示信息',
                area: ['250px', '120px'],
                content: '<div style="padding: 20px 80px;">'+ data.message +'</div>'
            });
        }else {

        }

    });
}




new Vue({
    el: '#app',
    data: {
        msg: '',
    },
    methods: {
        notEmptyThere(){
            var demand1 = $('#demand1').val();
            var demand2 = $('#demand2').val();
            var demand3 = $('#demand3').val();

            if((demand1 == null | demand1 == "") | (demand2 == null | demand2 == "") | (demand3 == null | demand3 == "")){
                $('#error-demand-null').show();
                return false;
            }

            var core="";
            for (var i=1;i<=demand;i++){
                var demandinput=$('#demand'+i).val();
                //console.log(demandinput);
                if (demandinput != null & demandinput != ""){
                    if (i != demand){
                        core=core+""+i+"."+demandinput+";<br>";
                    }else {
                        core=core+""+i+"."+demandinput+"。<br>";
                    }
                    //console.log(demandstring);
                }
            }

            $.post("/task/taskPush_Three",{core:core}, (data)=> {
                if(data.state == 200){
                    /*this.msg=data.message;
                    this.$alert(this.msg,'提示信息', {
                        confirmButtonText: '确定'
                    });*/

                    window.location.href='/index';
                }else {
                    this.msg=data.message;
                    this.$alert(this.msg,'提示信息', {
                        confirmButtonText: '确定'
                    });
                }

            });
        }
    }
});
