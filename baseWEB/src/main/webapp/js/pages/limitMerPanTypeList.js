	$(function(){
		limitMerPanTypeTable();
		$.extend($.fn.validatebox.defaults.rules, {
			selectPanTypeRequired : {
				validator : function(value, param) {
							console.info($(param[0]).find("option:contains('" + value + "')").val());
							return $(param[0]).find("option:contains('" + value + "')").val() != '';
					},
					message : '请选择卡种'
				},
				checkFloat : {
					validator : function(value, param) {
						return /^\d{0,8}\.{0,1}(\d{1,2})?$/.test(value);
					},
					message : '请输入最多包含两位小数的数字'
				}
		}); 
	});
	
	
	function limitMerPanTypeTable(){
		$('#limitMerPanType_data').datagrid({
			title: '商户卡种限额查询',
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
			toolbar : '#limitMerPanTypeTb',
			url: $("#getLimitMerPanTypeListUrl").val(),
			
			columns:[[
	            {field: 'merNo', title: '商户号', width: '140', align: 'center'},
	            {field: 'merName', title: '商户名', width: '150', align: 'center'},
			    {field: 'panType', title: '卡种', width: '100', align: 'center',
	            	formatter:function(value,rowData,index){
	            		if(value == 1){
	            			return "借记卡";
	            		}
	            		if(value == 2){
	            			return "货记卡";
	            		}
	            		if(value == 3){
	            			return "储值卡";
	            		}
	            		
	            	}
	            },
			    {field: 'singleAmt', title: '单笔限额', width: '150', align: 'center',
	            	formatter:function(value,rowData,index){
	            		return value/100.0;
	            	}
	            },
	            {field: 'dayAmt', title: '日笔限额', width: '150', align: 'center',
	            	formatter:function(value,rowData,index){
	            		return value/100.0;
	            	}
	            },
			    {field: 'status', title: '状态', width: '60', align: 'center',
			    	formatter: function(value, rowData, index){
			    		if(value == 1){
			    			return '正常';
			    		}else if(value == 2){
			    			return '禁用';
			    		}
			    	}
			    },
			    {field: 'changePerson', title: '变更人', width: '120', align: 'center'},
			    {field: 'changeTime', title: '变更时间', width: '160', align: 'center',
			    	formatter : function(value,rowData,rowIndex){
		        		return new Date(value).format();
		        }}
			    ] ]
			    
		});
		//设置分页控件
		var p = $('#limitMerPanType_data').datagrid('getPager');
		$(p).pagination({
			beforePageText: '第',//页数文本框前显示的汉字
			afterPageText: '页    共 {pages} 页',
			displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
			onBeforeRefresh:function(){  
		 		$('#limitMerPanType_data').datagrid('load');  
		 		return false;
	 		} 
		});
	}

	function queryLimitMerPanType(){
	    $('#limitMerPanType_data').datagrid({//重载datagrid
	    	pagination: true,
	    	url: $("#getLimitMerPanTypeListUrl").val(),
			pageNumber : 1,
			//向底层传递参数
			queryParams : {
				status: $("#sta2tus").val(),
				merNo: $("#merNo").val()
			}
	    });
	}
	
	
	function toAddLmpt(){  
        $('#addLmptDiv').dialog('open').dialog('setTitle','添加商户卡种限额');  
        $('#addLmptFm').form('clear');  
    } 
	
	function saveLmpt(){
		$('#addLmptFm').form('submit',{   
		    url:ctx+'saveLmtc.html',   
		    onSubmit: function(){   
		       return $(this).form('validate')&&checkMer();
		    },   
		    success:function(data){
		        if(data=="1"){
		        	$('#addLmptDiv').dialog('close');      // close the dialog  
                    $('#limitMerPanType_data').datagrid('reload');    // reload the Lmpt data  
		        }else{
		        	$.messager.alert('添加商户卡种限额','添加失败，请稍后重试');
		        }
		    }   
		}); 
	}
	
	function checkMer(){
		var result = "";
		$.ajax({
			type : 'POST',
			url : ctx+"checkMer.html",
			data : {
				merNo : $(":hidden[name=merNo]").val()
			},
			dataType : 'text',
			async:false,//设成同步
			cache : false,
			traditional : true,
			success : function(data) {
				result = data;
			}
		});
		
		if(result == 0){
			return true;
		}
		$.messager.alert('添加商户卡种限额','该商户卡种限额已存在');
		return false;
	}
	
	function toUpdateLmpt(){
		var row = $('#limitMerPanType_data').datagrid('getSelected'); 
        if (row){  
            $('#updateLmptFm').form('load',row);
            $("#merspan").html(row.merName+"("+row.merNo+")"+"<input type='hidden' name='id' value='"+row.id+"'/>");
            $("#dayAmt").val(row.dayAmt/100.0);
            $("#singleAmt").val(row.singleAmt/100.0);
            $('#upateLmptDiv').dialog('open').dialog('setTitle','修改商户卡种限额');  
        }else{
        	$.messager.alert('修改商户卡种限额','请先选择要修改的商户卡种限额'); 
        }
		
        
	}
	
	function updateLmpt(){
		$('#updateLmptFm').form('submit',{   
			url:ctx+"updateLmtc.html",   
			onSubmit: function(){   
				return $(this).form('validate');
			},   
			success:function(data){
				if(data=="1"){
					$('#upateLmptDiv').dialog('close');      // close the dialog  
					$('#limitMerPanType_data').datagrid('reload');    // reload the Lmpt data  
				}else{
					$.messager.alert('修改商户卡种限额','修改失败，请稍后重试');
				}
			}   
		}); 
	}