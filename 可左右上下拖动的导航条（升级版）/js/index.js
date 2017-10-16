$(function () {
    var widths = 0;
    var lists = $('.header li');
    var header_hooks = document.querySelector('.header_hook');
    for (var i = 0; i < lists.length; i++) {
        widths += lists.eq(i).outerWidth() + 0.1;
    }
    $('.header ul').width(widths);
    console.log(widths);

    //点击给li添加字体颜色和下划线
    lists.on('click', function () {
        $(this).addClass('color').siblings('li').removeClass('color');
    })
    initScroll();

    //初始化betterScroll
    function initScroll() {
        var scroll = new window.BScroll(header_hooks, {
            scrollY: false,
            scrollX: true,
            probeType: 3,
            click: true
        });
    }
})