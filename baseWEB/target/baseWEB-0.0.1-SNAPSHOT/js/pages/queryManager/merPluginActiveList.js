function query() {
	$('#orderPay').datagrid({
		url: ctx + 'queryMerPluginActive.html',
		pagination : true,
		pageNumber : 1,
		queryParams : {
		}
	});
}

$(function(){
	
	$('#merPluginActive').datagrid({
		title: '交易订单查询',
		/*height : '100%',
		width : '100%',*/
		rownumbers : true,
		pagination : true,
		singleSelect : true,
		fitColumns : true,
		toolbar : '#merPluginActive_toolbar',
		url: ctx + 'queryMerPluginActive.html',
		columns:[[
		          {field:'pluginNo', title:'终端插件编号', width:200,align:'center'},
		          {field:'version', title:'版本号', width:100,align:'center'},
		          {field:'verdorNo', title:'开发商标识', width:100,align:'center'},
		          {field:'busNo', title:'拓展商标识', width:100,align:'center'},
		          {field:'merNo', title:'商户号', width:100,align:'center'},
		          {field:'termPhysicalNo', title:'手机串号', width:100,align:'center'},
		          {field:'termModel', title:'手机特征信息', width:100,align:'center'},
		          {field:'termOs', title:'终端操作系统', width:100,align:'center'},
		          {field:'activeTime', title:'激活时间', width:100,align:'center'},
		          {field:'status', title:'状态', width:100,align:'center'}
		          ]]
	});
	
	$('#merPluginActive_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	
	$('#merPluginActive_a_search').bind('click', function() {
		$('#merPluginActive').datagrid({
			pagination : true,
			url: ctx + 'queryMerPluginActive.html',
			pageNumber : 1,
			queryParams : {
				pluginNo : $("#pluginNo").val(),
				pluginVersion : $("#pluginVersion").val(),
				imei : $("#imei").val(),
				termOs : $("#termOs").val()
			}
		});
	});
	
	 //query();
});

