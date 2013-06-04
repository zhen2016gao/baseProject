$(function(){
	$('#addBtn').click(function(eventData){
		$('#addForm').form('clear');
		$('#addDiv').dialog('open').dialog('setTitle','添加银行卡交易要素'); 
	});
	$('#addOkBtn').click(function(eventData){
		add();
	});
	$('#addCancelBtn').click(function(eventData){
		$('#addDiv').dialog('close');
	});
	$('#editBtn').click(function(eventData){
		var row = $('#listTable').datagrid('getSelected'); 
		if (row){
			$("#updateBankId").html(row.bankId);
			$("#updateBankName").html(row.bankName);
			$('#updateForm').form('reset').form('load',row);
			$('#tradeTypes').combobox('clear');
			$('#tradeElements').combobox('clear');
			$.each(row.tradeTypes2, function(index, element){
				$('#tradeTypes').combobox('select', element.id);
			});
			$.each(row.tradeElements2, function(index, element){
				$('#tradeElements').combobox('select', element.id);
			});
			$('#updateDiv').dialog('open').dialog('setTitle','修改银行卡交易要素');
		}else{
        	$.messager.alert('修改银行卡交易要素','请先选择要修改的银行卡交易要素'); 
        }
	});
	$('#updateCancelBtn').click(function(eventData){
		$('#updateDiv').dialog('close');
	});
	$('#updateOkBtn').click(function(eventData){
		update();
	});
	$('#searchBtn').click(function(eventData){
		query();
	});
	function listTable(){
		$('#listTable').datagrid({
			fit: true,
			autoRowHeight: true,
			iconCls: 'icon-edit',
			striped: true,
			remoteSort: false,
			idField: 'id',
			singleSelect: false,
			showFooter: false,
			singleSelect: true,
			pagination : true,
		    pagePosition : 'bottom',
		    pageNumber : 1,
		    pageSize: 10,//每页显示的记录条数，默认为10  
			pageList: [10,15,25,50,100],//可以设置每页记录条数的列表
			rownumbers: true,
			toolbar : '#searchDiv',
			url: $("#listUrl").attr("href"),
			queryParams : {
				bankId: $("#searchDiv input[name='bankId']").val(),
				tradeType: $("#searchDiv input[name='tradeType']").val(),
				tradeElements: $("#searchDiv input[name='tradeElements']").val(),
				status: $("#searchDiv input[name='status']").val()
			},
			columns:[[
			     {field: 'bankId', title: '银行编号', width: '100', align: 'center'},
	            {field: 'bankName', title: '银行名称', width: '100', align: 'center'},
	            {field: 'tradeTypes2', title: '交易类型', width: '300', align: 'center',
			    	formatter:function(value, rowData, index){
			    		var tradeType = "";
			    		$.each(value,function(i,value){
			    			if(i!=0){
			    				tradeType += "," + value.name;
			    			}else{
			    				tradeType += value.name;
			    			}
			    		});
		    			return tradeType;
			    	}},
			    {field: 'tradeElements2', title: '交易要素', width: '400', align: 'center',
			    	formatter:function(value, rowData, index){
			    		var tradeElements = "";
			    		$.each(value,function(i,value){
			    			if(i!=0){
			    				tradeElements += "," + value.name;
			    			}else{
			    				tradeElements += value.name;
			    			}
			    		});
		    			return tradeElements;
			    	}},
			    {field: 'status', title: '状态', width: '60', align: 'center',
			    	formatter: function(value, rowData, index){
			    		if(value == 1){
			    			return '正常';
			    		}else if(value == 2){
			    			return '禁用';
			    		}
			    	}
			    },
			    {field: 'addTime', title: '添加时间', width: '130', align: 'center',
			    	formatter : function(value,rowData,rowIndex){
		        		return new Date(value).format();
			    	}
			    },
			    {field: 'addUser', title: '添加人', width: '70', align: 'center'}
			    ] ]
			    
		});
		//设置分页控件
		var p = $('#listTable').datagrid('getPager');
		$(p).pagination({
			beforePageText: '第',//页数文本框前显示的汉字
			afterPageText: '页    共 {pages} 页',
			displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
			onBeforeRefresh:function(){  
		 		$('#listTable').datagrid('load');  
		 		return false;
	 		} 
		});
	}
	listTable();
	
	function query(){
	    $('#listTable').datagrid({//重载datagrid
	    	pagination: true,
	    	url: $("#listUrl").attr("href"),
			pageNumber : 1,
			//向底层传递参数
			queryParams : {
				bankId: $("#searchDiv input[name='bankId']").val(),
				tradeType: $("#searchDiv input[name='tradeType']").val(),
				tradeElements: $("#searchDiv input[name='tradeElements']").val(),
				status: $("#searchDiv input[name='status']").val()
			}
	    });
	}
	
	function add(){
		$('#addForm').form('submit',{   
		    url:$("#addUrl").attr("href"),   
		    onSubmit: function(){   
		       return $(this).form('validate');
		    },
		    success:function(data){
		        if(data=="1"){
		        	$('#addDiv').dialog('close');      // close the dialog  
                    $('#listTable').datagrid('reload').datagrid('resize');    // reload the user data  
		        }else{
		        	$.messager.alert('添加账号','添加失败，请稍后重试');
		        }
		    }
		}); 
	}
	
	function update(){
		$('#updateForm').form('submit',{   
			url:$("#updateUrl").attr("href"),
			onSubmit: function(){   
				return $(this).form('validate');
			},   
			success:function(data){
				if(data=="1"){
					$('#updateDiv').dialog('close');      // close the dialog  
					$('#listTable').datagrid('reload');    // reload the user data  
				}else{
					$.messager.alert('修改银行卡交易要素','修改失败，请稍后重试');
				}
			}   
		}); 
	}
});