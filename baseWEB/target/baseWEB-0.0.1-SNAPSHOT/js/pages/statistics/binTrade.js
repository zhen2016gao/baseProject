$(function() {
	$('#BinTradeList').datagrid({
		title : '卡种交易情况统计',
		url : 'selectBinTrade.html',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#BinTradeList_toolbar',
		columns : [ [ {
			field : 'merName',
			title : '商户名称',
			align : 'center',
			width : 100
		}, {
			field : 'xSucSum',
			title : '信用卡笔数',
			align : 'center',
			width : 100
		}, {
			field : 'xSucAmt',
			title : '信用卡金额/元',
			width : 100,
			align : 'center',
			formatter : function(value){
				return formatNumTo(value);
			}
		}, {
			field : 'jSucSum',
			title : '借记卡笔数',
			align : 'center',
			width : 100
		}, {
			field : 'jSucAmt',
			title : '借记卡金额/元',
			width : 100,
			align : 'center',
			formatter : function(value){
				return formatNumTo(value);
			}
		}, {
			field : 'cSucSum',
			title : '储值卡笔数',
			align : 'center',
			width : 100
		}, {
			field : 'cSucAmt',
			title : '储值卡金额/元',
			width : 100,
			align : 'center',
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'sSucCount',
			title : '总笔数',
			align : 'center',
			width : 100
		}, {
			field : 'cSucAmt',
			title : '总金额/元',
			width : 100,
			align : 'center',
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		} ] ]
	});

	$('#BinTradeList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	// 查询按钮
	$('#BinTradeList_a_search').bind('click', function() {
		var start = $("#BinTradeList_start").datebox('getValue');
		var end = $("#BinTradeList_end").datebox('getValue');
		$('#BinTradeList').datagrid({
			pagination : true,
			url : 'selectBinTrade.html',
			pageNumber : 1,
			queryParams : {
				startDate : start,
				endDate : end
			}
		});
	});
	$('#BinTradeList_start').datebox();
	$('#BinTradeList_end').datebox();
	
});