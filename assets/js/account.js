$(function () {
    var token = GetCookie("ser_token");

    //toggle left nav
    $(".leftLink").click(function () {
        $(this).addClass("active").parent("li").siblings().find(".leftLink").removeClass("active");
    });

    $(".baseBtn").click(function () {
        $(".baseInfoBox").removeClass("none").siblings("div").addClass("none");
    });

    $(".rechargeBtn").click(function () {
        $(".rechargeBox").removeClass("none").siblings("div").addClass("none");
    });

    $(".rechargeBtcBtn").click(function () {
        $(".rechargeBtcBox").removeClass("none").siblings("div").addClass("none");
    });

    //recharge btc
    $(".rechargeBtcBtnConfirm").click(function () {
        var base_amount = $("#rechargeBtc").val();
        RechargeBtc(token, base_amount, function (response) {
            if(response.errcode == "0"){
                $(".copyAddressBox").removeClass("none");
                $("#bitAddress").val(response.bit_address);
            }
        }, function (response) {
            layer.msg(response.errmsg);
            return;
        })
    });

    //get rate
    var type = "sms", items = "";
    function GetRateFun(token, type) {
        GetRate(token, type, function (response) {
            if(response.errcode == "0"){
                var data = response.row[0];
                $(".option_key").text(data.option_key);
                $(".option_value").text(data.option_value);
                $("#recharge").val(data.option_value);
                items = data.option_value;
                if (type == "sms") {
                    $(".typeText").text("SMS messages");
                }
                if (type == "email") {
                    $(".typeText").text("mails");
                }
                if (type == "upload_file") {
                    $(".typeText").text("files to upload");
                }
            }
        }, function (response) {
            layer.msg(response.errmsg);
        })
    }
    // GetRateFun(token, type);

    //show rate
    $(".smsBtn").click(function () {
       type = "sms";
        GetRateFun(token, type);
    });
    $(".emailBtn").click(function () {
        type = "email";
        GetRateFun(token, type);
    });
    $(".uploadFileBtn").click(function () {
        type = "upload_file";
        GetRateFun(token, type);
    });
    //get server items
    GetInfoBase(token, function (response) {
        if (response.errcode == "0") {
            $(".account").text(response.row.email);
            $(".ctime").text(response.row.ctime);
            $(".key_code").text(response.row.key_code);
        }
    }, function (response) {
        layer.msg(response.errmsg);
        return;
    });

    //  open sms email file server
    //email
    function OpenEmailServerFun(type, email_amount){
        OpenEmailServer(token, type, email_amount, function (response) {
            if(response.errcode == "0"){
                layer.msg("Submitted successfully");
                return;
            }
        }, function (response) {
            layer.msg(response.errmsg);
            return;
        })
    }

    //sms
    function OpenSmsServerFun(type, sms_amount){
        OpenSmsServer(token, type, sms_amount, function (response) {
            layer.msg("Submitted successfully");
            return;
        }, function (response) {
            layer.msg(response.errmsg);
            return;
        })
    }
    //file upload
    function OpenFileServerFun(type, upload_file_amount){
        OpenFileServer(token, type, upload_file_amount, function (response) {
            layer.msg("Submitted successfully");
            return;
        }, function (response) {
            layer.msg(response.errmsg);
            return;
        })
    }

    $(".rechargeServerBtn").click(function () {
       if(type == "sms"){
           var sms_amount = $("#recharge").val();
           OpenSmsServerFun(type, sms_amount);
       }
        if(type == "email"){
           var email_amount = $("#recharge").val();
            OpenEmailServerFun(type, email_amount);
        }
        if(type == "upload_file"){
           var upload_file_amount = $("#recharge").val();
            OpenFileServerFun(type, upload_file_amount);
        }
    });

    //get recharge server list
    // function GetRechargeListFun(type) {
    //     GetRechargeQuestList(token, type, function (response) {
    //         if (response.errcode == "0") {
    //             var data = response.rows, tr = "", questType = "", status = "";
    //             if (data == "false") {
    //                 tr = "<tr><td colspan='5'>NO DATA</td></tr>";
    //                 return;
    //             }
    //             $.each(data, function (i, val) {
    //                 if (data[i].qa_flag == "0") {
    //                     status = "<td>Under Review</td>";
    //                 }
    //                 if (data[i].qa_flag == "1") {
    //                     status = "<td>Passed</td>";
    //                 }
    //                 if (data[i].type == "sms") {
    //                     questType = "<td>SMS</td>";
    //                 }
    //                 if (data[i].type == "email") {
    //                     questType = "<td>Email</td>";
    //                 }
    //                 if (data[i].type == "upload_file") {
    //                     questType = "<td>Upload File</td>";
    //                 }
    //                 tr += "<tr>" +
    //                     questType +
    //                     "<td>" + data[i].base_amount + "</td>" +
    //                     "<td>" + data[i].bit_amount + "</td>" +
    //                     "<td>" + data[i].tx_time + "</td>" +
    //                     status +
    //                     "</tr>";
    //             });
    //             $("#rechargeQuestList").html(tr);
    //         }
    //     }, function (response) {
    //         layer.msg(response.errmsg);
    //     });
    // }
    //
    // GetRechargeListFun(type);



    $("#recharge").bind("input", "propertychange", function () {
        $(".option_value").text($(this).val());
        $(".option_key").text($(this).val() / items);
    });

    //open server
    // $(".openBtn").click(function () {
    //     var base_amount = $("#priceVal").val();
    //     var bit_amount = $(".option_value").text();
    //     var $this = $(this), btnText = $(this).val();
    //     if (base_amount <= 0) {
    //         layer.msg("Please enter the correct amount");
    //         return;
    //     }
    //     if (base_amount.length <= 0) {
    //         layer.msg("Recharge amount cannot be empty");
    //         return;
    //     }
    //     if (DisableClick($this)) return;
    //     OpenServer(token, base_amount, bit_amount, type, function (response) {
    //         if (response.errcode == "0") {
    //             ActiveClick($this, btnText);
    //             $("#priceVal").val("");
    //             layer.msg("Submitted successfully");
    //             $(".inputBox").addClass("none");
    //             $(".addressBox").removeClass("none");
    //             $("#rechargeAddress").val(response.bit_address);
    //             GetRechargeListFun(type);
    //         }
    //     }, function (response) {
    //         ActiveClick($this, btnText);
    //         layer.msg(response.errmsg);
    //     })
    // });

    //logout
    $(".logOut").click(function () {
        DelCookie("ser_token");
        window.location.href = "login.html";
    });
});