$(function() {
	function checkOrgId() {
		var result = "";
		$.ajax({
			type : 'POST',
			url : 'checkOrgId.html',
			data : {
				orgId : $("#addLimitComdForm_orgId").val()
			},
			dataType : 'text',
			async : false,// 设成同步
			cache : false,
			traditional : true,
			success : function(data) {
				result = data;
			}
		});
		if (result.indexOf('1') >= 0) {
			$.messager.show({
				title : '提示',
				msg : "原始单号已存在!"
			});
			return false;
		}
		return true;
	}
	$('#cfgLimitComdList').datagrid({
		title : '商品分类限制管理',
		url : 'selectCfgLimitComdAll.html',
		idField : 'id',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#cfgLimitComdList_toolbar',
		columns : [ [ {
			field : 'orgId',
			title : '原始编号',
			align : 'center',
			width : 80,
			sortable : true
		}, {
			field : 'singleAmt',
			title : '单笔限额/元',
			width : 80,
			sortable : true,
			align : 'center',
			formatter : function(value) {
				return formatNumTo(value);
			}
		}, {
			field : 'dayAmt',
			title : '日限额/元',
			width : 80,
			sortable : true,
			align : 'center',
			formatter : function(value) {
				return formatNumTo(value);
			}
		}, {
			field : 'dayTimes',
			title : '日交易次数限制',
			width : 80,
			sortable : true,
			align : 'center'
		}, {
			field : 'dayTimesAvgMult',
			title : '历史日均交易次数倍数限制',
			width : 120,
			sortable : true,
			align : 'center'
		}, {
			field : 'dayTimes2',
			title : '新用户日交易次数限制',
			width : 120,
			sortable : true,
			align : 'center'
		}, {
			field : 'serialDayTimes',
			title : '新用户日交易次数超限天数',
			width : 120,
			sortable : true,
			align : 'center'
		}, {
			field : 'status',
			title : '状态',
			align : 'center',
			width : 60,
			sortable : true,
			formatter : function(value, rowData, rowIndex) {
				if (value == 1)
					return '正常';
				else
					return '禁用';
			}
		} ] ]
	});

	$('#cfgLimitComdList_a_delete').linkbutton({
		iconCls : 'icon-remove',
		plain : true,
		text : '删除'
	});
	$('#cfgLimitComdList_a_add').linkbutton({
		iconCls : 'icon-add',
		plain : true,
		text : '新增'
	});
	$('#cfgLimitComdList_a_edit').linkbutton({
		iconCls : 'icon-edit',
		plain : true,
		text : '修改'
	});
	$('#cfgLimitComdList_a_import').linkbutton({
		iconCls : 'icon-add',
		plain : true,
		text : '批量导入'
	});

	// 删除按钮
	$('#cfgLimitComdList_a_delete').bind('click', function() {
		var row = $('#cfgLimitComdList').datagrid('getSelected');
		if (row) {
			$.messager.confirm('提示', '确定要删除这条数据吗?操作后不可恢复.', function(r) {
				if (r) {
					var result = "";
					$.ajax({
						type : 'POST',
						url : 'deleteCfgLimitComd.html',
						data : {
							id : row.id
						},
						dataType : 'text',
						async : false,// 设成同步
						cache : false,
						traditional : true,
						success : function(data) {
							result = data;
						}
					});
					if (result.indexOf('1') >= 0) {
						$('#cfgLimitComdList').datagrid('reload');
					} else {
						$.messager.show({
							title : '提示',
							msg : "操作失败!"
						});
					}
				}
			});
		} else {
			$.messager.show({
				title : '提示',
				msg : "请选择需要操作的数据"
			});
		}
	});
	// 添加按钮
	$('#cfgLimitComdList_a_add').bind('click', function() {
		$('#addLimitComdForm_div').dialog('open');
		$('#addLimitComdForm').form('clear');
		$("#addLimitComdForm_status1").prop("checked", false);
		$("#addLimitComdForm_status2").prop("checked", false);
		$("#addLimitComdForm_status1").prop("checked", true);
	});
	// 导入按钮
	$('#cfgLimitComdList_a_import').bind(
			'click',
			function() {
				$('#cfgLimitComdList_import').dialog('open').dialog('setTitle',
						'批量导入商品分类限制');
				$('#importLimitComdForm').form('clear');
			});

	// 修改按钮
	$('#cfgLimitComdList_a_edit').bind(
			'click',
			function() {
				var row = $('#cfgLimitComdList').datagrid('getSelected');
				if (row) {
					$('#modifyLimitComdForm_div').dialog('open').dialog(
							'setTitle', '修改商品分类限制');
					$('#modifyLimitComdForm').form('clear');
					$('#modifyLimitComdForm').form('load', {
						id : row.id,
						orgId : row.orgId,
						dayAmt : (row.dayAmt * 0.01),
						dayTimes : row.dayTimes,
						dayTimes2 : row.dayTimes2,
						dayTimesAvgMult : row.dayTimesAvgMult,
						serialDayTimes : row.serialDayTimes,
						singleAmt : (row.singleAmt * 0.01)
					});
					$("#modifyLimitComdForm_status1").prop("checked", false);
					$("#modifyLimitComdForm_status2").prop("checked", false);
					$("#modifyLimitComdForm_status" + row.status).prop(
							"checked", true);
				} else {
					$.messager.show({
						title : '提示',
						msg : "请选择需要操作的数据"
					});
				}
			});

	$('#addLimitComdForm_div').dialog({
		title : '添加商品分类限制',
		width : 480,
		height : 340,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#addLimitComdForm').form('submit', {
					url : 'addCfgLimitComd.html',
					onSubmit : function() {
						return $(this).form('validate') && checkOrgId();
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#addLimitComdForm_div').dialog('close');
							$('#cfgLimitComdList').datagrid('reload');
						} else {
							$.messager.show({
								title : '提示',
								msg : '操作失败！请检查后重新提交。'
							});
						}
					}
				});
			}
		}, {
			id : 'cancel',
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#addLimitComdForm_div').dialog('close');
			}
		} ]
	});
	$('#modifyLimitComdForm_div').dialog({
		title : '修改商品分类限制',
		width : 480,
		height : 340,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#modifyLimitComdForm').form('submit', {
					url : 'updateCfgLimitComd.html',
					onSubmit : function() {
						return $(this).form('validate');
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#modifyLimitComdForm_div').dialog('close');
							$('#cfgLimitComdList').datagrid('reload');
						} else
							$.messager.show({
								title : '提示',
								msg : '操作失败！请检查后重新提交。'
							});
					}
				});
			}
		}, {
			id : 'cancel',
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#modifyLimitComdForm_div').dialog('close');
			}
		} ]
	});

	$('#cfgLimitComdList_import').dialog({
		title : '批量导入商品分类限制',
		width : 450,
		height : 300,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$.ajaxFileUpload({
					url : 'importCfgLimitComdFile.html', // 需要链接到服务器地址
					secureuri : false,
					fileElementId : 'file', // 文件选择框的id属性
					dataType : 'json', // 服务器返回的格式，可以是json
					success : function(data, status) // 相当于java中try语句块的用法
					{
						if (data.success) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功.'
//							});
							$('#cfgLimitComdList_import').dialog('close');
							$('#cfgLimitComdList').datagrid('reload');
						} else {
							alert(data.msg);
						}
					},
					error : function(data, status) {
					}
				});
			}
		}, {
			id : 'cancel',
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#cfgLimitComdList_import').dialog('close');
			}
		} ]
	});
	$('#modifyLimitComdForm_orgId').numberbox({
		required : true,
		missingMessage : '请输入原始编号',
		validType : 'length[1,2]'
	});
	$('#modifyLimitComdForm_singleAmt').numberbox({
		min : 0,
		precision : 2,
		required : true,
		missingMessage : '请输入单笔限额，单位元，0表示不限制'
	});
	$('#modifyLimitComdForm_dayAmt').numberbox({
		min : 0,
		precision : 2,
		required : true,
		missingMessage : '请输入日限额，单位元，0表示不限制'
	});
	$('#modifyLimitComdForm_dayTimes').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入日交易次数限制'
	});
	$('#modifyLimitComdForm_dayTimesAvgMult').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入历史日均交易次数倍数限制'
	});
	$('#modifyLimitComdForm_dayTimes2').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入新用户日交易次数限制'
	});
	$('#modifyLimitComdForm_serialDayTimes').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入新用户日交易次数超限天数'
	});
	$('#addLimitComdForm_orgId').numberbox({
		required : true,
		missingMessage : '请输入原始编号',
		validType : 'length[1,2]'
	});
	$('#addLimitComdForm_singleAmt').numberbox({
		min : 0,
		precision : 2,
		required : true,
		missingMessage : '请输入单笔限额，单位元，0表示不限制'
	});
	$('#addLimitComdForm_dayAmt').numberbox({
		min : 0,
		precision : 2,
		required : true,
		missingMessage : '请输入日限额，单位元，0表示不限制'
	});
	$('#addLimitComdForm_dayTimes').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入日交易次数限制'
	});
	$('#addLimitComdForm_dayTimesAvgMult').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入历史日均交易次数倍数限制'
	});
	$('#addLimitComdForm_dayTimes2').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入新用户日交易次数限制'
	});
	$('#addLimitComdForm_serialDayTimes').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入新用户日交易次数超限天数'
	});
});