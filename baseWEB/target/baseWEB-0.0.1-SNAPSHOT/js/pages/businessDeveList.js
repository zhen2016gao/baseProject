$(function(){
		loadBusinessDeve();	
		function loadBusinessDeve(){
			$('#dg').datagrid({
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
				toolbar : '#toolbar',
				url:ctx+'getBusinessDeveList.html',
				
				columns:[[
		            {field: 'dbCode', title: '拓展商编号', width: '140', align: 'center'},
				    {field: 'dbName', title: '拓展商名称', width: '150', align: 'center'},
				    {field: 'status', title: '状态', width: '120', align: 'center',
				    	formatter: function(value, rowData, index){
				    		if(value == 1){
				    			return '正常';
				    		}else if(value == 2){
				    			return '禁用';
				    		}
				    	}
				    },
				    {field: 'remark', title: '备注', width: '330', align: 'center'},
				    {field: 'changeUser', title: '变更人', width: '100', align: 'center'},
				    {field: 'changeTime', title: '变更时间', width: '200', align: 'center',
				    	formatter : function(value,rowData,rowIndex){
				    		return new Date(value).format();
			        	}
				    }
				    ] ]
			});
			//设置分页控件
			var p = $('#dg').datagrid('getPager');
			$(p).pagination({
				beforePageText: '第',//页数文本框前显示的汉字
				afterPageText: '页    共 {pages} 页',
				displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
				onBeforeRefresh:function(){  
			 		$('#dg').datagrid('load');  
			 		return false;
		 		} 
			});
		}
		
		//弹出添加对话框
		$("#openAddBusinessDeve").click(function(){
			$('#dlg').dialog('open').dialog('setTitle','添加业务拓展商');
			$('#baddfm').form('clear'); 
		});
		//添加业务拓展商
		$("#saveBusinessDeve").click(function(){
			$('#baddfm').submit();
		});
		$("#baddfm").form({
			url:ctx+'addBusinessDeve.html',
			onSubmit:function(){
				return $(this).form('validate')&&check_dbcode();
			},
			success:function(data){
		        if(data=="1"){
		        	$('#dlg').dialog('close');      // close the dialog  
					$('#dg').datagrid('reload');
		        }else{
		        	$.messager.alert("操作提示", "服务器繁忙，请稍后添加！","info");
		        }
		    }   
		});
		
		//
		function check_dbcode(){
			var result = "";
			$.ajax({
				type : 'POST',
				url : ctx+'checkDbCode.html',
				data : {
					db_code2:$("#db_code2").val()
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
				$.messager.alert("操作提示", "业务拓展商编号已存在！","info");
				return false;
			}
			return true;
		}
		
		//修改业务拓展商
		$("#openUpdateBusinessDeve").click(function(){
			var row = $('#dg').datagrid('getSelected'); 
			$('#bupdatefm').form('clear');
			if (row){
				$('#dlg2').dialog('open').dialog('setTitle','修改拓展商信息');  
				$('#bupdatefm').form('load',row);
				$("#businessId").val(row.id);
				$("#db_code3").html(row.dbCode);
				$("#db_code3val").val(row.dbCode);
				$("#db_name3").val(row.dbName);
				$("#remark3").val(row.remark); 
				//$("input[id=status"+row.status+"][value="+row.status+"]").attr("checked","checked");
				$("#status"+row.status).prop("checked",true);
			}else{
				$.messager.alert("操作提示", "请选择你要修改的拓展商！","info");
			}
		});
		$("#updateBusinessDeve").click(function(){
			$('#bupdatefm').submit();
		});
		$("#bupdatefm").form({
			url:ctx+'updateBusinessDeve.html',
			onSubmit:function(){
				return $(this).form('validate');
			},
			success:function(data){
		        if(data=="1"){
		        	$('#dlg2').dialog('close');      // close the dialog  
					$('#dg').datagrid('reload');
		        }else{
		        	$.messager.alert("操作提示", "服务器繁忙，请稍后修改！","info");
		        }
		    }   
		});
		
	});
	
	//搜索
	function selectBusinessDeve(){
	    $('#dg').datagrid({//重载datagrid
	    	pagination: true,
	    	url: ctx+'getBusinessDeveList.html',
			pageNumber : 1,
			//向底层传递参数
			queryParams : {
				db_code: $("#db_code").val(),//
				db_name: $("#db_name").val(),
				sstatus: $("#sstatus").val()
			}
	    });
	}