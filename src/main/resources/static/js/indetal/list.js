$(document).ready(function(){
	$.post("showList",function (data) {
		console.log(data);
		for(var i=0; i<data.length;i++){
			$("#mainNavs").append('<div class="menu_box">'
                    +'<div class="menu_main job_hopping">'
                    +'<div class="category-list"style="text-align:center;">'
                       +'<h2 >'
                            +data[i].father
                        +'</h2>'
                        +'<i class="arrow"></i>'
                   +'</div>'
                +'</div>'
                +'<div class="menu_sub dn">'
                    +'<dl>'
                       +'<dd>'
                        +'</dd>'
                    +'</dl>'
                +'</div>'
            +'</div>')
		}
    });
});
$(document).ready(function() {

	$(".category").mouseover(function() {
		var cid = $(this).attr('c-id');
		$("#two-level-classification").html("");
		var text = "";
		$("div[name='" + cid + "']").each(function() {
			text += $(this).find(".clearfix").html()
		})

		$("#two-level-classification").html(text);

		$("#two-level-classification").show();
	});
	$(".category").mouseout(function() {
		$("#two-level-classification").hide();
	});
	$("#two-level-classification").mouseover(function() {
		var cid = $(this).attr('id');
		$("#" + cid).show();
	});
	$("#two-level-classification").mouseout(function() {
		var cid = $(this).attr('id');
		$("#" + cid).hide();
	});
});