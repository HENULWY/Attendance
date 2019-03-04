<%@ page import="com.ylw.model.User" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    User loginUser = (User)request.getSession().getAttribute("user");
%>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="考勤小程序考勤系统">
    <meta name="author" content="ylw">

    <title>考勤管理</title>

    <!-- JavaScript -->
    <script src="<%=path%>/js/jquery.min.js"></script>
    <script src="<%=path%>/js/bootstrap.js"></script>
    <script src="<%=path%>/js/raphael-min.js"></script>
    <script src="<%=path%>/js/morris-0.4.3.min.js"></script>

    <!-- Bootstrap core CSS -->
    <link href="<%=path%>/css/bootstrap.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="<%=path%>/css/sb-admin.css" rel="stylesheet">
    <link rel="stylesheet" href="<%=path%>/font-awesome/css/font-awesome.min.css">
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="<%=path%>/css/morris-0.4.3.min.css">

</head>
<body>

<div id="wrapper">

    <!-- Sidebar -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="<%=path%>/user/welcome.do" target="mainFrame">考勤管理系统</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right navbar-user">

                <li class="dropdown user-dropdown">
                    <a href="<%=path%>/user/edit.do" target="mainFrame"><i class="fa fa-user"></i> 账户:<%=loginUser.getUserName()%>,你好 <b class="caret"></b></a>
                </li>


                <li class="dropdown user-dropdown">
                    <a href="<%=path%>/user/logout.do" target="_parent"><i class="fa fa-user"></i> 注销 <b class="caret"></b></a>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</div><!-- /#wrapper -->
</body>
</html>
