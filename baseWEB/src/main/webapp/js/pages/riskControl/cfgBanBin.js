$(function() {
	function checkbin() {
		var result = "";
		$.ajax({
			type : 'POST',
			url : 'checkbin.html',
			data : {
				bin : $("#addCfgBanBinForm_bin").val()
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
				msg : "卡bin已存在!"
			});
			return false;
		}
		return true;
	}
	$('#cfgBanBinList').datagrid({
		title : '卡bin黑名单管理',
		url : 'selectCfgBanBin.html',
		idField : 'id',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#cfgBanBinList_toolbar',
		columns : [ [ {
			field : 'bin',
			title : '卡bin',
			align : 'center',
			width : 100,
			sortable : true
		}, {
			field : 'panLength',
			title : '银行卡号长度',
			width : 50,
			sortable : true,
			align : 'center'
		}, {
			field : 'banType2',
			title : '交易类型',
			align : 'center',
			width : 250,
			sortable : true,
			formatter : function(value, rowData, index) {
				var banType = "";
				$.each(value, function(i, value) {
					if (i != 0) {
						banType += "," + value.name;
					} else {
						banType += value.name;
					}
				});
				return banType;
			}
		}, {
			field : 'stauts',
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
		}, {
			field : 'chaPer',
			title : '变更人',
			align : 'center',
			width : 60,
			sortable : true
		}, {
			field : 'chaTime',
			title : '变更时间',
			width : 80,
			sortable : true,
			align : 'center',
			formatter : function(value, rowData, rowIndex) {
				return new Date(value).format();
			}
		} ] ]
	});

	$('#cfgBanBinList_a_add').linkbutton({
		iconCls : 'icon-add',
		plain : true,
		text : '新增'
	});
	$('#cfgBanBinList_a_edit').linkbutton({
		iconCls : 'icon-edit',
		plain : true,
		text : '修改'
	});
	$('#cfgBanBinList_a_query').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	// 查询按钮
	$('#cfgBanBinList_a_query').bind('click', function() {
		// bin,status
		$('#cfgBanBinList').datagrid({
			pagination : true,
			url : 'selectCfgBanBin.html',
			pageNumber : 1,
			queryParams : {
				bin : $("#bin").val(),
				status : $("#status").val()
			}
		});
	});
	// 添加按钮
	$('#cfgBanBinList_a_add').bind(
			'click',
			function() {
				$('#addCfgBanBinForm_div').dialog('open').dialog('setTitle',
						'添加卡bin黑名单');
				$('#addCfgBanBinForm').form('clear');
				$("addCfgBanBinForm_status1").prop("checked", false);
				$("addCfgBanBinForm_status2").prop("checked", false);
				$("addCfgBanBinForm_status1").prop("checked", true);
			});

	// 修改按钮
	$('#cfgBanBinList_a_edit').bind(
			'click',
			function() {
				var row = $('#cfgBanBinList').datagrid('getSelected');
				if (row) {
					$('#modifyCfgBanBinForm_div').dialog('open').dialog(
							'setTitle', '修改卡bin黑名单');
					$('#modifyCfgBanBinForm').form('clear');
//					$('#modifyCfgBanBinForm').form('reset').form('load',row);
					$('#modifyCfgBanBinForm_id').val(row.id);
					$('#modifyCfgBanBinForm_bin').val(row.bin);
					$('#modifyCfgBanBinForm_panLength').numberbox('setValue',
							row.panLength);
					$.each(row.banType2, function(index, element) {
						$('#modifyCfgBanBinForm_banType').combobox('select',
								element.id);
					});
					$('#modifyCfgBanBinForm_status').combobox('select',
							row.stauts);
				} else {
					$.messager.show({
						title : '提示',
						msg : "请选择需要操作的数据"
					});
				}
			});

	$('#addCfgBanBinForm_div').dialog({
		title : '添加卡bin黑名单',
		width : 450,
		height : 220,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#addCfgBanBinForm').form('submit', {
					url : 'addCfgBanBin.html',
					onSubmit : function() {
						return $(this).form('validate') && checkbin();
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#addCfgBanBinForm_div').dialog('close');
							$('#cfgBanBinList').datagrid('reload');
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
				$('#addCfgBanBinForm_div').dialog('close');
			}
		} ]
	});
	$('#modifyCfgBanBinForm_div').dialog({
		title : '修改卡bin黑名单',
		width : 450,
		height : 220,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#modifyCfgBanBinForm').form('submit', {
					url : 'updateCfgBanBin.html',
					onSubmit : function() {
						return $(this).form('validate');
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#modifyCfgBanBinForm_div').dialog('close');
							$('#cfgBanBinList').datagrid('reload');
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
				$('#modifyCfgBanBinForm_div').dialog('close');
			}
		} ]
	});
	$('#addCfgBanBinForm_bin').validatebox({
		required : true,
		missingMessage : '请输入卡bin',
		validType : 'length[1,24]'
	});
	$('#addCfgBanBinForm_panLength').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入银行卡号长度'
	});
	$('#modifyCfgBanBinForm_bin').validatebox({
		required : true,
		missingMessage : '请输入卡bin',
		validType : 'length[1,24]'
	});
	$('#modifyCfgBanBinForm_panLength').numberbox({
		min : 0,
		precision : 0,
		required : true,
		missingMessage : '请输入银行卡号长度'
	});
});