
var cname_input=document.getElementById("cname");
var involve_input=document.getElementById("involve");
var cphone_input=document.getElementById("cphone");
var cemail_input=document.getElementById("cemail");
var homepage_input=document.getElementById("homepage");
var capital_input=document.getElementById("capital");
var synopsis_input=document.getElementById("synopsis");

/**
 * input 标签的onfocus事件
 */
cname_input.onfocus=function () {
    $('#error-cname-null').hide();
}
involve_input.onfocus=function () {
    $('#error-involve-null').hide();
}
cphone_input.onfocus=function () {
    $('#error-cphone-null').hide();
}
cemail_input.onfocus=function () {
    $('#error-cemail-null').hide();
}
homepage_input.onfocus=function () {
    $('#error-homepage-null').hide();
}
capital_input.onfocus=function () {
    $('#error-capital-null').hide();
}
synopsis_input.onfocus=function () {
    $('#error-synopsis-null').hide();
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

function companyPerfect() {

    var cname = $('#cname').val();
    var involve = $('#involve').val();
    var cphone = $('#cphone').val();
    var cemail = $('#cemail').val();
    var homepage = $('#homepage').val();
    var capital = $('#capital').val();
    var synopsis = $('#synopsis').val();

    if(cname == null | cname == ""){
        $('#error-cname-null').show();
        if(involve == null | involve == ""){
            $('#error-involve-null').show();
            if(cphone == null | cphone == ""){
                $('#error-cphone-null').show();
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else {
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    }
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }
            }else{
                if (!(checkPhone(cphone))){
                    $('#error-cphone-format').show();
                }
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else {
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }
            }
        }else{
            if(cphone == null | cphone == ""){
                $('#error-cphone-null').show();
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else {
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }
            }else{
                if (!(checkPhone(cphone))){
                    $('#error-cphone-format').show();
                }
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else{
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else{
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else{
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else{
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }else {
        if(involve == null | involve == ""){
            $('#error-involve-null').show();
            if(cphone == null | cphone == ""){
                $('#error-cphone-null').show();
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else {
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }
            }else{
                if (!(checkPhone(cphone))){
                    $('#error-cphone-format').show();
                }
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }
                        }
                    }
                }else {
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }
            }
        }else{
            if(cphone == null | cphone == ""){
                $('#error-cphone-null').show();
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else {
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }
            }else{
                if (!(checkPhone(cphone))){
                    $('#error-cphone-format').show();
                }
                if(cemail == null | cemail == ""){
                    $('#error-cemail-null').show();
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else {
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }
                }else{
                    if(!(checkEmail(cemail))){
                        $('#error-cemail-format').show();
                    };
                    if(homepage == null | homepage == ""){
                        $('#error-homepage-null').show();
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else {
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }
                    }else{
                        if(capital == null | capital == ""){
                            $('#error-capital-null').show();
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }else {
                                return false;
                            }
                        }else{
                            if(synopsis == null | synopsis == ""){
                                $('#error-synopsis-null').show();
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }

    $.post("companyReg",{cname:cname,involve:involve,cphone:cphone,cemail:cemail,
        homepage:homepage,capital:capital,synopsis:synopsis},function (data,status) {

        if(data.state == 200){
            window.location.href="releasetask";
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