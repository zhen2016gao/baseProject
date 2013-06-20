$(function(){
	loadPluginTrade();
});
function selectPluginCount(){
	$('#pluginList').datagrid({
		pagination : true,
		url : ctx+'getPluginTradeCountList.html',
		pageNumber : 1,
		 queryParams : {
			startTime : $('#startDate').datebox('getValue'),
			endTime : $("#endDate").datebox('getValue')
		}  
	});
}
function loadPluginTrade(){
	$('#pluginList').datagrid({
		fit: true,
		autoRowHeight: true,
		iconCls: 'icon-edit',
		striped: true,
		remoteSort: false,
		singleSelect: true,
		showFooter: false,
		pagination : true,
	    pagePosition : 'bottom',
	    pageNumber : 1,
	    pageSize: 10,//每页显示的记录条数，默认为10  
		pageList: [10,15,25,50,100],//可以设置每页记录条数的列表
		rownumbers: true,
		toolbar : '#selectBar',
		url:ctx+'getPluginTradeCountList.html',
		
		columns:[[
            {field: 'pluginVersion', title: '插件版本号', width: '200', align: 'center'},          	
		    {field: 'sucSum', title: '成功笔数', width: '150', align: 'center'},
		    {field: 'sucCount', title: '成功累积笔数', width: '180', align: 'center'},
		    {field: 'orderSum', title: '总笔数', width: '150', align: 'center'},
		    {field: 'orderCount', title: '累积总笔数', width: '170', align: 'center'},
		    {field: 'sucAmt', title: '金额(元)', width: '170', align: 'center',
		    	formatter : function(value,rowData,rowIndex){
					return formatNumTo(value);
				}
		    }
		    ] ]
	});
	//设置分页控件
	var p = $('#pluginList').datagrid('getPager');
	$(p).pagination({
		beforePageText: '第',//页数文本框前显示的汉字
		afterPageText: '页    共 {pages} 页',
		displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
		onBeforeRefresh:function(){  
	 		$('#pluginList').datagrid('load');  
	 		return false;
 		} 
	});
}