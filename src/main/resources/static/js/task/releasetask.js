function getnext(i){
    //alert(i);
    var sz=new Array("step1","step2","step3");
    for(var j=0;j<sz.length;j++){
        if(i==sz[j]){
            document.getElementById(i).style.display="block";
        }else{
            document.getElementById(sz[j]).style.display="none";
        }
    }

    var cname=$('#cname').val();
    var cemail=$('#cemail').val();
    var pname=$('#pname').val();
    var tasktype = $('#tasktype option:selected').text();
    var pmoney=$('#pmoney').val();
    var findate=$('#findate').val();
    var psynopsis=$('#psynopsis').val();

    if(i == "step2"){
        $.post("/task/taskPush_One",{cname:cname,cemail:cemail,pname:pname,tasktype:tasktype,pmoney:pmoney,
            findate:findate},function (data,status) {
            console.log(data);
        });
    }else{
        $.post("/task/taskPush_Two",{psynopsis:psynopsis},function (data,status) {
            console.log(data);
        });
    }
}

layui.use('form', function(){
    var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

    //……

    //但是，如果你的HTML是动态生成的，自动渲染就会失效
    //因此你需要在相应的地方，执行下述方法来进行渲染
    form.render();
});

var demand=3;
var j;
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

function demandDemo() {
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

    $.post("/task/taskPush_Three",{core:core},function (data,status) {
        //console.log(data);
    });

}