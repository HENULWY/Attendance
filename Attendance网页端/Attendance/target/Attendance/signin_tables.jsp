<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html xmlns:th="http://www.thymeleaf.org">
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
    <script src="<%=path%>/js/bootstrap-paginator.min.js"></script>
    <script src="<%=path%>/laydate/laydate.js"></script>
    <script>
        var PAGESIZE = 10;
        var options = {
            currentPage: 1,  //当前页数
            totalPages: 10,  //总页数，这里只是暂时的，后头会根据查出来的条件进行更改
            size: "normal",
            alignment: "center",
            itemTexts: function (type, page, current) {
                switch (type) {
                    case "first":
                        return "第一页";
                    case "prev":
                        return "前一页";
                    case "next":
                        return "后一页";
                    case "last":
                        return "最后页";
                    case "page":
                        return page;
                }
            },
            onPageClicked: function (e, originalEvent, type, page) {
                var signInName = $("#signInName").val();
                var signInDate = $("#signInDate").val();
                buildTable(page, PAGESIZE, signInName, signInDate);//默认每页最多10条
            }
        };

        Date.prototype.Format = function (fmt) { //author: meizz
            var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "H+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

        //生成表格
        function buildTable(pageNumber, pageSize, signInName, signInDate) {
            var url = "signin/searchSignin.do"; //请求的网址
            var reqParams = {'pageNumber': pageNumber, 'pageSize': pageSize, 'signInName': signInName, 'signInDate':signInDate};//请求数据
            $(function () {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: reqParams,
                    async: false,
                    dataType: "json",
                    success: function (data) {
                        if (data.total != 0) {
                            // options.totalPages = data.pages;
                            var newoptions = {
                                currentPage: 1,  //当前页数
                                totalPages: data.pages == 0 ? 1 : data.pages,  //总页数
                                size: "normal",
                                alignment: "center",
                                itemTexts: function (type, page, current) {
                                    switch (type) {
                                        case "first":
                                            return "第一页";
                                        case "prev":
                                            return "前一页";
                                        case "next":
                                            return "后一页";
                                        case "last":
                                            return "最后页";
                                        case "page":
                                            return page;
                                    }
                                },
                                onPageClicked: function (e, originalEvent, type, page) {
                                    var userName = $("#signInName").val(); //取内容
                                    buildTable(page, PAGESIZE, signInName, signInDate);//默认每页最多10条
                                }
                            }
                            $('#bottomTab').bootstrapPaginator("setOptions", newoptions); //重新设置总页面数目
                            var dataList = data.dataList;
                            $("#tableBody").empty();//清空表格内容
                            if (dataList.length > 0) {
                                $(dataList).each(function () {//重新生成
                                    $("#tableBody").append('<tr>'+'<td>' + this.signInID + '</td>'+'<td>' + this.user.userName + '</td>'+'<td class="date">' +  new Date(this.signInDate).Format("yyyy-MM-dd HH:mm:ss") + '</td>'+'<td>' + this.signInAddress + '</td>'+'</tr>');
                                });
                            } else {
                                $("#tableBody").append('<tr><th colspan ="4"><center>查询无数据</center></th></tr>');
                            }
                        } else {
                            alert("无符合条件的数据");
                        }
                    },
                    error: function (e) {
                        alert("查询失败:" + e);
                    }
                });
            });
        }
        //渲染完就执行
        $(function () {
            //生成底部分页栏
            $('#bottomTab').bootstrapPaginator(options);
            buildTable(1, 10, "", "");//默认空白查全部
            //创建结算规则
            $("#searchSignIn").bind("click", function () {
                var signInName = $("#signInName").val();
                var signInDate = $("#signInDate").val();
                buildTable(1, PAGESIZE, signInName, signInDate);
            });
        });

        lay('#version').html('-v' + laydate.v);
        //执行一个laydate实例
        laydate.render({
            elem: '#signInDate' //指定元素
        });
    </script>

    <style>
        .laydate_box, .laydate_box * {
            box-sizing: content-box;
        }
    </style>
</head>
<body>

<div id="wrapper">
    <div id="page-wrapper">
        <div class="row">
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-6">
                    <h2><b><label>员工打卡表</label></b></h2>
                </div>
                <div class="form-group col-sm-6">
                    <h2><b><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></b></h2>
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-6">
                    <label>姓名</label>
                    <input type="text" class="form-control" id="signInName">
                </div>
                <div class="form-group col-sm-6">
                    <label>日期</label>
                    <input type="text" class="form-control" id="signInDate">
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-11">
                    &nbsp;&nbsp;&nbsp;
                </div>
                <div class="form-group col-sm-1">
                    <button type="button" id="searchSignIn" class="btn btn-default">&nbsp;&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                </div>
            </div>
            <div>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-striped tablesorter" id="tableResult">
                        <thead class="col-sm-12">
                        <tr>
                            <th>打卡ID <i class="fa fa-sort"></i></th>
                            <th>员工姓名 <i class="fa fa-sort"></i></th>
                            <th>打卡时间 <i class="fa fa-sort"></i></th>
                            <th>打卡地址 <i class="fa fa-sort"></i></th>
                        </tr>
                        </thead>
                        <%--<c:forEach var="signin" items="${signinList}">--%>
                            <tbody class="col-sm-12" id="tableBody">
                            <%--&lt;%&ndash;<tr>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;<td>${signin.signInID}</td>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;<td>杨龙威</td>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;<td><fmt:formatDate value="${signin.signInDate}" pattern="yyyy-MM-dd HH:mm:ss"/></td>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;<td>${signin.signInAddress}</td>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;</tr>&ndash;%&gt;--%>
                            <%--<tr>--%>
                            <%--<td></td>--%>
                            <%--<td></td>--%>
                            <%--<td></td>--%>
                            <%--<td></td>--%>
                            <%--</tr>--%>
                            </tbody>
                        <%--</c:forEach>--%>
                    </table>
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-9">
                    <h2><b><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></b></h2>
                </div>
                <div class="form-group col-sm-3">
                    <ul class="pagination"  id="bottomTab">
                        <%--&lt;%&ndash;<li class="disabled"><a href="#">&laquo;</a></li>&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<li class="active"><a href="#">1</a></li>&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<li><a href="#">2</a></li>&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<li><a href="#">3</a></li>&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<li><a href="#">4</a></li>&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<li><a href="#">&raquo;</a></li>&ndash;%&gt;--%>
                    </ul>
                </div>
            </div>
        </div><!-- /.row -->
    </div><!-- /#page-wrapper -->
</div><!-- /#wrapper -->
</body>
</html>