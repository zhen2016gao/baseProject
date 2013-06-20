$(function(){
	bankBinTable();
	$("#downloadcsv").click(function(e){
		e.preventDefault();
		window.location.href = $("#downloadcsv").attr("href");
	});
	
});

function downloadcsv(){
	window.open(ctx+ "importBinTemplate.html");
}
function importbin(){
	var file = $("#file").val();
	var filename=file.replace(/.*(\/|\\)/, "");
	var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
	if(fileExt=='csv'){
		$("#forms2").submit();
	}else{
		$.messager.alert('导入卡bin','请导入csv格式文件');
	}
	
}

function bankBinTable(){
	$('#bankBin_data').datagrid({
		title: '卡BIN管理查询',
		iconCls: 'icon-edit',
		striped: true,
		remoteSort: false,
		idField: '',
		fit : true,
		showFooter: false,
		singleSelect: true,
		pagination : true,
	    pagePosition : 'bottom',
	    pageNumber : 1,
	    pageSize: 10,//每页显示的记录条数，默认为10  
		pageList: [10,15,25,50,100],//可以设置每页记录条数的列表
		rownumbers: true,
		toolbar : '#bankBinTb',
		url: ctx + "selectAll.html",
		
		columns:[[
            {field: 'bankId', title: '发卡行编号', width: '120', align: 'center'},
            {field: 'bankName', title: '银行名称', width: '150', align: 'center'},
		    {field: 'cardName', title: '银行卡名称', width: '150', align: 'center'},
		    {field: 'panLength', title: '卡号长度', width: '80', align: 'center'},
		    {field: 'bin', title: '卡BIN', width: '100', align: 'center'},
		    {field: 'binLength', title: '卡BIN长度', width: '80', align: 'center'},
		    {field: 'cardType', title: '卡类型', width: '80', align: 'center',
		    	formatter : function(value,rowData,rowIndex){
	        		if(value==1){
	        			return "借记卡";
	        		}
	        		if(value==2){
	        			return "货代卡";
	        		}
	        		if(value==3){
	        			return "储值卡";
	        		}
		    	}
		    },
		    {field: 'changeUser', title: '变更人', width: '120', align: 'center'},
		    {field: 'changeTime', title: '变更时间', width: '160', align: 'center',
		    	formatter : function(value,rowData,rowIndex){
	        		return new Date(value).format();
	        }}
		    ] ]
		    
	});
	//设置分页控件
	var p = $('#bankBin_data').datagrid('getPager');
	$(p).pagination({
		beforePageText: '第',//页数文本框前显示的汉字
		afterPageText: '页    共 {pages} 页',
		displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
		onBeforeRefresh:function(){  
	 		$('#bankBin_data').datagrid('load');  
	 		return false;
 		} 
	});
}