window.onload=function () {
    $.post("findInformationByUid",function (data,status) {

        $('#cname').val(data.cname);
        $('#synopsis').val(data.synopsis);
        $('#cphone').val(data.cphone);
        $('#cemail').val(data.cemail);
        $('#involve').val(data.involve);
        console.log(data.cname);
    });
}