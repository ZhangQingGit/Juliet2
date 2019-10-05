function teamPerfect() {

    var tname = $('#tname').val();
    var temail = $('#temail').val();
    var tphone = $('#tphone').val();
    var tasktype = $('#tasktype').val();
    var experience = $('#experience').val();

    $.post("teamReg",{tname:tname,temail:temail,tphone:tphone,tasktype:tasktype,
        experience:experience},function (data,status) {

        if(data.state == 200){
            window.location.href="releasetask.html"
        }else {
            alert(data.message);
        }
    });

}