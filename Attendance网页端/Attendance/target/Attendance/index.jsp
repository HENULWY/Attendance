<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>登录</title>
    <link rel="stylesheet" href="<%=path%>/css/normalize.css">
    <link rel="stylesheet" href="<%=path%>/css/login.css">
    <link rel="stylesheet" href="<%=path%>/css/sign-up-login.css">
    <link rel="stylesheet" type="text/css" href="<%=path%>/css/font-awesome.min.css">
    <link rel="stylesheet" href="<%=path%>/css/inputEffect.css">
    <link rel="stylesheet" href="<%=path%>/css/tooltips.css">
    <link rel="stylesheet" href="<%=path%>/css/spop.min.css">

    <script src="<%=path%>/js/jquery.min.js"></script>
    <script src="<%=path%>/js/jquery.pure.tooltips.js"></script>
    <script src="<%=path%>/js/spop.min.js"></script>
    <script>
        (function () {
            if (!String.prototype.trim) {
                (function () {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function () {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
                // in case the input is already filled..
                if (inputEl.value.trim() !== '') {
                    classie.add(inputEl.parentNode, 'input--filled');
                }

                // events:
                inputEl.addEventListener('focus', onInputFocus);
                inputEl.addEventListener('blur', onInputBlur);
            });

            function onInputFocus(ev) {
                classie.add(ev.target.parentNode, 'input--filled');
            }

            function onInputBlur(ev) {
                if (ev.target.value.trim() === '') {
                    classie.remove(ev.target.parentNode, 'input--filled');
                }
            }
        })();

        $(function () {
            $('#login #userPassword').focus(function () {
                $('.login-owl').addClass('password');
            }).blur(function () {
                $('.login-owl').removeClass('password');
            });
            $('#login #register_password').focus(function () {
                $('.register-owl').addClass('password');
            }).blur(function () {
                $('.register-owl').removeClass('password');
            });
            $('#login #register_repassword').focus(function () {
                $('.register-owl').addClass('password');
            }).blur(function () {
                $('.register-owl').removeClass('password');
            });
            $('#login #forget-password').focus(function () {
                $('.forget-owl').addClass('password');
            }).blur(function () {
                $('.forget-owl').removeClass('password');
            });
        });

        function goto_register() {
            $("#register_account").val("");
            $("#register_password").val("");
            $("#register_repassword").val("");
            $("#register_Phone").val("");
            $("#tab-2").prop("checked", true);
        }

        function goto_login() {
            $("#userAccount").val("");
            $("#userPassword").val("");
            $("#tab-1").prop("checked", true);
        }

        //登录
        function login() {
            var username = $("#userAccount").val(),
                password = $("#userPassword").val(),
                validatecode = null,
                flag = false;
            //判断用户名密码是否为空
            if (username == "") {
                $.pt({
                    target: $("#userAccount"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "用户名不能为空"
                });
                flag = true;
            }
            if (password == "") {
                $.pt({
                    target: $("#userPassword"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "密码不能为空"
                });
                flag = true;
            }
            //用户名只能是15位以下的字母或数字
            var regExp = new RegExp("^[a-zA-Z0-9_]{1,15}$");
            if (!regExp.test(username)) {
                $.pt({
                    target: $("#userAccount"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "用户名必须为15位以下的字母或数字"
                });
                flag = true;
            }

            if (flag) {
                return false;
            } else {
                $.ajax({
                    url: "http://localhost/attendance/user/login.do" ,//url
                    data: $('#loginForm').serialize(),
                    type: "POST",//方法类型
                    dataType:"text",
                    success: function (result) {
                        if(result=="error"){
                            alert("密码错误");
                        }else{
                            window.location.href=result;
                        }
//                        alert(result.trueResult);
//                        alert(result.falseResult);
//                        alert(result["trueResult"]);
//                        alert(result["falseResult"]);
                    },
                    error : function(result) {
                        alert(result);
                        alert("网络错误");
                    }
                });
//                $("#loginForm").submit();
                return true;
            }
        }

        //注册
        function register() {
            var username = $("#register_account").val(),
                password = $("#register_password").val(),
                repassword = $("#register_repassword").val(),
                code = $("#register_Phone").val(),
                flag = false,
                validatecode = null;
            //判断用户名密码是否为空
            if (username == "") {
                $.pt({
                    target: $("#register_account"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "用户名不能为空"
                });
                flag = true;
            }
            if (password == "") {
                $.pt({
                    target: $("#register_password"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "密码不能为空"
                });
                flag = true;
            } else {
                if (password != repassword) {
                    $.pt({
                        target: $("#register_repassword"),
                        position: 'r',
                        align: 't',
                        width: 'auto',
                        height: 'auto',
                        content: "两次输入的密码不一致"
                    });
                    flag = true;
                }
            }
            //用户名只能是15位以下的字母或数字
            var regExp = new RegExp("^[a-zA-Z0-9_]{1,15}$");
            if (!regExp.test(username)) {
                $.pt({
                    target: $("#register_account"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "用户名必须为15位以下的字母或数字"
                });
                flag = true;
            }
            //检查用户名是否已经存在
            //调后台代码检查用户名是否已经被注册

            //检查注册码是否正确
            //调后台方法检查注册码，这里写死为11111111
            if (code.length != 11) {
                $.pt({
                    target: $("#register_Phone"),
                    position: 'r',
                    align: 't',
                    width: 'auto',
                    height: 'auto',
                    content: "手机号码不正确"
                });
                flag = true;
            }


            if (flag) {
                return false;
            } else {//注册
                $.ajax({
                    url: "user/register.do" ,//url
                    data: $('#registerForm').serialize(),
                    type: "POST",//方法类型
                    dataType:"text",
                    success: function (result) {
                        if(result=="success"){
                            spop({
                                template: '<h4 class="spop-title">注册成功</h4>即将于3秒后返回登录',
                                position: 'top-center',
                                style: 'success',
                                autoclose: 3000,
                                onOpen: function () {
                                    var second = 2;
                                    var showPop = setInterval(function () {
                                        if (second == 0) {
                                            clearInterval(showPop);
                                        }
                                        $('.spop-body').html('<h4 class="spop-title">注册成功</h4>即将于' + second + '秒后返回登录');
                                        second--;
                                    }, 1000);
                                },
                                onClose: function () {
                                    goto_login();
                                }
                            });
                        }else{
                            alert("注册错误");
                        }
                    },
                    error : function(result) {
                        alert("网络错误");
                    }
                });

                return false;
            }
        }
    </script>
    <style type="text/css">
        html {
            width: 100%;
            height: 100%;
        }

        body {
            width: 100%;
            background-size: 100%;
            height:auto;
            /*background:url("/img/blue_back.jpg") no-repeat;*/
            /*background-image:url("/img/blue_back.jpg") no-repeat;*/
            /*background-image: url(img/blue_back.jpg) no-repeat;*/
            background-repeat: no-repeat;

            background-color: #00BDDC;

            background-size: 100% 100%;

            background: #092756;
            background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
            background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
            background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
            background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
            background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
        }

        .Attendance {
            bottom: 0;
            margin: 0 auto;
        }

    </style>
</head>
<body>


<!-- 登录控件 -->
<div id="login">
    <input id="tab-1" type="radio" name="tab" class="sign-in hidden" checked="">
    <input id="tab-2" type="radio" name="tab" class="sign-up hidden">
    <input id="tab-3" type="radio" name="tab" class="sign-out hidden">
    <div class="wrapper">
        <!-- 登录页面 -->
        <div class="login sign-in-htm">
            <form class="container offset1 loginform" id="loginForm" action="user/login.do" method="post">
                <div class="pad input-container">
                    <div class="Attendance">
                        <h3 style="font-family:verdana;color:black;font-weight:bolder;">考勤系统</h3>
                    </div>
                    <section class="content">
							<span class="input input--hideo">
								<input class="input__field input__field--hideo" type="text" name="userAccount" id="userAccount"
                                       autocomplete="off" placeholder="请输入用户名" tabindex="1" maxlength="15">
								<label class="input__label input__label--hideo" for="userAccount">
									<i class="fa fa-fw fa-user icon icon--hideo"></i>
									<span class="input__label-content input__label-content--hideo"></span>
								</label>
							</span>
                        <span class="input input--hideo">
								<input class="input__field input__field--hideo" type="password" name="userPassword" id="userPassword"
                                       placeholder="请输入密码" tabindex="2" maxlength="15">
								<label class="input__label input__label--hideo" for="userPassword">
									<i class="fa fa-fw fa-lock icon icon--hideo"></i>
									<span class="input__label-content input__label-content--hideo"></span>
								</label>
							</span>
                    </section>
                </div>
                <div class="form-actions">
                    <a tabindex="4" class="btn pull-left btn-default text-muted" onclick="goto_register()">注册</a>
                    <input class="btn btn-primary" type="button" tabindex="3" onclick="login()" value="登录"
                           style="color:white;">
                </div>
            </form>
        </div>
        <!-- 注册页面 -->
        <div class="login sign-up-htm">
            <form action="/user/register.do" id="registerForm" method="post" class="container offset1 loginform">
                <div class="pad input-container">
                    <div class="Attendance">
                        <h3 style="font-family:verdana;color:black;font-weight:bolder;">考勤系统</h3>
                    </div>
                    <section class="content">
							<span class="input input--hideo">
								<input class="input__field input__field--hideo" type="text" id="register_account" name="userAccount"
                                       autocomplete="off" placeholder="请输入用户名" maxlength="15">
								<label class="input__label input__label--hideo" for="register_account">
									<i class="fa fa-fw fa-user icon icon--hideo"></i>
									<span class="input__label-content input__label-content--hideo"></span>
								</label>
							</span>
                        <span class="input input--hideo">
								<input class="input__field input__field--hideo" type="password" id="register_password" name="userPassword"
                                       placeholder="请输入密码" maxlength="15">
								<label class="input__label input__label--hideo" for="register_password">
									<i class="fa fa-fw fa-lock icon icon--hideo"></i>
									<span class="input__label-content input__label-content--hideo"></span>
								</label>
							</span>
                        <span class="input input--hideo">
								<input class="input__field input__field--hideo" type="password" id="register_repassword"
                                       placeholder="请确认密码" maxlength="15">
								<label class="input__label input__label--hideo" for="register_repassword">
									<i class="fa fa-fw fa-lock icon icon--hideo"></i>
									<span class="input__label-content input__label-content--hideo"></span>
								</label>
							</span>
                        <span class="input input--hideo">
								<input class="input__field input__field--hideo" type="text" id="register_Phone" name="userPhone"
                                       autocomplete="off" placeholder="请输入手机号码">
								<label class="input__label input__label--hideo" for="register_Phone">
									<i class="fa fa-fw fa-wifi icon icon--hideo"></i>
									<span class="input__label-content input__label-content--hideo"></span>
								</label>
							</span>
                    </section>
                </div>
                <div class="form-actions">
                    <a class="btn pull-left btn-default text-muted" onclick="goto_login()">返回登录</a>
                    <input class="btn btn-primary" type="button" onclick="register()" value="注册" style="color:white;">
                </div>
            </form>
        </div>
    </div>
</div>

</body>
</html>
