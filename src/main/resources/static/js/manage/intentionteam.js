window.onload=function () {
    $.post("/findIntentionTeamByCname",function (data,status) {

        for (var i= 0; i<data.length;i++) {
            var pname=data[i].pname;
            var rid=data[i].rid;
            //rowspan=\""+rowspan+"\"
            var tnamelist=data[i].tname;
            var tidlist=data[i].tid;
            var rowspan=tnamelist.length;

            /* for (var j= 0; j<tnamelist.length;j++){*/
                for(var j=0;j<tidlist.length;j++){
                    var tid=tidlist[j];
                    if(j == 0 ){
                        if(rowspan>1){
                            $('#tbody0').append("<tr>\n" +
                                "                <td rowspan=\""+rowspan+"\"><a href=\"/taskdetails?rid="+rid+"\" target=\"_blank\">"+pname+"</a></td>\n" +
                                "                <td ><a href=\"/publisherdetails?tid="+tid+"\" target=\"_blank\">"+tnamelist[j].tname+"</a></td>\n" +
                                "            </tr>");
                        }else {
                            $('#tbody0').append("<tr>\n" +
                                "                <td><a href=\"/taskdetails?rid="+rid+"\" target=\"_blank\">"+pname+"</a></td>\n" +
                                "                <td><a href=\"/publisherdetails?tid="+tid+"\" target=\"_blank\">"+tnamelist[j].tname+"</a></td>\n" +
                                "            </tr>");
                        }

                    }else{
                        if(rowspan>1){
                            $('#tbody0').append("<tr>\n" +
                                "                <td><a href=\"/publisherdetails?tid="+tid+"\" target=\"_blank\">"+tnamelist[j].tname+"</a></td>\n" +
                                "            </tr>");
                        }
                    }
                }

            /* }*/

        }
    });
}