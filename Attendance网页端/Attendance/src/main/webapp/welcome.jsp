<%--
  Created by IntelliJ IDEA.
  User: huiin
  Date: 2018-04-29
  Time: 21:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="考勤小程序考勤系统">
    <meta name="author" content="ylw">

    <title>考勤系统</title>

    <!-- JavaScript -->
    <script src="<%=path%>/js/jquery.min.js"></script>
    <script src="<%=path%>/js/bootstrap.js"></script>
    <script src="<%=path%>/js/raphael-min.js"></script>
    <script src="<%=path%>/js/morris-0.4.3.min.js"></script>
    <!-- Bootstrap core CSS -->
    <link href="<%=path%>/css/bootstrap.css" rel="stylesheet">
    <!-- Add custom CSS here -->
    <link href="<%=path%>/css/sb-admin.css" rel="stylesheet">
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="<%=path%>/css/morris-0.4.3.min.css">
</head>
<body>
    <div class="row">
        <div class="col-lg-12">
            <h1><small>考勤系统</small></h1>
            <ol class="breadcrumb">
                <li><i class="fa fa-dashboard"></i>欢迎使用</li>
            </ol>
    </div>
</body>
</html>