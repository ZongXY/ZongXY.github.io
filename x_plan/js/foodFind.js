!function(window, document, $, undefined) {
    var $expTop = $('.exp-top');
    console.log($expTop);

    // 示例报告
    $expTop.on('click', function() {
        $('.option').slideToggle();
        $('.select').toggleClass('sd');
    });
    $('.option').find('li').on('click',function() {
        var $this = $(this);
        var  sle = $this.text();
        console.log(sle)
        $('.selected').text(sle);
        $('.option').slideUp();
        $('.select').removeClass('sd');
    });

    // 搜索
    var data = ['草莓', '苹果', '香蕉'];
    $('#search').on('click', function() {
        var iptVal = $('#iptval').val();
        $.each(data, function(key, val) {
            console.log(val)
            if($.trim(iptVal) == val) {
                $('.foods-wp').hide();
                $('.search-nothing').hide();
                $('.search-foods').show();
                return false;
            }else if($.trim(iptVal) == '') {
                $('.search-nothing').hide();
                $('.search-foods').hide();
                $('.foods-wp').show();
                return false;
            }else {
                $('.foods-wp').hide();
                $('.search-foods').hide();
                $('.search-nothing').show();
                $('.food-name').children('span').text(iptVal);
            }
        });
    });

    $('.foods').children('li').on('click', function() {
        var $this = $(this);
        var iptVal = $this.text();
        $.each(data, function(key, val) {
            console.log(val)
            if($.trim(iptVal) == val) {
                $('.foods-wp').hide();
                $('.search-nothing').hide();
                $('.search-foods').show();
                return false;
            }else if($.trim(iptVal) == '') {
                $('.search-nothing').hide();
                $('.search-foods').hide();
                $('.foods-wp').show();
                return false;
            }else {
                $('.foods-wp').hide();
                $('.search-foods').hide();
                $('.search-nothing').show();
                $('.food-name').children('span').text(iptVal);
            }
        })
    })
    // function onSearch() {
    //     var iptVal = $('#iptval').val();
    //     $.each(data, function(key, val) {
    //         console.log(val)
    //         if($.trim(iptVal) == val) {
    //             $('.foods-wp').hide();
    //             $('.search-nothing').hide();
    //             $('.search-foods').show();
    //             return false;
    //         }else if($.trim(iptVal) == '') {
    //             $('.search-nothing').hide();
    //             $('.search-foods').hide();
    //             $('.foods-wp').show();
    //             return false;
    //         }else {
    //             $('.foods-wp').hide();
    //             $('.search-foods').hide();
    //             $('.search-nothing').show();
    //             $('.food-name').children('span').text(iptVal);
    //         }
    //     })
    // }
    // 所含营养高低进度条
    // 'use strict';

    // var longData = '50%';
    // $('.tiao-bg').animate({
    //     width: longData
    // },1500);



    // var $window = $(window);
    // var winHeight = $(window).height() * 1.1;
    // $window.on("load", revealOnScroll);
    // $window.on("scroll", revealOnScroll);
    // function revealOnScroll() {
    //     var scrolled = $window.scrollTop();
    //     $(".animates:not(.animate)").each(function () {
    //         var $this = $(this),
    //             offsetTop = $this.offset().top;
    //         if (scrolled + winHeight > offsetTop) {
    //             var longData = '100%';
    //             $this.animate({
    //                 width: longData
    //             },1500);
                // if ($this.data('timeout')) {
                //     window.setTimeout(function () {
                //         $this.addClass('animate');
                //     }, parseInt($this.data('timeout'), 10));
                // } else {
                //     $this.addClass('animate ');
                // }
    //         }
    //     })
    // }

    // 所含营养高低进度条
    'use strict';
    var $window = $(window);
    var winHeight = $(window).height() * 1.1;
    $window.on("load", revealOnScroll);
    $window.on("scroll", revealOnScroll);
    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".animates:not(.animate)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + winHeight > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.addClass('animate');
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animate ');
                }
            }
        })
    }
}(window, document, jQuery)