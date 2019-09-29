function GetRequest() {
	var rid;
	var url = location.search; //获取url中"?"符后的字串
	if (url.indexOf("?") != -1) {    //判断是否有参数
      var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
      strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
//      alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
      rid = strs[1];
	   }
	var d_name;
	$.post("getName", function (data) {
		$("#d_name").append(data.message);
		d_name = data.message;
	});
	
	$.post("/task/datails",{rid:rid},function(data) {
		$("#d_pname").append(data.data.pname);
		$("#d_cname").append(data.data.cname);
		$("#d_pmoney").append(data.data.pmoney);
		$("#d_findate").append(data.data.findate);
		$("#d_tasktype").append(data.data.tasktype);
		$("#d_psynopsis").append(data.data.psynopsis);
		$("#d_core").append(data.data.core);

		$.post("taskShow", {cname: data.data.cname}, function (json) {
			$("#c_name").append(json.data.cname);
			$("#c_involve").append(json.data.involve);
			$("#c_email").append(json.data.cemail);
			$("#c_phone").append(json.data.cphone);
			$("#c_capital").append(json.data.capital);
			$("#c_homepage").append('<i class="icon-glyph-home"></i>'
				+'<a href="http://'+json.data.homepage+'" target="_blank"'
			+'rel="nofollow"><h4 class="c_feature_name">'+json.data.homepage+'</h4></a>');
		});


		
		$("#want").click(function(){
			$.post("bid_relation",{cname:data.data.cname,pname:data.data.pname,tname:d_name},function(data){
				alert(data.message);
			});
		});
		
		$("#notwant").click(function(){
			$.post("del_relation",{cname:data.data.cname,pname:data.data.pname,tname:d_name},function(data){
				alert(data.message);
			});
		});
	});
}