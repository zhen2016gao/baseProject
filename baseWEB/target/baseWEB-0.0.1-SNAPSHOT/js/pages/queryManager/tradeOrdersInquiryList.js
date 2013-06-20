function query() {
	$('#orderPay').datagrid({
		url: ctx + 'queryTradeOrder.html',
		pagination : true,
		pageNumber : 1,
		queryParams : {
		}
	});
};

$(function(){
	
	$('#orderPay').datagrid({
		title: '交易订单查询',
		/*height : 400,
		width : 400,*/
		rownumbers : true,
		pagination : true,
		singleSelect : true,
		fitColumns : true,
		toolbar : '#orderPay_toolbar',
		url: ctx + 'queryTradeOrder.html',
		columns:[[
		          {field:'merchantId', title:'商户号', width:200,align:'center'},
		          {field:'payType', title:'交易类型', width:100,align:'center'},
		          {field:'merchantOrderId', title:'交易订单号', width:100,align:'center'},
		          {field:'cupsQid', title:'交易流水号', width:100,align:'center'},
		          {field:'merchantOrderTime', title:'交易订单时间', width:100,align:'center'},
		          {field:'merchantOrderAmt', title:'交易金额', width:100,align:'center'},
		          {field:'cupsTraceNum', title:'跟踪号', width:100,align:'center'},
		          {field:'pan', title:'交易卡号', width:100,align:'center'},
		          {field:'mobileNumber', title:'交易手机号', width:100,align:'center'},
		          {field:'cupsRespCode', title:'交易响应码', width:100,align:'center'}
		          ]]
	});
	
	$('#orderPay_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	$('#orderPay_a_download').linkbutton({
		iconCls : 'icon-save',
		plain : true,
		text : '交易订单下载'
	});
	
	$('#orderPay_a_search').bind('click', function() {
		$('#orderPay').datagrid({
			pagination : true,
			url: ctx + 'queryTradeOrder.html',
			pageNumber : 1,
			queryParams : {
				merchantOrderId : $("#merchantOrderId").val(),
				cupsQid : $("#cupsQid").val(),
				pan : $("#pan").val(),
				mobileNumber : $("#mobileNumber").val()
			}
		});
	});
	
	$('#orderPay_a_download').bind('click', function() {
		var url = ctx + 'download.html';
		window.open(url);
	});
	
	 //query();
});

