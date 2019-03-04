<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <meta name="description" content="考勤小程序考勤系统">
    <meta name="author" content="ylw">

    <title>考勤系统</title>

    <!-- JavaScript -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/raphael-min.js"></script>
    <script src="js/morris-0.4.3.min.js"></script>

    <!-- Bootstrap core CSS -->

    <link href="css/sb-admin.css" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="css/morris-0.4.3.min.css">

    <!-- Add custom CSS here -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <style>

        #naviga{
            height: 768px !important;
            max-height:none !important;
            width:100%;
            max-width:none !important;
        }
        #tog{
            width:100%;
            max-width:none !important;
        }

    </style>
</head>
<body>

<div id="wrapper">

    <!-- Sidebar -->
    <nav id="naviga" class="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="tog" class="navbar-toggle navbar-inverse navbar-fixed-left">
            <ul class="nav navbar-nav side-nav">
                <li><a href="<%=path%>/user/edit.do" target="mainFrame"><i class="fa fa-dashboard"></i> 个人信息</a></li>
                <li><a href="<%=path%>/signin_tables.jsp" target="mainFrame"><i class="fa fa-bar-chart-o"></i> 打卡记录</a></li>
                <li><a href="<%=path%>/attendance_table.jsp" target="mainFrame"><i class="fa fa-table"></i> 考勤信息</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</div>
</body>
</html>
