var oldpassword_input=document.getElementById("oldpassword");
var newpassword_input=document.getElementById("newpassword");
var confirmpassword_input=document.getElementById("confirmpassword");

/**
 * input 标签的onfocus事件
 */
oldpassword_input.onfocus=function () {
    $('#error-oldpassword-null').hide();
}
newpassword_input.onfocus=function () {
    $('#error-newpassword-null').hide();
}
confirmpassword_input.onfocus=function () {
    $('#error-confirmpassword-null').hide();
    $('#error-password-equally').hide();
}


/**
 * 查询密码回显到一个隐藏域中
 */
window.onload=function () {
    $.post("/findPasswordByUid",function (data,status) {
        $('#oldpasswordcontrast').val(data.message);
    });
}

function updatePassword() {

    var oldpasswordcontrast = $('#oldpasswordcontrast').val();
    var oldpassword = $('#oldpassword').val();
    var newpassword = $('#newpassword').val();
    var confirmpassword = $('#confirmpassword').val();

    if(oldpassword == null | oldpassword == ""){
        $('#error-oldpassword-null').show();
        if(newpassword == null | newpassword == ""){
            $('#error-newpassword-null').show();
            if(confirmpassword == null | confirmpassword == ""){
                $('#error-confirmpassword-null').show();
                return false;
            }else {
                return false;
            }
        }else {
            if(confirmpassword == null | confirmpassword == ""){
                $('#error-confirmpassword-null').show();
                return false;
            }else {
                return false;
            }
        }
    }else {
        if(newpassword == null | newpassword == ""){
            $('#error-newpassword-null').show();
            if(confirmpassword == null | confirmpassword == ""){
                $('#error-confirmpassword-null').show();
                return false;
            }else {
                return false;
            }
        }else {
            if(confirmpassword == null | confirmpassword == ""){
                $('#error-confirmpassword-null').show();
                return false;
            }
        }
    }

    if(oldpassword != oldpasswordcontrast){
        $('#error-oldpassword-cantrast').show();
        return false;
    }else {
        if(newpassword != confirmpassword){
            $('#error-password-equally').show();
            return false;
        }else {
            $.post("/updatePasswordByUid",{confirmpassword:confirmpassword},function (data,status) {
                alert(data.message);
                location.reload();
            })
        }
    }
}
