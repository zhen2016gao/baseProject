$(function(){
		loadBusinessDeve();	
		function loadBusinessDeve(){
			$('#dgtb').datagrid({
				fit:true,
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
				toolbar : '#toolbars',
				url:ctx+'getCfgBanPanList.html',
				
				columns:[[
		            {field: 'pan', title: '银行卡号', width: '150', align: 'center'},
		            {field: 'banTypes2', title: '交易类型', width: '420', align: 'center',
				    	formatter: function(value, rowData, index){
				    		var tradeType="";
				    		$.each(value,function(i,value){
				    			if(i!=0){
				    				tradeType+=","+value.name;
				    			}else{
				    				tradeType+=value.name;
				    			}
				    		}); 
				    		return tradeType;
				    	}
				    },
				    {field: 'status', title: '状态', width: '130', align: 'center',
				    	formatter: function(value, rowData, index){
				    		if(value == 1){
				    			return '正常';
				    		}else if(value == 2){
				    			return '禁用';
				    		}
				    	}
				    },
				    {field: 'chaPer', title: '变更人', width: '130', align: 'center'},
				    {field: 'chaTime', title: '变更时间', width: '200', align: 'center',
				    	formatter : function(value,rowData,rowIndex){
			        		return new Date(value).format();
			        	}
				    }
				    
				    ] ]
			});
			//设置分页控件
			var p = $('#dgtb').datagrid('getPager');
			$(p).pagination({
				beforePageText: '第',//页数文本框前显示的汉字
				afterPageText: '页    共 {pages} 页',
				displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
				onBeforeRefresh:function(){  
			 		$('#dgtb').datagrid('load');  
			 		return false;
		 		} 
			});
		}
		
		//弹出添加对话框
		$("#openAddCfgBanPanDeve").click(function(){
			$('#dlgs1').dialog('open').dialog('setTitle','添加银行卡黑名单');
			$('#addfms').form('clear'); 
		});
		//添加业务拓展商
		$("#saveCfgBanPan").click(function(){
			$('#addfms').submit();
		});
		$("#addfms").form({
			url:ctx+'addCfgBanPan.html',
			onSubmit:function(){
				return $(this).form('validate')&&check_pan();
			},
			success:function(data){
		        if(data=="1"){
		        	$('#dlgs1').dialog('close');      // close the dialog  
					$('#dgtb').datagrid('reload');
		        }else{
		        	$.messager.alert("操作提示", "服务器繁忙，请稍后添加！","info");
		        }
		    }   
		});
		
		//
		function check_pan(){
			var result = "";
			$.ajax({
				type : 'POST',
				url : ctx+'checkPan.html',
				data : {
					pan:$("#panNo2").val()
				},
				dataType : 'text',
				async:false,//设成同步
				cache : false,
				traditional : true,
				success : function(data) {
					result = data;
				}
			});
			if(result == '1'){
				$.messager.alert("操作提示", "您输入错误，该银行卡号已存在！","info");
				return false;
			}
			return true;
		}
		
		//修改业务拓展商
		$("#openUpdateCfgBanPanDeve").click(function(){
			var row = $('#dgtb').datagrid('getSelected'); 
			if (row){
				$('updatefms').form('clear');
				$('#dlgs2').dialog('open').dialog('setTitle','修改银行卡黑名单');  
				$('#updatefms').form('load',row);
				$("#panId").val(row.id);
				$("#panNo3").html(row.pan);
				$('#bantype3').combobox('clear');
				$.each(row.banTypes2, function(index, element){
					$('#bantype3').combobox('select', element.id);
				});
				
				$("#cfgstatus1").prop("checked",false);
				$("#cfgstatus2").prop("checked",false);
				$("#cfgstatus"+row.status).prop("checked",true);
			}else{
				$.messager.alert("操作提示", "请选择你要修改的黑名单！","info");
			}
		});
		$("#updateCfgBanPan").click(function(){
			$('#updatefms').submit();
		});
		$("#updatefms").form({
			url:ctx+'updateCfgBanPan.html',
			onSubmit:function(){
				return $(this).form('validate');
			},
			success:function(data){
		        if(data=="1"){
		        	$('#dlgs2').dialog('close');      // close the dialog  
					$('#dgtb').datagrid('reload');
		        }else{
		        	$.messager.alert("操作提示", "服务器繁忙，请稍后修改！","info");
		        }
		    }   
		});
		
	});
	
	//搜索
	function selectCfgBanPan(){
	    $('#dgtb').datagrid({//重载datagrid
	    	pagination: true,
	    	url: ctx+'getCfgBanPanList.html',
			pageNumber : 1,
			//向底层传递参数
			queryParams : {
				panNo: $("#panNo").val(),//
				bantype: $("#bantype").val(),
				cstatus: $("#cstatus").val()
			}
	    });
	}