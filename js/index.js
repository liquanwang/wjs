/**
 * Created by l on 2019/10/17.
 */
$(function() {
    /*初始化工具提示插件*/
    $('[data-toggle="tooltip"]').tooltip()
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
        interval: 4000
    });
/*计算产品块导航项的宽度*/
  var ul = $('.wjs_product .nav-tabs');
    var lis = ul.find('li');
    var ulWidth =0;
    lis.each(function(index,value) {
ulWidth = ulWidth + $(value).outerWidth(true);
    });
    ul.width(ulWidth);
    /*使用插件实现导航条的滑动操作*/
    var myScroll = new IScroll('.tabs_parent',{
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });
   /* 模态框*/

});

