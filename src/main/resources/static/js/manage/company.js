layui.use('element', function(){
    var element = layui.element;

});

layui.use('table', function(){
    var table = layui.table;

    table.render({
        elem: '#test'
        ,url:'/demo/table/user/'
        ,cols: [[
            ,{field:'id', width:50, title: '任务编号', sort: true}
            ,{field:'pname', title: '任务名称', width: 50}
            ,{field:'tdate', width:50, title: '发布时间'}
            ,{field:'psynopsis', width:50, title: '任务描述'}
            ,{field:'pmoney', width:50, title: '任务报价', sort: true}
            ,{field:'findate', width:50, title: '任务预期'}
            ,{field:'tasktype', width:100, title: '任务类型', sort: true}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:150}
        ]]
        ,page: true
    });
});
