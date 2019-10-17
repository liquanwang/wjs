/**
 * Created by l on 2019/10/17.
 */
$(function() {
    var items=$(".carousel-inner .item");
    /*获取屏幕的大小改变*/
    $(window).on("resize",function(){
        var width=$(window).width();
        /*2.判断屏幕的宽度*/
        if(width>=768){/*非移动端*/
            $(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("largeImage");
                //console.log(imgSrc);
                /*添加非移动端的子元素*/
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
    }else {/*移动端*/
            $(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                //console.log(imgSrc);
                item.html($('<a href="javascript:;" class="mobileImg"> <img src="'+imgSrc+'" alt="..."></a>'));
            });
        }
}).trigger('resize');
    /*移动端手指滑动轮播*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];
    /*获取当前轮播图*/
    var carousel=$(".carousel");
    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });
    carousel.carousel({
        interval: 2000
    });

});

