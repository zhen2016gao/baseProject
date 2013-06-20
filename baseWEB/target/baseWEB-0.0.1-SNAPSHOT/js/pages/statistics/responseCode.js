$(function() {
	$('#ResponseCodeList').datagrid({
		title : '响应码统计',
		url : 'selectResponseCode.html',
		idField : '',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#ResponseCodeList_toolbar',
		columns : [ [ {
			field : 'respCode',
			title : '响应码',
			align : 'center',
			width : 100
		}, {
			field : 'rCount',
			title : '出现次数',
			align : 'center',
			width : 100
		} ] ]
	});

	$('#ResponseCodeList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	// 查询按钮
	$('#ResponseCodeList_a_search').bind('click', function() {
		var start = $("#ResponseCodeList_start").datebox('getValue');
		var end = $("#ResponseCodeList_end").datebox('getValue');
		$('#ResponseCodeList').datagrid({
			pagination : true,
			url : 'selectResponseCode.html',
			pageNumber : 1,
			queryParams : {
				startDate : start,
				endDate : end,
				responseCode : $("#ResponseCodeList_responseCode").val()
			}
		});
	});
	$('#ResponseCodeList_start').datebox();
	$('#ResponseCodeList_end').datebox();
	$('#ResponseCodeList_responseCode').validatebox({
		validType : 'length[0,4]'
	});
});