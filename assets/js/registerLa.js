$(function () {
    //show register form box
    $(".showRegisterFormBtn").click(function () {
        $(".registerForm").removeClass("none");
        $(".beforeRegisterText").remove();
    });

    //code
    GetImgCode();

    //switch imgCode
    $(".imgCode").click(function () {
        GetImgCode();
    });
    //register
    $("#email").focus(function () {
        $(this).removeClass("redBorder");
    });
    $("#password").focus(function () {
        $(this).removeClass("redBorder");
    });
    $("#name").focus(function () {
        $(this).removeClass("redBorder");
    });
    $('.signUpBtn').click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        var name = $("#name").val();
        var cfm_code = $("#imgCode").val();
        var pass_word_hash = hex_sha1(password);
        if (email.length <= 0) {
            layer.msg("Mailbox cannot be empty.");
            $("#email").addClass("redBorder");
            return;
        }
        if (!(IsEmail(email))) {
            layer.msg("Email format error");
            $("#email").addClass("redBorder");
            return;
        }
        if(password.length <= 0){
            layer.msg("Password cannot be empty.");
            $("#password").addClass("redBorder");
            return;
        }
        if (name.length <= 0) {
            layer.msg("Name cannot be empty.");
            $("#name").addClass("redBorder");
            return;
        }
        if (cfm_code.length <= 0) {
            layer.msg("Captcha cannot be empty.");
            $("#imgCode").addClass("redBorder");
            return;
        }
        var $this = $(this), btnText = $(this).text();
        if(DisableClick($this)) return;
        RegisterLa(email, pass_word_hash, name, cfm_code, function (response) {
            if(response.errcode == '0'){
                layer.msg("Please go to the mailbox to verify");
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 3000);
                ActiveClick($this, btnText);
            }
        }, function (response) {
            GetImgCode();
            layer.msg(response.errmsg);
            ActiveClick($this, btnText);
        });
    })
});