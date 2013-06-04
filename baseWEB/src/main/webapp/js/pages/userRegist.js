$(function(){
	loadUserRegist();
});
function selectUserRegist(){
	$('#userRegistList').datagrid({
		pagination : true,
		url : ctx+'getUserRegistList.html',
		pageNumber : 1,
		 queryParams : {
			startTime : $('#u_startDate').datebox('getValue'),
			endTime : $("#u_endDate").datebox('getValue')
		}  
	});
}
function loadUserRegist(){
	$('#userRegistList').datagrid({
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
		toolbar : '#userRegistBar',
		url:ctx+'getUserRegistList.html',
		
		columns:[[
            {field: 'merNo', title: '商户号', width: '170', align: 'center'}, 
            {field: 'merName', title: '商户名称', width: '200', align: 'center'},
		    {field: 'busNo', title: '拓展商号', width: '170', align: 'center'},
		    {field: 'dbName', title: '拓展商名称', width: '200', align: 'center'},
		    {field: 'registNum', title: '注册数', width: '150', align: 'center'},
		    {field: 'registCount', title: '累积注册数', width: '150', align: 'center'}
		    ]]
	});
	//设置分页控件
	var p = $('#userRegistList').datagrid('getPager');
	$(p).pagination({
		beforePageText: '第',//页数文本框前显示的汉字
		afterPageText: '页    共 {pages} 页',
		displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
		onBeforeRefresh:function(){  
	 		$('#userRegistList').datagrid('load');  
	 		return false;
 		} 
	});
}