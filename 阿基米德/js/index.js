/**
 * Created by zhaoce on 16/12/19.
 */
$(function() {

    //代码初始化
    var size=$(".img li").size();
    for (var i = 1; i <= size; i++) {
        var li="<li>"+"</li>";
        $(".num").append(li);
    };

    //手动控制轮播效果
    $(".img li").eq(0).show();
    $(".num li").eq(0).addClass("active");
    $(".num li").mouseover(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        i=index;
        $(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
    })

    //自动
    var i = 0;
    var t = setInterval(move, 3000);
    //核心向左的函数
    function moveLeft() {
        i--;
        if (i == -1) {
            i = size-1;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

    }
    //核心向右的函数
    function move() {
        i++;
        if (i == size) {
            i = 0;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

    }
    //定时器的开始与结束
    $(".out").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(move, 3000)
    })
    //左边按钮的点击事件
    $(".out .left").click(function() {
        moveLeft();
    })
    //右边按钮的点击事件
    $(".out .right").click(function() {
        move();
    })
})
//$("img").attr("class","Lazy_loading");
//懒加载
 function showImg() {
     //for(var i = 0; i < $(".Lazy_loading").length;i++){
     var sumHeight = document.documentElement.clientHeight + document.documentElement.scrollTop +
         document.body.scrollTop;
     var sumTop = $("#myImg").offset().top ;
     var sumTop1 = $(".photo_1").offset().top+200;
     var sumTop2 = $(".mouse_2").offset().top;
     if (sumTop <= sumHeight){
         $("#myImg").addClass('animated zoomIn');
     }
     if(sumTop1 <= sumHeight){
         $(".photo_1").addClass('animated rollIn');
     }
     if(sumTop2<=sumHeight){
         $(".mouse_2").addClass('animated flipInY');
     }
 }
window.onscroll = function(){
    showImg();
};

     //console.log(sumTop);
//     MouseWheelHandle(window,function(down,event){
//         if(down){
//             if(sumTop>=$(".out").height()/11){
//                 $(".Lazy_loading").eq(0).css({display:"block"});
//             }
//         }else if(down){
//             if(sumTop>=($("#About_us").height()/11)+($(".out").height())){
//                 $(".Lazy_loading").eq(1).css({display:"block"});
//             }
//         }
//     });

     //var a = $("#myImg").attr("mySrc");
     //$(document).on("mousewheel", function (e) {
     //    console.log();
     //    if ($(document).scrollTop()>500){
     //        $("#myImg").attr("src",a)
     //    }
     //});






 //   }
//showImg();
//
//setTimeout(function(){
//    for(var i=0;i<$(".Lazy_loading").length;i++){
//        console.log($(".Lazy_loading")[i].offsetTop);
//    }
//},5000)
