$(function() {
	$('#OrderCountList').datagrid({
		title : '订单统计',
		url : 'selectOrderCount.html',
		idField : '',
		fit : true,
		rownumbers : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#OrderCountList_toolbar',
		columns : [ [ {
			field : 'merNo',
			title : '商户编号',
			align : 'center',
			width : 120
		}, {
			field : 'merName',
			title : '商户名称',
			align : 'center',
			width : 120
		}, {
			field : 'busNo',
			title : '拓展商编号',
			align : 'center',
			width : 120
		}, {
			field : 'busName',
			title : '拓展商名称',
			align : 'center',
			width : 120
		}, {
			field : 'sucSum',
			title : '成功的笔数',
			align : 'center',
			width : 65
		}, {
			field : 'sucCount',
			title : '成功累积笔数',
			align : 'center',
			width : 75
		}, {
			field : 'orderSum',
			title : '总笔数',
			align : 'center',
			width : 50
		}, {
			field : 'orderCount',
			title : '累计总笔数',
			align : 'center',
			width : 65
		}, {
			field : 'sucAmt',
			title : '金额/元',
			width : 80,
			align : 'center',
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'authSucSum',
			title : '认证成功笔数',
			align : 'center',
			width : 80
		}, {
			field : 'authSucCount',
			title : '认证成功累积笔数',
			align : 'center',
			width : 100
		}, {
			field : 'authOrderSum',
			title : '认证成功总笔数',
			align : 'center',
			width : 100
		}, {
			field : 'authOrderCount',
			title : '认证累积总数',
			align : 'center',
			width : 80
		}, {
			field : 'authSucAmt',
			title : '认证金额/元',
			align : 'center',
			width : 90,
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'kSucSum',
			title : '快捷成功笔数',
			align : 'center',
			width : 80
		}, {
			field : 'kSucCount',
			title : '快捷成功累积笔数',
			align : 'center',
			width : 100
		}, {
			field : 'kOrderSum',
			title : '快捷总笔数',
			align : 'center',
			width : 70
		}, {
			field : 'kOrderCount',
			title : '快捷累积总笔数',
			align : 'center',
			width : 100
		}, {
			field : 'kSucAmt',
			title : '快捷金额/元',
			align : 'center',
			width : 90,
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'sSucSum',
			title : '储值卡成功笔数',
			align : 'center',
			width : 100
		}, {
			field : 'sSucCount',
			title : '储值卡累积成功笔数',
			align : 'center',
			width : 110
		}, {
			field : 'sOrderSum',
			title : '储值卡总笔数',
			align : 'center',
			width : 90
		}, {
			field : 'sOrderCount',
			title : '储值卡累计总笔数',
			align : 'center',
			width : 90
		}, {
			field : 'sSucAmt',
			title : '储值卡金额/元',
			align : 'center',
			width : 90,
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		} ] ]
	});

	$('#OrderCountList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	// 查询按钮
	$('#OrderCountList_a_search').bind('click', function() {
		var start = $("#OrderCountList_start").datebox('getValue');
		var end = $("#OrderCountList_end").datebox('getValue');
		$('#OrderCountList').datagrid({
			pagination : true,
			url : 'selectOrderCount.html',
			pageNumber : 1,
			queryParams : {
				startDate : start,
				endDate : end
			}
		});
	});
	$('#OrderCountList_start').datebox();
	$('#OrderCountList_end').datebox();
});