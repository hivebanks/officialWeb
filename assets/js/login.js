$(function () {

    //code
    GetImgCode();

    //switch imgCode
    $(".imgCode").click(function () {
        GetImgCode();
    });

    //login
    $("#email").focus(function () {
        $(this).removeClass("redBorder");
    });
    $("#password").focus(function () {
        $(this).removeClass("redBorder");
    });
    $('.signUpBtn').click(function () {
        var email = $("#email").val();
        var password = $("#password").val(),
            pass_word_hash = hex_sha1(password),
            cfm_code = $("#imgCode").val();
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
        if (password.length <= 0) {
            layer.msg("Password cannot be empty.");
            $("#password").addClass("redBorder");
            return;
        }
        if (cfm_code.length <= 0) {
            layer.msg("Captcha cannot be empty.");
            $("#imgCode").addClass("redBorder");
            return;
        }
        var $this = $(this), btnText = $(this).text();
        if (DisableClick($this)) return;
        LoginLa(email, pass_word_hash, cfm_code, function (response) {
            layer.msg("Login success");
            ActiveClick($this, btnText);
            SetCookie("ser_token", response.token);
            window.location.href = "account.html"
        }, function (response) {
            GetImgCode();
            layer.msg(response.errmsg);
            ActiveClick($this, btnText);
        });
    })
});