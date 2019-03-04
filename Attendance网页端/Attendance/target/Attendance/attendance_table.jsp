<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
                var attendanceName = $("#attendanceName").val(); //取内容
                var department = $("#department").val();
                var startDate = $("#startDate").val();
                var endDate = $("#endDate").val();
                buildTable(page, PAGESIZE, attendanceName, department, startDate, endDate);//默认每页最多10条
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
        function buildTable(pageNumber, pageSize, attendanceName, department, startDate, endDate) {
            var url = "attending/searchAttendance.do"; //请求的网址
            var reqParams = {'pageNumber': pageNumber, 'pageSize': pageSize, 'attendanceName': attendanceName, 'department':department,'startDate': startDate, 'endDate':endDate};//请求数据
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
                                    var attendanceName = $("#attendanceName").val(); //取内容
                                    var department = $("#department").val();
                                    var startDate = $("#startDate").val();
                                    var endDate = $("#endDate").val();
                                    buildTable(page, PAGESIZE, attendanceName, department, startDate, endDate);//默认每页最多10条
                                }
                            }
                            $('#bottomTab').bootstrapPaginator("setOptions", newoptions); //重新设置总页面数目
                            var dataList = data.dataList;
                            $("#tableBody").empty();//清空表格内容
                            if (dataList.length > 0) {
                                $(dataList).each(function () {//重新生成href="<%=path%>/attending/edit.do?attendID='+ this.attendID +'"
                                    $("#tableBody").append(
                                        '<tr><td>' + this.attendID + '</td>' +
                                        '<td>' + this.user.userName + '</td>' +
                                        '<td class="date">' +  new Date(this.attendDate).Format("yyyy-MM-dd") + '</td>'+
                                        '<td>' + this.amState + '</td>'+
                                        '<td class="date">' +  (this.amDate==null?"":new Date(this.amDate).Format("HH:mm:ss")) + '</td>'+
                                        '<td>' + this.pmState + '</td>'+
                                        '<td class="date">' +  (this.pmDate==null?"":new Date(this.pmDate).Format("HH:mm:ss")) + '</td>'+
                                        '<td>' + this.attendAddress + '</td>'+
                                        '<td>'+(this.isError==0?"暂无":"申报")+'</td>'+
                                        '<td><button type="button" href="<%=path%>/attending/edit.do?attendID='+ this.attendID +'" class="btn btn-default"><a herf="http://localhost/attendance/attending/edit.do" onclick="alert(\'a\')" target="mainFrame">&nbsp;&nbsp;&nbsp;&nbsp;修改&nbsp;&nbsp;&nbsp;&nbsp;</a></button></td></tr>');
                                });
                            } else {
                                $("#tableBody").append('<tr><th colspan ="4"><center>查询无数据</center></th></tr>');
                            }
                        } else {
                            alert("无符合条件的数据");
                        }
                    },
                    error: function (e) {
                        console.log(e);
                        alert("查询失败:" + e);
                    }
                });
            });
        }
        //渲染完就执行
        $(function () {
            //生成底部分页栏
            $('#bottomTab').bootstrapPaginator(options);
            buildTable(1, 10, null, null, null,null);//默认空白查全部
            //创建结算规则
            $("#searchAttendance").bind("click", function () {
                var attendanceName = $("#attendanceName").val(); //取内容
                var department = $("#department").val();
                var startDate = $("#startDate").val();
                var endDate = $("#endDate").val();
                buildTable(1, PAGESIZE, attendanceName, department, startDate, endDate);
            });
        });

        lay('#version').html('-v'+ laydate.v);
        //执行一个laydate实例
        laydate.render({
            elem: '#startDate'//指定元素
        });
        laydate.render({
            elem: '#endDate'//指定元素
        });
    </script>

    <style>
        .laydate_box, .laydate_box * { box-sizing:content-box;}
    </style>
</head>
<body>

<div id="wrapper">
    <div id="page-wrapper">
        <div class="row">
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-6">
                    <h2><b><label>员工出勤表</label></b></h2>
                </div>
                <div class="form-group col-sm-6">
                    <h2><b><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></b></h2>
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-6">
                    <label>姓名</label>
                    <input type="text" class="form-control" id="attendanceName">
                </div>
                <div class="form-group col-sm-6">
                    <label>部门</label>
                    <input type="text" class="form-control" id="department">
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-6">
                    <label>开始日期</label>
                    <input type="text" class="form-control" id="startDate">
                </div>
                <div class="form-group col-sm-6">
                    <label>结束日期</label>
                    <input type="text" class="form-control" id="endDate">
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-11">
                    &nbsp;&nbsp;&nbsp;
                </div>
                <div class="form-group col-sm-1">
                    <button type="button" id="searchAttendance" class="btn btn-default">&nbsp;&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
            </div>
            <div>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-striped tablesorter">
                        <thead class="col-sm-12">
                        <tr>
                            <th>出勤ID <i class="fa fa-sort"></i></th>
                            <th>员工姓名 <i class="fa fa-sort"></i></th>
                            <th>出勤日期 <i class="fa fa-sort"></i></th>
                            <th>签到状态 <i class="fa fa-sort"></i></th>
                            <th>签到时间 <i class="fa fa-sort"></i></th>
                            <th>签退状态 <i class="fa fa-sort"></i></th>
                            <th>签退时间 <i class="fa fa-sort"></i></th>
                            <th>出勤地址 <i class="fa fa-sort"></i></th>
                            <th>考勤申报 <i class="fa fa-sort"></i></th>
                            <th>操作 <i class="fa fa-sort"></i></th>
                        </tr>
                        </thead>
                        <%--<c:forEach var="attendance" items="${attendanceList}">--%>
                            <tbody class="col-sm-12" id="tableBody">
                            <%--<tr>--%>
                                <%--<td>${attendance.attendID}</td>--%>
                                <%--<td>杨龙威</td>--%>
                                <%--<td><fmt:formatDate value="${attendance.attendDate}" pattern="yyyy-MM-dd"/></td>--%>
                                <%--<td>${attendance.amState}</td>--%>
                                <%--<td><fmt:formatDate value="${attendance.amDate}" pattern="HH:mm:ss"/></td>--%>
                                <%--<td>${attendance.pmState}</td>--%>
                                <%--<td><fmt:formatDate value="${attendance.pmDate}" pattern="HH:mm:ss"/></td>--%>
                                <%--<td>${attendance.attendAddress}</td>--%>
                                <%--<td>${attendance.isError.equals("1")?"暂无":"申报"}</td>--%>
                                <%--<td><button type="button" class="btn btn-default">&nbsp;&nbsp;&nbsp;&nbsp;修改&nbsp;&nbsp;&nbsp;&nbsp;</button></td>--%>
                            <%--</tr>--%>
                            </tbody>
                        <%--</c:forEach>--%>
                    </table>
                </div>
            </div>
            <div class="form-group col-sm-12">
                <div class="form-group col-sm-8">
                    <h2><b><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></b></h2>
                </div>
                <div class="form-group col-sm-4">
                    <ul class="pagination" id="bottomTab">
                    </ul>
                </div>
            </div>
        </div><!-- /.row -->


    </div><!-- /#page-wrapper -->
</div><!-- /#wrapper -->
</body>
</html>