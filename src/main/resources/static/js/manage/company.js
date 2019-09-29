layui.use('element', function(){
    var element = layui.element;

});

/*function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        alert(iframeWin.document.body.scrollHeight);
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};

window.onload = function () {
    alert("我进来了");
    setIframeHeight(document.getElementById('crtask'));
};*/

/**
 * 发布任务的iframe
 */
function crTask() {
    $('#crtask').attr("src","crtask.html");
}

/**
 * 对我有意向的公司iframe
 */
function intentionCompany() {
    $('#crtask').attr("src","intentioncompany.html");
}

/**
 * 个人基础信息iframe
 */
function basicInformation() {
    $('#crtask').attr("src","basicinformation.html");
}

/**
 * 修改密码iframe
 */
function updatePassword() {
    alert("我进来了");
    $('#crtask').attr("src","updatepassword.html");
}