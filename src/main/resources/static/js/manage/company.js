layui.use('element', function(){
    var element = layui.element;

});


$(document).ready(function(json){
    //获取公司名字
    $.post("getName", function (data) {
        $("#d_name").append(data.message);
    });
});
/**
 * 发布任务的iframe
 */
function crTask() {
    $('#crtask').attr("src","crtask.html");
}


/**
 * 对我有意向的团队iframe
 */
function intentionCompany() {
    $('#crtask').attr("src","intentionteam.html");
}

/**
 * 个人基础信息iframe
 */
function basicInformation() {
    $('#crtask').attr("src","basicinformation.html");
    $('#crtask2').attr("src","basicinformation.html");
}

/**
 * 修改密码iframe
 */
function updatePassword() {
    //alert("我进来了");
    $('#crtask').attr("src","updatepassword.html");
}