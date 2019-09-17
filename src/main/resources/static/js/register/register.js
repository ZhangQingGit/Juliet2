layui.use('form', function(){
	var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

	//……

	//但是，如果你的HTML是动态生成的，自动渲染就会失效
	//因此你需要在相应的地方，执行下述方法来进行渲染
	form.render();
});

function emailRegisterLi() {
	//$(this).addClass("selected").siblings().removeClass("selected");
	$('#register-email-form').show();
	$('#register-phone-form').hide();
}

function phonelRegisterLi() {

	$('#register-email-form').hide();
	$('#register-phone-form').show();
}


function register() {
	alert("adadsd");
}

function emailRegister() {
	/*var useremail=$('#useremail').val();
	alert(useremail);
	$.post("email",{useremail:useremail},function(data,statu){

	});*/
}

function emailCode() {
	var email=$('#useremail').val();
	alert(email);
	$.post("email",{email:email},function(data,statu){

	});
}