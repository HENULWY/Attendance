<%--
  Created by IntelliJ IDEA.
  User: huiin
  Date: 2018-04-24
  Time: 14:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title></title>
</head>
<body>
登入失败!
${message}
<br>
<a href="<%=path%>/index.jsp">返回</a>
</body>
</html>