$(function(){
	$('#deveOrderList').datagrid({
		fit:true,
		autoRowHeight: true,
		iconCls: 'icon-edit',
		striped: true,
		remoteSort: false,
		singleSelect: true,
		showFooter: true,
		pagination : true,
	    pagePosition : 'bottom',
	    pageNumber : 1,
	    pageSize: 10,//每页显示的记录条数，默认为10  
		pageList: [10,15,25,50,100],//可以设置每页记录条数的列表
		rownumbers: true,
		toolbar : '#deveOrderBar',
		url:ctx+'getDeveOrderCountList.html',
		
		columns:[[
            {field: 'merNo', title: '商户号', width: '150', align: 'center'},  
            {field: 'merName', title: '商户名称', width: '200', align: 'center'}, 
		    {field: 'sucCount', title: '成功提交订单笔数', width: '170', align: 'center'},
		    {field: 'accSucCount', title: '成功累积笔数', width: '170', align: 'center'},
		    {field: 'sucSum', title: '总笔数', width: '150', align: 'center'},
		    {field: 'accSucSum', title: '累积总笔数', width: '150', align: 'center'}
		    ]]
	});
	//设置分页控件
	var p = $('#deveOrderList').datagrid('getPager');
	$(p).pagination({
		beforePageText: '第',//页数文本框前显示的汉字
		afterPageText: '页    共 {pages} 页',
		displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
		onBeforeRefresh:function(){  
	 		$('#deveOrderList').datagrid('load');  
	 		return false;
 		} 
	});
});
function selectDeveOrder(){
	$('#deveOrderList').datagrid({
		pagination : true,
		url:ctx+'getDeveOrderCountList.html',
		pageNumber : 1,
		 queryParams : {
			startTime : $('#order_startDate').datebox('getValue'),
			endTime : $("#order_endDate").datebox('getValue')
		}  
	});
}