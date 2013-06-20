$(function(){
		loadCfgBanBank();
		//查询
		$('#selectCfgBanBank').click(function(){
			$('#dgList').datagrid({
				pagination : true,
				url :ctx+'getCfgBanBankList.html', 
				pageNumber : 1,
				queryParams : {
					s_bankid : $("#s_bankid").val(),
					s_bantype : $("#s_bantype").val(),
					s_status : $("#s_status").val()
				}
			});
		});
		
		//弹出添加对话框
		$("#openAddCfgBanBank").click(function(){
			$('#a_dlg').dialog('open').dialog('setTitle','添加发卡行黑名单');
			$('#caddfrm').form('clear'); 
		});
		//添加
		$("#saveCfgBanBank").click(function(){
			$('#caddfrm').submit();
		});
		$("#caddfrm").form({
			url:ctx+'addCfgBanBank.html',
			onSubmit:function(){
				return $(this).form('validate')&&checkbankId();
			},
			success:function(data){
		        if(data=="1"){
		        	$('#a_dlg').dialog('close');      // close the dialog  
					$('#dgList').datagrid('reload');
		        }else{
		        	$.messager.alert("操作提示", "服务器繁忙，请稍后添加！","info");
		        }
		    }   
		});
		function checkbankId(){
			var result = "";
			$.ajax({
				type : 'POST',
				url : ctx+'checkBankId.html',
				data : {
					bankid:$("#bankid2").val()
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
				$.messager.alert("操作提示", "您输入错误，该银行卡编号已存在！","info");
				return false;
			}
			return true;
		}
	
		$('#openUpdateCfgBanBank').click(function(){
			var row = $('#dgList').datagrid('getSelected');
			$('#cupdatefm').form('clear');
			if (row) {
				$('#u_dlg').dialog('open').dialog('setTitle', '修改发卡行信息');
				$('#cupdatefm').form('load',row);
				//填充值
				$("#bid").val(row.id);
				$('#bankid3').html(row.bankId);
				$('#u_bantype3').combobox('clear');
				$.each(row.banTypes2, function(index, element){
					$('#u_bantype3').combobox('select', element.id);
				});
				//$("#u_status1").prop("checked",false);
				//$("#u_status2").prop("checked",false);
				$("#u_status"+row.status).prop("checked",true);
			} else {
				$.messager.alert("操作提示", "请选择你要修改的发卡行黑名单！","info");
			}
		});
		
		$("#updateCfgBanBank").click(function(){
			$('#cupdatefm').submit();
		});
		$("#cupdatefm").form({
			url:ctx+'updateCfgBanBank.html',
			onSubmit:function(){
				return $(this).form('validate');
			},
			success:function(data){
		        if(data=="1"){
		        	$('#u_dlg').dialog('close');      // close the dialog  
					$('#dgList').datagrid('reload');
		        }else{
		        	$.messager.alert("操作提示", "服务器繁忙，请稍后修改！","info");
		        }
		    }   
		});
		
		
		function loadCfgBanBank(){
			$('#dgList').datagrid({
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
			    pageSize: 10, 
				pageList: [10,15,25,50,100],
				rownumbers: true,
				toolbar : '#tbar',
				url:ctx+'getCfgBanBankList.html',
				
				columns:[[
		            {field: 'bankId', title: '银行编号', width: '130', align: 'center'},
		            {field: 'bankName', title: '银行名称', width: '150', align: 'center'},
		            {field: 'banTypes2', title: '交易类型', width: '400', align: 'center',
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
				    {field: 'status', title: '状态', width: '100', align: 'center',
				    	formatter: function(value, rowData, index){
				    		if(value == 1){
				    			return '正常';
				    		}else if(value == 2){
				    			return '禁用';
				    		}
				    	}
				    },
				    {field: 'chaPer', title: '变更人', width: '100', align: 'center'},
				    {field: 'chaTime', title: '变更时间', width: '170', align: 'center',
				    	formatter : function(value,rowData,rowIndex){
			        		return new Date(value).format();
			        	}
				    }
				    
				    ] ]
			});
			//设置分页控件
			var p = $('#dgList').datagrid('getPager');
			$(p).pagination({
				beforePageText: '第',//页数文本框前显示的汉字
				afterPageText: '页    共 {pages} 页',
				displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
				onBeforeRefresh:function(){  
			 		$('#dgList').datagrid('load');  
			 		return false;
		 		} 
			});
		}
		
		
	});
	