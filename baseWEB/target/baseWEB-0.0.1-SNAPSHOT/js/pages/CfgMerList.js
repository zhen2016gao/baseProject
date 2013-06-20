function checkMerName() {
		var result = "";
		$.ajax({
			type : 'POST',
			url :ctx+ "checkMerName.html",
			data : {
				mername : $('#addCfgMer_mername').val()
			},
			dataType : 'text',
			async : false,//设成同步
			cache : false,
			traditional : true,
			success : function(data) {
				result = data;
			}
		});
		if (result.indexOf('1') > 0) {
			$.messager.alert("操作提示", "开发商名称已存在！", "info");
			return false;
		}
		return true;
	}
	function checkCfgMerId() {
		var result = "";
		$.ajax({
			type : 'POST',
			url : ctx+"checkCfgMerId.html",
			data : {
				merid : $('#addCfgMer_merid').val()
			},
			dataType : 'text',
			async : false,//设成同步
			cache : false,
			traditional : true,
			success : function(data) {
				result = data;
			}
		});
		if (result.indexOf('1') > 0) {
			$.messager.alert("操作提示", "商户号已存在！", "info");
			
			return false;
		}
		return true;
	}
	$(function() {
	loadCfgMer();
	//查询按钮
	$('#cfgMerList_a_search').bind('click', function() {
		$('#cfgMerList').datagrid({
			pagination : true,
			url : ctx+"getCfgMerList.html",
			
			pageNumber : 1,
			queryParams : {
				merid : $("#merid").val(),
				mername : $("#mername").val(),
				mergroup : $("#mergroup").val(),
				sstatus: $("#sstatus").val()
			}
		});
	});
	
		function loadCfgMer(){
    	$('#cfgMerList').datagrid({
		title : '入网商户管理',
		url : ctx + "getCfgMerList.html",
		idField : 'id',
		height : 400,
		rownumbers : true,
		pagination : true,
		singleSelect :false,
		fitColumns : false,
		toolbar : '#cfgMerList_toolbar',
		
		columns : [ [ 
		              
		    {field:'ck',checkbox:'true'}, 
		    {
			field : 'merId',
			title : '商户号',
			width : '150',
			align : 'center'
		    },
		   {
			field : 'merName',
			title : '商户名称',
			width : '150',
			align : 'center'
		   }, 
		   {
			field : 'tradeKey',
			title : '商户合作秘钥',
			width : '150',
			align : 'center',
			formatter : function(value1, rowData, index) {
				return '<span id="tradeKey'+index+'">******</span>';
			}
			
		   
		  }, 
		  {
			field : 'merGroup',
			title : '商户组号',
			width : '150',
			align : 'center'
		  }, 
		  {
				field : 'status',
				title : '状态',
				width : '100',
				align : 'center',
				formatter : function(value, rowData, index) {
					if (value == 1) {
						return '正常';
					} else if (value == 2) {
						return '禁用';
					}
				}
			},
		  {
			field : 'changePerson',
			title : '变更人',
			width : '150',
			align : 'center'
		   }, 
			{
			field : 'changeTime',
			title : '变更时间',
			width : '150',
			align : 'center',
			formatter : function(value, rowData, rowIndex) {
				return new Date(value).format();
			}
		  },
		
		{field:'merAddress',title:'商户联系地址',hidden:true},
		{field:'merTel',title:'联系电话',hidden:'true'},
		{field:'merPerson',title:'联系人',hidden:'true'},
		{field:'merPersonTel',title:'联系人电话',hidden:'true'},
		{field:'email',title:'Email',hidden:'true'},
		{field:'feesStandards',title:'费率标准',hidden:'true'},
		{field:'signingTime',title:'签约时间',hidden:'true'},
		{field:'onlineTime',title:'上线时间',hidden:'true'},
		{field:'payProperties',title:'定向支付属性',hidden:'true'},
		{field:'notifyUrl',title:'交易通知url',hidden:'true'},
		{field:'fileKey',title:'对账文件下载密钥',hidden:'true'},
		{field:'suptTrade',title:'是否支持预授权',hidden:'true'},
		{field:'comdId',title:'商户经营商品类型',hidden:'true'},
		{field:'suptRevocation',title:'是否支持撤销',hidden:'true'},
		{field:'suptReturn',title:'是否支持退货',hidden:'true'},
		{field:'remark',title:'备注',hidden:'true'},
		{field:'merAbbr',title:'商户名缩写',hidden:'true'},
		{field:'mcc',title:'银行分类码',hidden:'true'}
		] ],
    	onClickCell:function(rowIndex,field,value){
    		if(field=="tradeKey"){// 条件
    			$("#tradeKey"+rowIndex).html(value);
    		}
    	}
	});
		}
	
		$('#cfgMerList_a_search').linkbutton({
			iconCls : 'icon-search',
			plain : true,
			text : '查询'
		});
		$('#cfgMerList_a_add').linkbutton({
			iconCls : 'icon-add',
			plain : true,
			text : '新增'
		});
		$('#cfgMerList_a_edit').linkbutton({
			iconCls : 'icon-edit',   
			plain : true,
			text : '修改'
		});
		$('#cfgMerList_a_excel').linkbutton({
			iconCls : 'icon-search',
			plain : true,
			text : '下载商户信息'
		});
		//添加按钮
		$('#cfgMerList_a_add').bind('click', function() {
			$('#addCfgMerForm_div').dialog('open').dialog('setTitle', '添加商户');
			$('#addCfgMerForm').form('clear');

		});
		
		// 导出excel
		$('#cfgMerList_a_excel').bind('click',function(){
			var excelrow = $('#cfgMerList').datagrid('getSelected');
			if(excelrow){
				var  excelrows = $('#cfgMerList').datagrid('getSelections');
				  var list = new Array();
				  for(var i=0;i<excelrows.length;i++){
					  list.push(excelrows[i].id);
				  }
				  var url = ctx + 'downexcel.html?id='+list;
					window.open(url);
				
			}else{
				
				$.messager.alert("操作提示", "请选择要导出的数据！", "info");
			}
			
			
			
		});
		//修改按钮
		$('#cfgMerList_a_edit')
				.bind(
						'click',
						function() {
							var row = $('#cfgMerList').datagrid('getSelected');
							if (row) {
								$('#modifyCfgMerForm_div').dialog('open')
										.dialog('setTitle', '修改商户');
								$('#modifyCfgMerForm').form('clear');
								
								$('#modifyCfgMer_id').val(row.id);
								$('#modifyCfgMer_merid').val(row.merId);
								$('#modifyCfgMer_mername').val(row.merName);
								$('#modifyCfgMer_meraddress').val(
										row.merAddress);
								$('#modifyCfgMer_mertel').numberbox('setValue',row.merTel);
								$('#modifyCfgMer_merperson').val(row.merPerson);
								$('#modifyCfgMer_merpersontel').numberbox('setValue',row.merPersonTel);
								$('#modifyCfgMer_notify_url').val(
										row.notifyUrl);
								$('#modifyCfgMer_email').val(row.email);
								$('#modifyCfgMer_feesstandards').val(
										row.feesStandards);
							
								var  siginingdate = new Date(row.signingTime);
								 var siginingTime = siginingdate.getFullYear()+'-'+(siginingdate.getMonth()+1)+'-'+siginingdate.getDate();
							     $('#modifyCfgMer_signingtime').datebox('setValue',siginingTime);
							     
							     var onlinedate = new Date(row.onlineTime);
								 var onlineTime = onlinedate.getFullYear()+'-'+(onlinedate.getMonth()+1)+'-'+onlinedate.getDate(); 
								$('#modifyCfgMer_onlinetime').datebox('setValue',onlineTime);

								$("#pay_propertiesY").prop("checked", false);
								$("#pay_propertiesN").prop("checked", false);
								$("#pay_properties" + row.payProperties).prop("checked",true);

								$('#modifyCfgMer_filekey').val(row.fileKey);
								$('#modifyCfgMer_mergroup').val(row.merGroup);
								$('#modifyCfgMer_mcc').val(row.mcc);
								$('#modifyCfgMer_mernameAbbr').val(row.merAbbr);
							
								//$('#modifyCfgMer_mergroup').val(row.merGroup);

								$("#supt_trade2").prop("checked", false);
								$("#supt_trade1").prop("checked", false);
								$("#supt_trade0").prop("checked", false);
								$("#supt_trade" + row.suptTrade).prop("checked",true);

								$('#modifyCfgMer_comdid').val(row.comdId);
								
								$("#supt_revocation1").prop("checked", false);
								$("#supt_revocation0").prop("checked", false);
								$("#supt_revocation" + row.suptRevocation).prop("checked",true);
								
								$("#supt_return1").prop("checked", false);
								$("#supt_return0").prop("checked", false);
								$("#supt_return" + row.suptReturn).prop("checked",true);

								$('#modifyCfgMer_remark').val(row.remark);

								$('#modifyCfgMer_tradekey').val(
										row.tradeKey);

								$("#status1").prop("checked", false);
								$("#status2").prop("checked", false);
								$("#status" + row.status).prop("checked",true);

							} else {
								$.messager.alert("操作提示", "请选择要修改的数据！", "info");
							}
						});


	$('#addCfgMerForm_div').dialog(
			{
				title : '添加开发商',
				width : 480,
				height : 500,
				modal : true,
				closed : true,
				buttons : [
						{
							id : 'save',
							text : '保存',
							iconCls : 'icon-save',
							handler : function() {
								$('#addCfgMerForm').form(
										'submit',
										{
											url :ctx+ 'addCfgMer.html',
											onSubmit : function() {
												return $(this).form('validate')
														&& checkMerName()
														&& checkCfgMerId();
											},
											success : function(data) {
												if (data.indexOf('1') > 0) {
												//	$.messager.alert("操作提示", "操作成功！", "info");
													
													$('#addCfgMerForm_div')
															.dialog('close');
													$('#cfgMerList').datagrid(
															'reload');
												} else {
													$.messager.alert("操作提示", "操作失败！请检查后重新提交。", "info");
													
												}
											}
										});
							}
						}, {
							id : 'cancel',
							text : '取消',
							iconCls : 'icon-cancel',
							handler : function() {
								$('#addCfgMerForm_div').dialog('close');
							}
						} ]
			});

	$('#modifyCfgMerForm_div').dialog({
		title : '修改开发商',
		width : 480,
		height : 450,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#modifyCfgMerForm').form('submit', {
					url : ctx+'modifyCfgMer.html',
					onSubmit : function() {
						return $(this).form('validate');
					},
					success : function(data) {
						if (data.indexOf('1') > 0) {
						//	$.messager.alert("操作提示", "操作成功！", "info");
							$('#modifyCfgMerForm_div').dialog('close');
							$('#cfgMerList').datagrid('reload');
						} else
							
								$.messager.alert("操作提示", "操作失败！请检查后重新提交。", "info");
							
					}
				});
			}
		}, {
			id : 'cancel',
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#modifyCfgMerForm_div').dialog('close');
			}
		} ]
	});
	

	//修改功能表框验证
	$('#modifyCfgMer_signingtime').datebox({
		required : false,
		missingMessage : '请输入签约时间'

	});
	$('#modifyCfgMer_onlinetime').datebox({
		required : false,
		missingMessage : '请输入约上线时间'

	});
	$('#modifyCfgMer_meraddress').validatebox({
		required : true,
		missingMessage : '请输入商户联系地址',
		validType : 'length[1,50]'

	});
	$('#modifyCfgMer_merperson').validatebox({
		required : true,
		missingMessage : '请输入联系人',
		validType : 'length[1,20]'

	});
	$('#modifyCfgMer_email').validatebox({
		required : true,
		missingMessage : '请输入正确的email',
		validType : 'email'

	});
	$('#modifyCfgMer_feesstandards').validatebox({
		required : true,
		missingMessage : '请输入费率标准',
		validType : 'length[1,20]'

	});
	$('#modifyCfgMer_tradekey').validatebox({
		required : true,
		missingMessage : '请输入商户合作秘钥',
		validType : 'length[1,40]'

	});
	$('#modifyCfgMer_merpersontel').numberbox({
		required : false,

		validType : 'length[8,20]'

	});
	$('#modifyCfgMer_comdid').numberbox({
		required : false,
		
		validType : 'length[1,20]'

	});
	$('#modifyCfgMer_mergroup').validatebox({
		required : true,
		missingMessage : '请输入商户组号',
		validType : 'length[1,20]'

	});
	$('#modifyCfgMer_mertel').numberbox({
		required : true,
		missingMessage : '请输入联系电话',
		validType : 'length[8,20]'

	});
	$('#modifyCfgMer_mernameAbbr').validatebox({
		required : false,
		
		validType : 'length[0,42]'

	});
	$('#modifyCfgMer_mcc').validatebox({
		required : false,
		
		validType : 'length[0,4]'

	});
	//新增功能表框验证
	$('#addCfgMer_merid').numberbox({
		required : true,
		missingMessage : '请输入编号',
		validType : 'length[1,15]'
	});
	$('#addCfgMer_mername').validatebox({
		required : true,
		missingMessage : '请输入商户名称',
		validType : 'length[1,30]'
	});
	$('#addCfgMer_meraddress').validatebox({
		required : true,
		missingMessage : '请输入商户联系地址',
		validType : 'length[1,50]'

	});
	$('#addCfgMer_mertel').numberbox({
		required : true,

		validType : 'length[0,20]'

	});
	$('#addCfgMer_merperson').validatebox({
		required : true,
		missingMessage : '请输入联系人',
		validType : 'length[1,20]'

	});

	$('#addCfgMer_merpersontel').numberbox({
		required : false,

		validType : 'length[8,20]'

	});
	$('#addCfgMer_email').validatebox({
		required : true,
		missingMessage : '请输入正确的email',
		validType : 'email'

	});
	$('#addCfgMer_feesstandards').validatebox({
		required : true,
		missingMessage : '请输入费率标准',
		validType : 'length[1,20]'

	});
	$('#addCfgMer_signingtime').datebox({
		required : true,
		missingMessage : '请输入签约时间'

	});
	$('#addCfgMer_onlinetime').datebox({
		required : true,
		missingMessage : '请输入上线时间'

	});
	$('#addCfgMer_tradekey').validatebox({
		required : true,
		missingMessage : '请输入商户合作秘钥',
		validType : 'length[1,40]'

	});
	$('#addCfgMer_filekey').validatebox({
		required : false,
		validType : 'length[0,40]'

	});
	$('#addCfgMer_mergroup').validatebox({
		required : true,
		missingMessage : '请输入商户组号',
		validType : 'length[1,20]'

	});
	$('#addCfgMer_comdid').numberbox({
		required : false,
		
		validType : 'length[0,20]'

	});
	$('#addCfgMer_mernameAbbr').validatebox({
		required : false,
		
		validType : 'length[0,42]'

	});
	$('#addCfgMer_mcc').validatebox({
		required : false,
		
		validType : 'length[0,4]'

	});
	
	});