<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>日志查询</title>
<%@include file="include.jsp"%>
<script type="text/javascript" src='<c:url value="/js/pages/operatingRecordList.js"/>'></script>
</head>
<body>
	<!-- 显示 -->
	<table id="operList" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" >
		<thead>
			<tr align="center">
			</tr>
		</thead>
	</table>
	
	<div id="operbar">  
  		<!-- 输入查询条件 -->
		<div>
			<form id="operfm" action="" method="post">
			操作人：<input id="operator" name="operator" class="easyui-validatebox" validType="length[1,6]" 
			data-options="required:false"  type="text" style="width:160px;" />&nbsp;&nbsp;
			日期：<input id="oper_startDate" name="oper_startDate" class="easyui-datebox" style="width:150px">&nbsp;&nbsp;
			至&nbsp;&nbsp;<input id="oper_endDate" name="oper_endDate" class="easyui-datebox" style="width:150px">&nbsp;&nbsp;
			<a href="javascript:void(0)" onclick="selectOperRecord()" class="easyui-linkbutton" iconCls ="icon-search">搜索</a>
			</form>
 		</div>
    </div> 
 
</body>
</html>