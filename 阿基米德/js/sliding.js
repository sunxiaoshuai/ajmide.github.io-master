/**
 * Created by zhaoce on 16/12/26.
 */
jQuery(document).ready(function($) {
    $("#nav_content li a").click(function(event) {
        var index=this.title
        var Class='.'+'index_'+index
        $("html,body").animate({scrollTop: $(Class).offset().top}, 1000);
    });
    //以上的是点导航跳转至想要的区域

    //$(".taoba").click(function(event) {
    //    var index=this.title
    //    var id='#'+'index_'+index
    //    $("html,body").animate({scrollTop: $(Class).offset().top}, 1000);
    //});
    //侧面返回顶部
    //function a(x,y){
    //    l = $('#shuffling').offset().left;
    //    w = $('#shuffling').width();
    //    $('#tbox').css('left',(l + w + x) + 'px');
    //    $('#tbox').css('bottom',y + 'px');
    //}//获取#tbox的div距浏览器底部和页面内容区域右侧的距离函数#main为页面的可视宽度
    $(function() {
        $(window).scroll(function(){
            t = $(document).scrollTop();
            if(t>500){
                $('#tbox').show();
            }else{
                $('#tbox').hide();
            }
            if(t > 50){
                $('#gotop').fadeIn('slow');
            }else{
                $('#gotop').fadeOut('slow');
            }
        })
       // a(10,100);//#tbox的div距浏览器底部和页面内容区域右侧的距离
        $('#gotop').click(function(){
            $('body,html').animate({
                    scrollTop: 0
                },
                800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
            return false;
        })
    });
});

