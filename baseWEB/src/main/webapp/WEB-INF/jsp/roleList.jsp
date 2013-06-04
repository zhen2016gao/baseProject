<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>角色列表</title>
<%@include file="include.jsp"%>
</head>
<body>
			<table class="easyui-datagrid" title="角色列表" style="width: 550px;" data-options="rownumbers:true,singleSelect:true,url:'<c:url value="/roles.html"/>'">
				<thead>
					<tr>
						<th data-options="field:'roleName',width:120">角色名</th>
						<th data-options="field:'roleRemark',width:400">备注</th>
					</tr>
				</thead>
			</table>
</body>
</html>
