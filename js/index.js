function mainRender() {
    $(function() {
        $("#root").css("zoom", "normal");
        let scale = document.body.clientWidth / 390;
        $("#root").css("zoom", scale);

        window.addEventListener(
            "resize",
            (function() {
                var timer;
                return function() {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(function() {
                        $("#root").css("zoom", "normal");
                        let scale = document.body.clientWidth / 390;
                        $("#root").css("zoom", scale);
                    }, 100);
                };
            })()
        );

        // 弹窗
        $("#pop").css("zoom", scale);

        window.addEventListener(
            "resize",
            (function() {
                var timer;
                return function() {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(function() {
                        $("#pop").css("zoom", "normal");
                        let scale = document.body.clientWidth / 390;
                        $("#pop").css("zoom", scale);
                    }, 100);
                };
            })()
        );
    });

    // IOS字体多了间距的处理 给节点添加 sp_system 类名
    // 判断当前用户是安卓端还是iOS端
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isAndroid = /android/i.test(userAgent);
    var isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var isPC = !isAndroid && !isIOS && !/Iron/.test(userAgent); // 添加了对 "Iron" 关键词的判断

    if (isAndroid) {
        console.log("Android");
    } else if (isIOS) {
        console.log("iOS");
    } else if (isPC) {
        console.log("PC");
    } else {
        $(".sp_system").css("letter-spacing", "-4px");
    }
}

mainRender();

$(function() {
    $(".option").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".sp-check-btn .sp-btn").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        let _index = $(this).index();
        $(".sp-check-tab").eq(_index).show().siblings().hide();
        if (_index == 0) {
            $(".sp-wrap").css({
                borderRadius: "0px 16px 0 0 "
            });
        } else if (_index == 2) {
            $(".sp-wrap").css({
                borderRadius: "16px 0px 0 0 "
            });
        } else {
            $(".sp-wrap").css({
                borderRadius: "16px 16px 0 0 "
            });
        }
    });

    $(".mask").click(function() {
        $(".mask").hide();
    });
});

function goBack() {
    window.history.go(-1);
}