$(function(){
  $(".error-pass, .error-email").hide();
  $(".overlay").hide();
  $(".confirmation").hide();
})

function checkEmail(email) {
  var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailReg.test(email);
}

function validateForm() {
  var countErrors = 0;
  var emailInput = $("input[type=email]");
  var passInput = $("input[type=password]");
  
  if(!checkEmail($(emailInput).val())) {
    $(".error-email").fadeIn();
    $(".email-msg").html("请输入正确的邮箱");
    $(emailInput).addClass("warning");
    countErrors++;
  } else {
    $(emailInput).removeClass("warning");
  }

  if(passInput.val().length < 5) {
    $(".error-pass").fadeIn();
    $(".pass-msg").html("密码必须至少有5个字符");
    $(passInput).addClass("warning");
    countErrors++;
  } else {
    $(passInput).removeClass("warning");
  }

  setTimeout(function showErrorMsg() {
    $(".error-email, .error-pass").fadeOut();
  }, 2000)

  if(countErrors === 0) {
    $(".overlay").show();
    $(".confirmation").show();
  }
}