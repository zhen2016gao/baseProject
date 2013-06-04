<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>账户管理</title>
<%@include file="include.jsp"%>
<script type="text/javascript" src='<c:url value="/js/pages/userList.js"/>'></script>
<style type="text/css">
		#fm{
			margin:0;
			padding:10px 30px;
		}
		.ftitle{
			font-size:14px;
			font-weight:bold;
			padding:5px 0;
			margin-bottom:10px;
			border-bottom:1px solid #ccc;
		}
		.fitem{
			margin-bottom:5px;
		}
		.fitem label{
 			display:inline-block;
			width:80px;
		}
</style>
</head>
<body>
<input type="hidden" id="toAdduserUrl" value='<c:url value="/toUpdateUser.html"/>'/>
		<input type="hidden" id="adduserUrl" value='<c:url value="/addUser.html"/>'/>
		<input type="hidden" id="rolesUrl" value='<c:url value="/roles.html"/>'/>
		<input type="hidden" id="toUpdateUserUrl" value='<c:url value="/toUpdateUser.html"/>'/>
		<input type="hidden" id="checkUserNameUrl" value='<c:url value="/checkUserName.html"/>'/>
		<input type="hidden" id="updateUserUrl" value='<c:url value="/updateUser.html"/>'/>
		<input type="hidden" id="userListUrl" value='<c:url value="/userList.html"/>'/>
	<table id="agrList_data" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
		<thead>
			<tr align="center">
			</tr>
		</thead>
	</table>
	<!-- 添加用户 -->
	   <div id="addUserDiv" class="easyui-dialog" style="width:400px;height:380px;padding:10px 20px"  
            closed="true" buttons="#addUserDiv-buttons">  
        <form id="addUserFm" method="post" novalidate>  
            <div class="fitem">  
                <label>帐户名:</label>  
                <input class="easyui-validatebox" type="text" id="username1" name="username" data-options="required:true" validType="length[1,10]"></input>
            </div>  
            <div class="fitem">  
                <label>密码:</label>  
                <input class="easyui-validatebox" type="password" id="userpwd" name="userpwd" data-options="required:true" validType="length[6,20]"></input>
            </div>  
            <div class="fitem">  
                <label>确认密码:</label>  
                <input class="easyui-validatebox" type="password" name="userpwd2" data-options="required:true" validType="equals['#addUserFm #userpwd']"></input>
            </div>  
            <div class="fitem">  
                <label>角色:</label>  
                <span id="rolespan"></span>
            </div>  
            <div class="fitem">  
                <label>邮箱:</label>  
                <input class="easyui-validatebox" type="text" name="email" data-options="required:false" validType="email"></input>
            </div>  
            <div class="fitem">  
                <label>手机号:</label>  
                <input class="easyui-validatebox" type="text" name="moble" data-options="required:false" validType='moblie'></input>  
            </div>  
            <div class="fitem">  
                <label>是否接收短信/邮件:</label>  
                	<input class="easyui-validatebox" type="radio" name="receive" id="defalutCheck" value="1"></input>是
					<input class="easyui-validatebox" type="radio" name="receive" value="0"></input>否 
            </div>  
        </form>  
    </div>  
     <div id="addUserDiv-buttons">  
        <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-ok" onclick="saveUser()">保存</a>  
        <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-cancel" onclick="javascript:$('#addUserDiv').dialog('close')">取消</a>  
    </div>
    <!-- 修改 -->
    <div id="upateUserDiv" class="easyui-dialog" style="width:420px;height:380px;padding:10px 20px"  
            closed="true" buttons="#upateUserDiv-buttons">  
        <form id="updateUserFm" method="post" novalidate>  
            <div class="fitem">  
                <label>帐户名:</label>  
                <span id="updateUser"></span>
            </div>  
            <div class="fitem">  
                <label>密码:</label>  
                <input class="easyui-validatebox" type="password" id="userpwd" name="userpwd"  validType="length[6,20]"></input>
                <span style="color:red;">填写则重置密码</span>
            </div>  
            <div class="fitem">  
                <label>确认密码:</label>  
                <input class="easyui-validatebox" type="password" name="userpwd2" id="userpwd2" validType="equals['#updateUserFm #userpwd']"></input>
            </div>  
            <div class="fitem">  
                <label>角色:</label>  
                <span id="rolespan2"></span>
            </div>  
            <div class="fitem">  
                <label>邮箱:</label>  
                <input class="easyui-validatebox" type="text" name="email" data-options="required:false" validType="email"></input>
            </div>  
            <div class="fitem">  
                <label>手机号:</label>  
                <input class="easyui-validatebox" type="text" name="moble" data-options="required:false" validType='moblie'></input>  
            </div>  
            <div class="fitem">  
                <label>是否接收短信/邮件:</label>  
                	<input class="easyui-validatebox" type="radio" name="receive" id="defalutCheck" value="1"></input>是
					<input class="easyui-validatebox" type="radio" name="receive" value="0"></input>否 
            </div>  
            <div class="fitem">  
                <label>状态:</label>  
                	<input class="easyui-validatebox" type="radio" name="status" value="1"></input>正常
					<input class="easyui-validatebox" type="radio" name="status" value="2"></input>禁用
            </div>  
        </form>  
    </div>  
     <div id="upateUserDiv-buttons">  
        <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-ok" onclick="updateUser()">修改</a>  
        <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-cancel" onclick="javascript:$('#upateUserDiv').dialog('close')">取消</a>  
    </div>
	<div id="tb" style="padding:5px;height:auto">  
        <div style="margin-bottom:5px">  
            <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="toAddUser()">添加账户</a>  
            <a href="#" class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="toUpdateUser()">修改账户</a>
        </div> 
        <div>  
        	帐户名：<input class="easyui-validatebox" type="text" name="username" id="username">&nbsp;&nbsp;&nbsp;
        	角色：<label><input type="checkbox" id="all" checked="checked" value=""/>全部</label>
				<c:forEach items="${roles}" var="role"><label><input type="checkbox" name="roles" value="${role.roleId}"/>${role.roleName}</label></c:forEach>&nbsp;&nbsp;&nbsp;
                                   状态:<select id="sta1tus" class="easyui-combobox" panelHeight="auto" style="width:100px" >  
	                <option value="">全部</option>  
	                <option value="1">正常</option>  
	                <option value="2">禁用</option>  
            </select>&nbsp;&nbsp;&nbsp;
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" onclick="userquery()">查询</a>
        </div>  
    </div>  
</body>
</html>