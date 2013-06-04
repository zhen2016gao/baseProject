$(function() {
	$('#CountCdList').datagrid({
		title : '信用卡和借记卡交易统计',
		url : 'selectCountCd.html',
		idField : '',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#CountCdList_toolbar',
		columns : [ [ {
			field : 'bankCode',
			title : '银行编号',
			align : 'center',
			width : 100
		}, {
			field : 'bankName',
			title : '银行名称',
			align : 'center',
			width : 100
		}, {
			field : 'authSucCount',
			title : '认证笔数',
			align : 'center',
			width : 100
		}, {
			field : 'authSucAmt',
			title : '认证金额/元',
			width : 100,
			align : 'center',
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'authSucSum',
			title : '认证总笔数',
			align : 'center',
			width : 100
		}, {
			field : 'cSucCount',
			title : '快捷笔数',
			align : 'center',
			width : 100
		}, {
			field : 'cSucAmt',
			title : '快捷金额/元',
			width : 100,
			align : 'center',
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'cSucSum',
			title : '快捷总笔数',
			align : 'center',
			width : 100
		} ] ]
	});

	$('#CountCdList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	// 查询按钮
	$('#CountCdList_a_search').bind('click', function() {
		var start = $("#CountCdList_start").datebox('getValue');
		var end = $("#CountCdList_end").datebox('getValue');
		$('#CountCdList').datagrid({
			pagination : true,
			url : 'selectCountCd.html',
			pageNumber : 1,
			queryParams : {
				startDate : start,
				endDate : end
			}
		});
	});
	$('#CountCdList_start').datebox();
	$('#CountCdList_end').datebox();
	
});