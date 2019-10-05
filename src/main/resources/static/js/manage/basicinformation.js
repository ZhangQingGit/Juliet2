window.onload=function () {
    $.post("findInformationByUid",function (data,status) {
        if(data.usertype == 1){
            $('#cname').val(data.cort.cname);
            $('#synopsis').val(data.cort.synopsis);
            $('#cphone').val(data.cort.cphone);
            $('#cemail').val(data.cort.cemail);
            $('#involve').val(data.cort.involve);
            $('#companyinformation').show();
        }else{
            $('#tname').val(data.cort.tname);
            $('#tphone').val(data.cort.tphone);
            $('#temail').val(data.cort.temail);
            $('#experience').val(data.cort.experience);
            $('#teaminformation').show();
        }
    });
}

function updateCompanyInformation() {

    $('#cname').val();
    $('#synopsis').val();
    $('#cphone').val();
    $('#cemail').val();
    $('#involve').val();

    $.post("updateCompanyInformation",{},function () {

    });

}

function updateTeamInformation() {

    $('#tname').val();
    $('#tphone').val();
    $('#temail').val();
    $('#experience').val();

    $.post("updateTeamInformation",{},function () {

    });

}