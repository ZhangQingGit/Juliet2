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
            window.location.href="releasetask.html"
        }else {
            alert(data.message);
        }
    });

}