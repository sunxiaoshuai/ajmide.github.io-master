/**
 * Created by zhaoce on 16/10/26.
 */
//封装滚轮事件
function MouseWheelHandle(obj,handle){
    var info = navigator.userAgent;
    var down = null;//用来记录滚轮上下,down=true表示向上
    if(info.indexOf("Firefox")!= -1){
        obj.addEventListener("DOMMouseScroll",function (event){
            var ev = event ||window.event;
            if(ev.detail > 0){
                //不做任何具体事
                down = true;
            }else {
                down = false;
            }
            //调用外部传递的事件处理程序
           // handle(down,ev);
            handle.apply(obj,[down,ev]);
            //apply 每个函数都可以自带这个方法,这个方法可以切换函数的运行环境
            //如果函数需要传递参数,以数组的形似传递
        },false);
    }else {
        obj.onmousewheel = function(event){
            var ev = event ||window.event;
            if(ev.wheelDelta > 0 ){
                down = false;
            }else {
                down = true;
            }
         //   handle(down,ev);
           //每个函数也都有一个call方法,它的功能和apply 一样,都可以切换一个函数的调用者(运行环境)
            //call 和 apply 唯一的区别在于:函数有参数的,传递方式不一样,call 一次传递参数,参数用逗号隔开即可
            handle.call(obj,down,ev);
        }
    }
}