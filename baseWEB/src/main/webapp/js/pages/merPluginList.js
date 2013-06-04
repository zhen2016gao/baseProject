	$(function(){
		merPluginTable();
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

	
	function merPluginTable(){
		$('#merPlugin_data').datagrid({
			title: '入网商户插件查询',
			iconCls: 'icon-edit',
			striped: true,
			remoteSort: false,
			idField: '',
			showFooter: false,
			fit : true,
			singleSelect: true,
			pagination : true,
		    pagePosition : 'bottom',
		    pageNumber : 1,
		    pageSize: 10,//每页显示的记录条数，默认为10  
			pageList: [10,15,25,50,100],//可以设置每页记录条数的列表
			rownumbers: true,
			toolbar : '#merPluginTb',
			url: ctx+"getMerPluginList.html",
			
			columns:[[
	            {field: 'merNo', title: '商户号', width: '80', align: 'center'},
	            {field: 'mername', title: '商户名', width: '115', align: 'center'},
			    {field: 'version', title: '插件版本号', width: '100', align: 'center'},
			    {field: 'devename', title: '开发商名称', width: '115', align: 'center'},
			    {field: 'dbname', title: '拓展商名称', width: '115', align: 'center'},
			    {field: 'merGroup', title: '商户组', width: '60', align: 'center'},
			    {field: 'upgradeFlag', title: '升级', width: '80', align: 'center',
			    	formatter : function(value,rowData,rowIndex){
			    		if(value==0){
			    			return "不需升级";
			    		}
			    		if(value==1){
			    			return "提示升级";
			    		}
			    		if(value==2){
			    			return "强制升级";
			    		}
		    	}},
			    {field: 'status', title: '状态', width: '60', align: 'center',
			    	formatter : function(value,rowData,rowIndex){
			    		if(value==1){
			    			return "正常";
			    		}
			    		return "禁用";
			    	}
			    },
			    {field: 'remark', title: '备注', width: '100', align: 'center'},
			    {field: 'chaPer', title: '变更人', width: '100', align: 'center'},
			    {field: 'chaTime', title: '变更时间', width: '125', align: 'center',
			    	formatter : function(value,rowData,rowIndex){
		        		return new Date(value).format();
		        }}
			    ] ]
			    
		});
		//设置分页控件
		var p = $('#merPlugin_data').datagrid('getPager');
		$(p).pagination({
			beforePageText: '第',//页数文本框前显示的汉字
			afterPageText: '页    共 {pages} 页',
			displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
			onBeforeRefresh:function(){  
		 		$('#merPlugin_data').datagrid('load');  
		 		return false;
	 		} 
		});
	}

	function queryMerPlugin(){
	    $('#merPlugin_data').datagrid({//重载datagrid
	    	pagination: true,
	    	url: ctx+"getMerPluginList.html",
			pageNumber : 1,
			//向底层传递参数
			queryParams : {
				mername:$("#merPlugin_mername").val(),
				devename:$("#merPlugin_devename").val(),
				dbname:$("#merPlugin_dbname").val(),
				version:$("#merPlugin_version").val()
			}
	    });
	}
	
	
	function toAddMerPlugin(){  
        $('#addMerPluginDiv').dialog('open').dialog('setTitle','添加商户插件');  
        $('#addMerPluginFm').form('clear');  
    } 
	
	function saveMerPlugin(){
		$('#addMerPluginFm').form('submit',{   
		    url:ctx+'addMerPlugin.html',   
		    onSubmit: function(){   
		       return $(this).form('validate');
		    },   
		    success:function(data){
		        if(data=="1"){
		        	$('#addMerPluginDiv').dialog('close');      // close the dialog  
                    $('#merPlugin_data').datagrid('reload');    // reload the MerPlugin data  
		        }else{
		        	$.messager.alert('添加商户插件','添加失败，请稍后重试');
		        }
		    }   
		}); 
	}
	
	
	function toUpdateMerPlugin(){
		var row = $('#merPlugin_data').datagrid('getSelected'); 
        if (row){
        	$('#updateMerPluginFm').form('clear');  
            $('#updateMerPluginFm').form('load',row);
            $('#updateMerPluginDiv').dialog('open').dialog('setTitle','修改商户插件');  
        }else{
        	$.messager.alert('修改商户插件','请先选择要修改的商户插件'); 
        }
		
        
	}
	
	function updateMerPlugin(){
		$('#updateMerPluginFm').form('submit',{   
			url:ctx+"updateMerPlugin.html",   
			onSubmit: function(){   
				return $(this).form('validate');
			},   
			success:function(data){
				if(data=="1"){
					$('#updateMerPluginDiv').dialog('close');      // close the dialog  
					$('#merPlugin_data').datagrid('reload');    // reload the MerPlugin data  
				}else{
					$.messager.alert('修改商户插件','修改失败，请稍后重试');
				}
			}   
		}); 
	}