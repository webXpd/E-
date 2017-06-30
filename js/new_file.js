var i=n=0;
        var timer=null;
        $(function(){
/*1.圆点变红色*/
            $(".jd span").mouseenter(function(){
             $(this).addClass("red").siblings().removeClass("red");
                /*2 图片跟着变化*/
                var i=$(this).index();
                $(".lbt li").eq(i).show().siblings().hide();
/*6.获取鼠标位置的索引值*/
                n=i;
            })
            /*3定时器*/
           timer= setInterval(next,2000);
        })
    /*5 鼠标房子啊上面  定时器停止*/
    $(".banenr").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(next,2000);
    })
    /*6  ---鼠标返回后页面从多拿钱的位置进行切换---
    * 因为需要获取到鼠标华东的时候的位置的索引值，付给我们定时器
    * 在鼠标滑动的时候，去获取索引值n
    * */
    /*4函数*/

        function next(){
           n++;
           // var len=$(".banner ul li").length;
           // alert(len)
            if(n > 2){
                n = 0;
            }
            $(".jd span").eq(n).addClass("red").siblings().removeClass("red");
            $(".lbt li").eq(n).show().siblings().hide();
        }