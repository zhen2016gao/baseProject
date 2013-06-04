<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>用户解绑卡统计</title>
<%@include file="include.jsp"%>
<script type="text/javascript" src='<c:url value="/js/pages/userBind.js"/>'></script>

</head>
<body>

	<div id="bindBar" >  
  		<!-- 输入查询条件 -->
		日期：<input id="user_startDate" name="user_startDate" class="easyui-datebox" style="width:150px">&nbsp;&nbsp;
		至&nbsp;&nbsp;<input id="user_endDate" name="user_endDate" class="easyui-datebox" style="width:150px">&nbsp;&nbsp;
		<a href="javascript:void(0)" onclick="selectUserBind()" class="easyui-linkbutton" iconCls ="icon-search">搜索</a>
    </div> 
	
	<table id="userBindList" border="0" cellpadding="0" cellspacing="0" width="100%">
		<thead>
			<tr align="center">
			</tr>
		</thead>
	</table>
</div></body>
</html>