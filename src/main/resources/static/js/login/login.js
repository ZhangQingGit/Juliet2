layui.use('form', function(){
	var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

	//……

	//但是，如果你的HTML是动态生成的，自动渲染就会失效
	//因此你需要在相应的地方，执行下述方法来进行渲染
	form.render();
});

	var user_email_phone_input=document.getElementById("useremailphone");
	var user_password_input=document.getElementById("userpassword");

    var user_phone_input=document.getElementById("userphone");
    var user_phone_password_input=document.getElementById("userphonepassword");

/**
 * input 标签的onfocus事件
 */
user_email_phone_input.onfocus=function () {
	$('#error-phone-email').hide();
}
user_password_input.onfocus=function () {
	$('#error-password').hide();
}
user_phone_input.onfocus=function () {
	$('#error-phone').hide();
}
user_phone_password_input.onfocus=function () {
	$('#error-phone-password').hide();
}

/**
 * 切换用户密码登录的方法
 */
function passwordLogin() {
	$('#login-email-phone-form').show();
	$('#login-phone-form').hide();
}

/**
 * 切换手机验证码登录的方法
 */
function codeLogin() {
	$('#login-email-phone-form').hide();
	$('#login-phone-form').show();
}

/**
 * 用户密码登陆的方法
 * */
function emailPhoneLogin() {
    //用户是否点击登录的标识变量
    //var relogin=$('#relogin').text();
    var username=$('#useremailphone').val();
    var password=$('#userpassword').val();

    if(username ==null | username == ""){
        if(password ==null | password == ""){
            $('#error-phone-email').show();
            $('#error-password').show();
            return false;
        }else{
            $('#error-phone-email').show();
            return false;
        }
    }else{
        if(password ==null | password == ""){
            $('#error-password').show();
            return false;
        }
    }
}

/*
* 获取手机验证码的方法
* */
function phoneCode() {
    var phone=$('#userphone').val();
    if(phone == null | phone == ""){
        $('#error-phone').show();
        return false;
    }
    $.post("phone",{phone:phone},function(data,statu){
        alert(data.message);
    });
}
/**
 * 用户手机验证码登陆的方法
 * */
function phoneCodeLogin() {
    //用户是否点击登录的标识变量
    //var relogin=$('#relogin').text();
    var username=$('#userphone').val();
    var password=$('#userphonepassword').val();

    if(username ==null | username == ""){
        if(password ==null | password == ""){
            $('#error-phone').show();
            $('#error-phone-password').show();
            return false;
        }else{
            $('#error-phone').show();
            return false;
        }
    }else{
        if(password ==null | password == ""){
            $('#error-phone-password').show();
            return false;
        }
    }

    /*if(username !=null | username != ""){
        if (password !=null | password != ""){
            $.post("login",{username:username,password:password},function (data,status) {

            });
        }
    }*/
}