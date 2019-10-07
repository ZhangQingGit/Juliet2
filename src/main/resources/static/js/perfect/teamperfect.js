var tname_input=document.getElementById("tname");
var temail_input=document.getElementById("temail");
var tphone_input=document.getElementById("tphone");
var tasktype_input=document.getElementById("tasktype");
var experience_input=document.getElementById("experience");

/**
 * input 标签的onfocus事件
 */
tname_input.onfocus=function () {
    $('#error-tname-null').hide();
}
temail_input.onfocus=function () {
    $('#error-temail-null').hide();
}
tphone_input.onfocus=function () {
    $('#error-tphone-null').hide();
}
tasktype_input.onfocus=function () {
    $('#error-tasktype-null').hide();
}
experience_input.onfocus=function () {
    $('#error-experience-null').hide();
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

/**
 * 手机正则
 * @param phone 传入的参数
 * @returns {boolean}  true 格式正确  false 格式正确
 */
function checkPhone(phone) {
    var phoneReg = /^1[3456789]\d{9}$/;
    return phoneReg.test(phone);
}

function teamPerfect() {

    var tname = $('#tname').val();
    var temail = $('#temail').val();
    var tphone = $('#tphone').val();
    var tasktype = $('#tasktype').val();
    var experience = $('#experience').val();

    if(tname == null | tname == ""){
        $('#error-tname-null').show();
        if(temail == null | temail == ""){
            $('#error-temail-null').show();
            if(tphone == null | tphone == ""){
                $('#error-tphone-null').show();
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }else {
                if(!(checkPhone(tphone))){
                    $('#error-tphone-format').show();
                }
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }
        }else {
            if(!(checkEmail(temail))){
                $('#error-temail-format').show();
            }
            if(tphone == null | tphone == ""){
                $('#error-tphone-null').show();
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }else {
                if(!(checkPhone(tphone))){
                    $('#error-tphone-format').show();
                }
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }
        }
    }else {
        if(temail == null | temail == ""){
            $('#error-temail-null').show();
            if(tphone == null | tphone == ""){
                $('#error-tphone-null').show();
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }else {
                if(!(checkPhone(tphone))){
                    $('#error-tphone-format').show();
                }
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }
        }else {
            if(!(checkEmail(temail))){
                $('#error-temail-format').show();
            }
            if(tphone == null | tphone == ""){
                $('#error-tphone-null').show();
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }
            }else {
                if(!(checkPhone(tphone))){
                    $('#error-tphone-format').show();
                }
                if(tasktype == null | tasktype == ""){
                    $('#error-tasktype-null').show();
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }else {
                        return false;
                    }
                }else {
                    if(experience == null | experience == ""){
                        $('#error-experience-null').show();
                        return false;
                    }
                }
            }
        }
    }

    $.post("teamReg",{tname:tname,temail:temail,tphone:tphone,tasktype:tasktype,
        experience:experience},function (data,status) {

        if(data.state == 200){
            if (navigator.userAgent.indexOf('MSIE') > 0) { // close IE
                if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
                    window.opener = null;
                    window.close();
                } else {
                    window.open('', '_top');
                    window.top.close();
                }
            } else { // close chrome;It is effective when it is only one.
                window.opener = null;
                window.open('', '_self');
                window.close();
            }
        }else {
            alert(data.message);
        }
    });

}