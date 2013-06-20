<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html>
<head>
<title>管理系统</title>
<%@include file="include.jsp"%>
<script type="text/javascript">
    function open1(plugin, url){
        if ($('#layout_center_tabs').tabs('exists', plugin)){
            $('#layout_center_tabs').tabs('select', plugin);
            var tab = $('#tt').tabs('getSelected');
            $('#layout_center_tabs').tabs('update', {
            	 tab: tab,
                 options: {
                	 title:plugin,
                     content: '<iframe src="'+ url+ '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>'
                 }
            });
            
        } else {
        	$('#layout_center_tabs').tabs('add',{
                title:plugin,
                content: '<iframe src="'+ url+ '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>',
                closable:true,
                extractor:function(data){
                    return data;
                }
            });
        }
    }
    
    /**
    * 时间对象的格式化
    */
	Date.prototype.format = function(format) {
		format="yyyy-MM-dd hh:mm:ss";
		var o = {
			"M+" : this.getMonth() + 1,
			"d+" : this.getDate(),
			"h+" : this.getHours(),
			"m+" : this.getMinutes(),
			"s+" : this.getSeconds(),
			"q+" : Math.floor((this.getMonth() + 3) / 3),
			"S" : this.getMilliseconds()
		};

		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		}

		for ( var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
						: ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	}
    
	$(document).ready(function () {
	    
		$('#layout_center_tabs').tabs('add',{
	        title:'首页',
	        content: '<iframe src="firstPage.html" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>',
	        closable:false,
	        extractor:function(data){
	            return data;
	        }
	    });
	});
</script>
<script type="text/javascript" src="<c:url value="/js/closePlugin.js"/>"></script>
</head>
<body class="easyui-layout" style="text-align: left">
	<div data-options="region:'north'" style="background: #666; text-align: center">
		<div id="header-inner">
			<table cellpadding="0" cellspacing="0" style="width: 100%;">
				<tr>
					<td rowspan="2" style="width: 20px;"></td>
					<td style="height: 52px;">
						<div style="color: #fff; font-size: 22px; font-weight: bold;">
							<a href="<c:url value="/main.html"/>" style="color: #fff; font-size: 22px; font-weight: bold; text-decoration: none">管理系统</a>
						</div>
						<div style="color: #fff">
							<a href="<c:url value="/main.html"/>" style="color: #fff; text-decoration: none">Quartz Manager</a>
						</div>
					</td>
					<td style="padding-right: 5px; text-align: right; vertical-align: bottom;">
						<div id="topmenu" style="color: #fff">
							您好，<sec:authentication property="name"/>!<a href="<c:url value="/logout.html"/>">[退出]</a><a href="#" onclick="open1('修改密码', '<c:url value="/modPwdInput.html" />')">修改密码</a>
						</div>
					</td>
				</tr>
			</table>
		</div>

	</div>

	<div data-options="region:'west',split:true,title:'功能导航'" style="width: 250px; padding: 5px;">
		<ul class="easyui-tree">
		<li iconCls="icon-datagrid"><span>Quaztr管理</span>
				<ul>
					<li iconCls="icon-gears"><a href="#" onclick="open1('信息配置', '<c:url value="/msgConfig.html"/>')">信息配置</a></li>
					<li iconCls="icon-gears"><a href="#" onclick="open1('作业管理', '<c:url value="/jobManager.html"/>')">作业管理</a></li>
				</ul>
			</li>
			<sec:authorize access="hasRole('ROLE_admin')">
			<li iconCls="icon-base"><span>账户管理</span>
				<ul>
					<li iconCls="icon-gears"><a href="#" onclick="open1('账户管理','<c:url value="/toUserList.html"/>')">账户管理</a></li>
					<li iconCls="icon-gears"><a href="#" onclick="open1('角色列表', '<c:url value="/toRoles.html" />')">角色列表</a></li>
				</ul></li>
				</sec:authorize>
			<sec:authorize access="hasRole('ROLE_admin')">
			<li iconCls="icon-datagrid"><span>日志管理</span>
				<ul>
					<li iconCls="icon-gears"><a href="#" onclick="open1('日志查询', '<c:url value="/toOperatingRecordList.html"/>')">日志查询</a></li>
				</ul>
			</li>
			</sec:authorize>
		</ul>
	</div>

	<div data-options="region:'south',border:false" style="height: 50px; background: #A9FACD; padding: 10px;">CopyRight：lch</div>
	<div data-options="region:'center'">
		<div id="layout_center_tabs" class="easyui-tabs" fit="true" border="false" plain="true" data-options="fit:true,border:false"></div>
	</div>
	
	<!-- <div id="layout_center_tabs" class="easyui-tabs" data-options="fit:true,border:false" style="overflow: hidden;">  
    <div title="首页"></div>  
</div>   -->
  
<div id="layout_center_tabsMenu" style="width: 120px;display:none;">  
    <div type="refresh">刷新</div>  
    <div class="menu-sep"></div>  
    <div type="close">关闭</div>  
    <div type="closeOther">关闭其他</div>  
    <div type="closeAll">关闭所有</div>  
</div>  
</body>
</html>