layui.use('form', function(){
	var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

	//……

	//但是，如果你的HTML是动态生成的，自动渲染就会失效
	//因此你需要在相应的地方，执行下述方法来进行渲染
	form.render();
});

	var email_phone_input=document.getElementById("email-phone");
	var password_input=document.getElementById("password");

	var email_phone=$('#email-phone').val();
	var password=$('#password').val();


function loginEmailPhone() {
	//用户是否点击登录的标识变量
	var relogin=$('#relogin').text();

	if (email_phone ==null | email_phone == ""){
		$('#error-phone-email').show();
	}
	if(password ==null | password == "" ){
		$('#error-password').show();
	}
	$('#relogin').text(1);
}
email_phone_input.onfocus=function () {
	var relogin=$('#relogin').text();

	$('#error-phone-email').show();
}
password_input.onfocus=function () {
	var relogin=$('#relogin').text();
	$('#error-phone-email').show();
}

function passwordLogin() {
	$('#login-email-phone-form').show();
	$('#login-phone-form').hide();
}

function codeLogin() {
	$('#login-email-phone-form').hide();
	$('#login-phone-form').show();
}