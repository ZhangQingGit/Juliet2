function companyPerfect() {

    var cname = $('#cname').val();
    var involve = $('#involve').val();
    var cphone = $('#cphone').val();
    var cemail = $('#cemail').val();
    var homepage = $('#homepage').val();
    var capital = $('#capital').val();
    var synopsis = $('#synopsis').val();

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