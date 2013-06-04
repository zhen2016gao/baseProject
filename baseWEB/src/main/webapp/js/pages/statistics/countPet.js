$(function() {
	$('#CountPetList').datagrid({
		title : '储值卡交易统计',
		url : 'selectCountPet.html',
		idField : '',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#CountPetList_toolbar',
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
			field : 'paySucCount',
			title : '支付笔数',
			align : 'center',
			width : 100
		}, {
			field : 'paySucAmt',
			title : '支付金额/元',
			width : 100,
			align : 'center',
			formatter : function(value, rowData, rowIndex){
				return formatNumTo(value);
			}
		}, {
			field : 'paySucSum',
			title : '支付总笔数',
			align : 'center',
			width : 100
		} ] ]
	});

	$('#CountPetList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	// 查询按钮
	$('#CountPetList_a_search').bind('click', function() {
		var start = $("#CountPetList_start").datebox('getValue');
		var end = $("#CountPetList_end").datebox('getValue');
		$('#CountPetList').datagrid({
			pagination : true,
			url : 'selectCountPet.html',
			pageNumber : 1,
			queryParams : {
				startDate : start,
				endDate : end
			}
		});
	});
	$('#CountPetList_start').datebox();
	$('#CountPetList_end').datebox();

});