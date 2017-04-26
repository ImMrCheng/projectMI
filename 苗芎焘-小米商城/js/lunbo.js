$(function () {
    var i = 0;
    var timer = null;

    // 封装成独立的函数，方便多次使用
    function toRight() {
        i++;
        i = i > 7 ? 0 : i;
        // eq(index) 作用是 在指定集合中选中 索引值为 index 的元素
        // siblings() 选中集合中的同级元素，但是不包含自己
        $('#dots-box > li').eq(i).addClass('active').siblings().removeClass('active');
        $('#imgs-box').css({ left: -i * $('img').width() + 'px' })
    }
    function toLeft() {
        i--;
        i = i < 0 ? 7 : i;
        $('#dots-box > li').eq(i).addClass('active').siblings().removeClass('active');
        $('#imgs-box').css({ left: -i * $('img').width() + 'px' })
    }
    function autoplay() {
        timer = setInterval(toRight, 2000);
    }
    function pause() {
        // 取消计时器
        clearInterval(timer);
    }
    // 按钮点击切换
    $('#to-right').click(toRight);
    $('#to-left').click(toLeft);
    // 自动轮播
    autoplay();
    $('main').hover(pause, autoplay);
    // 根据鼠标放在其中的一个点上，切换对应的图片
    $('#dots-box > li').each(function () {
        $(this).mouseover(function () {
            // 获取被选中的 点 的索引值
            var k = $(this).index()
            $('#dots-box > li').eq(k).addClass('active').siblings().removeClass('active');
            $('#imgs-box').css({ left: -k * $('img').width() + 'px' });
            // 在选中某一张图片鼠标离开后，自动播放时，能够沿着选中的那一张继续播放
            i = k;
        })
    })
})