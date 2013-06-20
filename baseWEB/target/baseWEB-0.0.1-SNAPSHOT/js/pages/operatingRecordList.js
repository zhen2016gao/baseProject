$(function(){
	$('#operList').datagrid({
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
		toolbar : '#operbar',
		url:ctx+'getOperRecordList.html',
		
		columns:[[
            {field: 'operator', title: '操作人', width: '200', align: 'center'},  
            {field: 'operatordate', title: '操作日期', width: '230', align: 'center',
            	formatter : function(value,rowData,rowIndex){
	        		return new Date(value).format();
	        	}
            },
		    {field: 'descript', title: '描述', width: '400', align: 'center'}
		    ]]
	});
	//设置分页控件
	var p = $('#operList').datagrid('getPager');
	$(p).pagination({
		beforePageText: '第',//页数文本框前显示的汉字
		afterPageText: '页    共 {pages} 页',
		displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
		onBeforeRefresh:function(){  
	 		$('#operList').datagrid('load');  
	 		return false;
 		} 
	});
});
function selectOperRecord(){
	$('#operList').datagrid({
		pagination : true,
		url:ctx+'getOperRecordList.html',
		pageNumber : 1,
		 queryParams : {
			operator:$("#operator").val(),
			startTime : $('#oper_startDate').datebox('getValue'),
			endTime : $("#oper_endDate").datebox('getValue')
		}  
	});
}