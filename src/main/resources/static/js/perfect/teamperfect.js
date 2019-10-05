function teamPerfect() {

    var tname = $('#tname').val();
    var temail = $('#temail').val();
    var tphone = $('#tphone').val();
    var tasktype = $('#tasktype').val();
    var experience = $('#experience').val();

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