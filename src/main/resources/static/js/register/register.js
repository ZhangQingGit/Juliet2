layui.use('form', function(){
	var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

	//……

	//但是，如果你的HTML是动态生成的，自动渲染就会失效
	//因此你需要在相应的地方，执行下述方法来进行渲染
	form.render();
});

    var useremail_input=document.getElementById("useremail");
    var useremailpassword_input=document.getElementById("useremailpassword");
    var useremailcode_input=document.getElementById("useremailcode");

    var userphone_input=document.getElementById("userphone");
    var userphonepassword_input=document.getElementById("userphonepassword");
    var userphonecode_input=document.getElementById("userphonecode");

/**
 * input 标签的onfocus事件
 */
useremail_input.onfocus=function () {
    $('#error-email').hide();
    $('#error-email-format').hide();
}
useremailpassword_input.onfocus=function () {
    $('#error-email-password').hide();
}
useremailcode_input.onfocus=function () {
    $('#error-email-code').hide();
}
userphone_input.onfocus=function () {
    $('#error-phone').hide();
}
userphonepassword_input.onfocus=function () {
    $('#error-phone-password').hide();
}
userphonecode_input.onfocus=function () {
    $('#error-phone-code').hide();
}

/**
 * 切换邮箱验证码注册的方法
 */
function emailRegisterLi() {
	$('#register-email-form').show();
	$('#register-phone-form').hide();
}

/**
 * 切换手机验证码注册的方法
 */
function phonelRegisterLi() {
	$('#register-email-form').hide();
	$('#register-phone-form').show();
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

/*
* 获取邮箱验证码的方法
* */
var countdown=60;
function emailCode(val) {
	var email=$('#useremail').val();
    if (email == null | email == ""){
        $('#error-email').show();
        return false;
    }
    countDown(val);
	$.post("email",{email:email},function(data,statu){
		alert(data.message);
	});
}

/*
* 用户邮箱注册非空验证的方法
* */
function emailRegister() {
	var username=$('#useremail').val();
	var password=$('#useremailpassword').val();
	var code=$('#useremailcode').val();

    if(username == null | username == ""){
        $('#error-email').show();
        if (password == null | password == ""){
            $('#error-email-password').show();
            if(code ==null | code == ""){
                $('#error-email-code').show();
                return false;
            }else{
                return false;
            }
        }else{
            if(code ==null | code == ""){
                $('#error-email-code').show();
                return false;
            }else{
                return false;
            }
        }
    }else{
        if(!(checkEmail(username))){
            $('#error-email-format').show();
        };
        if (password == null | password == "") {
            $('#error-email-password').show();
            if (code == null | code == "") {
                $('#error-email-code').show();
                return  false;
            }else{
                return  false;
            }
        }else{
            if (code == null | code == "") {
                $('#error-email-code').show();
                return false;
            }
        }
    }

}

/**
 * 手机正则
 * @param phone 传入的参数
 * @returns {boolean}  true 格式正确  false 格式正确
 */
function checkPhone(phone) {
    var phoneReg = /^1[3456789]\d{9}$/;
    return phoneReg.test(phone);
}

/*
* 获取手机验证码的方法
* */
function phoneCode(val) {
    var phone=$('#userphone').val();
    if (phone == null | phone == ""){
        $('#error-phone').show();
        return false;
    }
    countDown(val);
    $.post("phone",{phone:phone},function(data,statu){
        alert(data.message);
    });
}

/**
 * 60秒倒计时的方法
 * @param val
 */
function countDown(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        $('#email-code-register').css("color","#00B38A");
        $('#phone-code-register').css("color","#00B38A");
        val.value="获取验证码";
        countdown = 60;
    } else {
        val.setAttribute("disabled", true);
        $('#email-code-register').css("width","70px");
        $('#email-code-register').css("color","gray");
        $('#phone-code-register').css("width","70px");
        $('#phone-code-register').css("color","gray");
        val.value = ""+countdown+"s";
        countdown--;
        setTimeout(function () {
            countDown(val)
        }, 1000)
    }
}
/*
* 用户手机验证码注册的方法
* */
function phonelRegister() {
    var username=$('#userphone').val();
    var password=$('#userphonepassword').val();
    var code=$('#userphonecode').val();

    if(username == null | username == ""){
        $('#error-phone').show();
        if (password == null | password == ""){
            $('#error-phone-password').show();
            if(code ==null | code == ""){
                $('#error-phone-code').show();
                return false;
            }else{
                return false;
            }
        }else{
            if(code ==null | code == ""){
                $('#error-phone-code').show();
                    return false;
            }else{
                    return false;
            }
        }
    }else{
        if (!(checkPhone(username))){
            $('#error-phone-format').show();
        }
        if (password == null | password == "") {
            $('#error-phone-password').show();
            if (code == null | code == "") {
                $('#error-phone-code').show();
                    return false;
            }else{
                return false;
            }
        }else{
            if (code == null | code == "") {
                $('#error-phone-code').show();
                    return false;
            }
        }
    }

}