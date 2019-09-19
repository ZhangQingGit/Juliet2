layui.use('form', function(){
	var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

	//……

	//但是，如果你的HTML是动态生成的，自动渲染就会失效
	//因此你需要在相应的地方，执行下述方法来进行渲染
	form.render();
});

function emailRegisterLi() {
	$(this).addClass("selected").siblings().removeClass("selected");
	$('#register-email-form').show();
	$('#register-phone-form').hide();
}


function phonelRegisterLi() {
    $(this).addClass("selected").siblings().removeClass("selected");
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
function emailCode() {
	var email=$('#useremail').val();
	//alert(email);
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
	var usertype = $('input:radio:checked').val();

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
            }else{
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
function phoneCode() {
    var phone=$('#userphone').val();
    $.post("phone",{phone:phone},function(data,statu){
        alert(data.message);
    });
}

/*
* 用户手机验证码注册的方法
* */
function phonelRegister() {
    var username=$('#userphone').val();
    var password=$('#userphonepassword').val();
    var code=$('#userphonecode').val();
    var usertype = $('input:radio:checked').val();

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
            }else{
                return false;
            }
        }
    }

}