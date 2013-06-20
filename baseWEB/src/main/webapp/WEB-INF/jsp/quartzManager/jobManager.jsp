<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>作业管理</title>
<%@include file="../../jsp/include.jsp"%>
<script type="text/javascript" src='<c:url value="/js/pages/quartzManager/jobManage.js"/>'></script>
</head>
<body>
<table id="jobManager"  fit="true">
	</table>
	<div id="jobManager_toolbar">
	 作业名称:<input id="jobNameQuery" style="width: 120px;" /> 作业组:<input id="jobGroupQuery" style="width: 120px;" /> <a id='jobManager_a_search'></a>|<a id='jobManager_a_addJob'></a>
	 |<a id='jobManager_a_delJob'></a>|<a id='jobManager_a_pauseJob'></a>|<a id='jobManager_a_resumeJob'></a>
	</div>
	
	
	<div id="addJobDiv" class="easyui-dialog" style="width:400px;height:380px;top:80px;"  
            closed="true" buttons="#addUserDiv-buttons">  
         <div style="padding:10px 0 10px 60px">
	    <form id="addJobForm" method="post" >
	    	<table>
	    		<tr>
	    			<td>作业名称:</td>
	    			<td><input class="easyui-validatebox" type="text" name="jobName" data-options="required:true"></input></td>
	    		</tr>
	    		<tr>
	    			<td>作业组:</td>
	    			<td><input class="easyui-validatebox" type="text" name="jobGroup" data-options="required:true"></input></td>
	    		</tr>
	    		<tr>
	    			<td>作业类信息:</td>
	    			<td><input class="easyui-validatebox" type="text" name="jobClassName" data-options="required:true"></input></td>
	    		</tr>
	    		<tr>
	    			<td>作业描述:</td>
	    			<td><textarea name="description" style="height:60px;"></textarea></td>
	    		</tr>
	    		<tr>
	    			<td>是否持久化:</td>
	    			<td>
	    				<select class="easyui-combobox" name="durability" >
	    				<option value="1" selected="selected" >是</option>
	    				<option value="0">否</option>
	    				</select>
	    			</td>
	    		</tr>
	    		<tr>
	    			<td>cron表达式:</td>
	    			<td><input class="easyui-validatebox" type="text" name="cronExpression" data-options="required:true"></input></td>
	    		</tr>
	    	</table>
	    </form>
	    </div>
	     <div style="text-align:center;padding:5px">
	    	<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm()">保存</a>
	    	<a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()">重置</a>
	    </div>
     </div>
</body>
</html>