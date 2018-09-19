$(function () {
    //阶段内容
    // var tr = "", p = '', http = '', endDateStr = '';
    // GetStageContent(function (response) {
    //     if (response.errcode == '0') {
    //         var data = response.rows;
    //         $.each(data, function (i, val) {
    //             if (data[i].stage == 'Expected Online Time') {
    //                 endDateStr = data[i].content;
    //                 timer = setInterval(function () {
    //                     TimeDown(endDateStr);
    //                 }, 1000);
    //             }
    //             console.log(data[i]);
    //             if (data[i].stage == 'Use Tutorial') {
    //                 $('.useTutorial').attr('href', data[i].content);
    //             }
    //             if (data[i].stage == 'TRY DEMO') {
    //                 $('.tryDemo').attr('href', data[i].content);
    //             }
    //             if (data[i].stage == 'Project Download Address') {
    //                 $('.downLoad').attr('href', data[i].content);
    //             }
    //         });
    //         $("#stage").html(tr);
    //     }
    // }, function (response) {
    //     layer.msg(response.errmsg)
    // });

    //倒计时
    // var timer = "";
    // function TimeDown(endDateStr) {
    //     //结束时间
    //     var endDate = new Date(endDateStr);
    //     //当前时间
    //     var nowDate = new Date();
    //     //相差的总秒数
    //     var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //     if (totalSeconds <= 0) {
    //         clearInterval(timer);
    //         window.location.href = "http://joybtc.com/h5";
    //     }
    //     //天数
    //     var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //     //取模（余数）
    //     var modulo = totalSeconds % (60 * 60 * 24);
    //     //小时数
    //     var hours = Math.floor(modulo / (60 * 60));
    //     modulo = modulo % (60 * 60);
    //     //分钟
    //     var minutes = Math.floor(modulo / 60);
    //     modulo = modulo % (60);
    //     //秒
    //     var seconds = modulo % 60;
    //     if(days <= 0 && hours <= 0 && minutes<= 0){
    //         $(".daysBox, .hoursBox , .minutesBox").remove();
    //         $(".seconds").css("font-size", "20rem");
    //     }
    //     if (days < 10) {
    //         $(".days").text("0" + days);
    //     } else if (days <= 0) {
    //         $(".days").text("00");
    //         $(".hours").text("00");
    //         $(".minutes").text("00");
    //         $(".seconds").text("00");
    //     } else {
    //         $(".days").text(days);
    //     }
    //     if (hours < 10) {
    //         $(".hours").text("0" + hours);
    //     } else {
    //         $(".hours").text(hours);
    //     }
    //     if (minutes < 10) {
    //         $(".minutes").text("0" + minutes);
    //     } else {
    //         $(".minutes").text(minutes);
    //     }
    //     if (seconds < 10) {
    //         $(".seconds").text("0" + seconds);
    //     } else {
    //         $(".seconds").text(seconds);
    //     }
    // }

    // timer = setInterval(function () {
    //     TimeDown("2018/9/15 15:00");
    // }, 1000)
});