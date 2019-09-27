layui.use(['carousel', 'form'], function(){
    var carousel = layui.carousel,form = layui.form;
    carousel.render({
        elem: '#test10'
        ,width: '840px'
        ,height: '346px'
        ,interval: 5000
    });

});
