<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="考勤小程序考勤系统">
    <meta name="author" content="ylw">

    <title>考勤系统</title>

    <!-- Bootstrap core CSS -->
    <link href="<%=path%>/css/bootstrap.css" rel="stylesheet">
    <!-- Add custom CSS here -->
    <link href="<%=path%>/css/sb-admin.css" rel="stylesheet">
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="<%=path%>/css/morris-0.4.3.min.css">
    <link rel="stylesheet" href="<%=path%>/font-awesome/css/font-awesome.min.css">
    <!-- JavaScript -->
    <script src="<%=path%>/js/jquery.min.js"></script>
    <script src="<%=path%>/js/bootstrap.js"></script>
    <script src="<%=path%>/js/raphael-min.js"></script>
    <script src="<%=path%>/js/morris-0.4.3.min.js"></script>
    <script src="<%=path%>/laydate/laydate.js"></script>
    <script>
        lay('#version').html('-v' + laydate.v);
        //执行一个laydate实例
        laydate.render({
            elem: '#userBirthDay' //指定元素
        });

    </script>

    <style>
        .laydate_box, .laydate_box * {
            box-sizing: content-box;
        }
    </style>
</head>
<body>

<form action="http://localhost/attendance/user/correct.do" id="loginForm" method="post">
    <div id="wrapper">
        <div id="page-wrapper">
            <div class="row">
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-3">
                        <h2><b><label>&nbsp;&nbsp;&nbsp;</label></b></h2>
                    </div>
                    <div class="form-group  col-sm-2 text-center">
                        <h2><b><label>个人信息</label></b></h2>
                    </div>
                    <div class="form-group col-sm-6">
                        <h2><b><label>&nbsp;&nbsp;&nbsp;</label></b></h2>
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2  text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="text" class="col-sm-4" name="userAccount" id="userAccount"
                               value="${user.userAccount}">
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2 text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手机:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="text" class="col-sm-4" name="userPhone" id="userPhone" value="${user.userPhone}">
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2 text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="text" class="col-sm-4" name="userName" id="userName" value="${user.userName}">
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2 text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="password" class="col-sm-4" name="userPassword" id="userPassword"
                               value="${user.userPassword}">
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2 text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="text" class="col-sm-4" name="userBirthDay" id="userBirthDay"
                               value="<fmt:formatDate value="${user.userBirthDay}" pattern="yyyy-MM-dd"/>">
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2 text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司ID:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="text" class="col-sm-4" name="companyID" id="CompanyID" value="${user.companyID}">
                    </div>
                </div>
                <div class="form-group col-sm-12 ">
                    <div class="form-group col-sm-2  text-left">
                        <label>&nbsp;</label>
                    </div>
                    <div class="form-group  col-sm-2  text-left">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部门名称:</label>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <input type="text" class="col-sm-4" name="userDepartment" id="userDepartment"
                               value="${user.userDepartment}">
                    </div>
                </div>
                <div class="form-group col-sm-12">
                    <div class="form-group col-sm-4 text-right">
                        <button type="button" name="Yes" href="<%=path%>/user/welcome.do" class="btn btn-default">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                    <div class="form-group col-sm-8 text-left">
                        <button type="submit" name="Correct" class="btn btn-default">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                </div>
            </div><!-- /.row -->
        </div><!-- /#page-wrapper -->
    </div><!-- /#wrapper -->
</form>
</body>
</html>