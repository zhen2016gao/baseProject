$(function() {
	function checkVersion() {
		var result = "";
		$.ajax({
			type : 'POST',
			url : 'checkVersion.html',
			data : {
				version : $("#addDevePluginForm_version").val()
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
				msg : "版本号已被使用!"
			});
			return false;
		}
		return true;
	}
	$('#devePluginList').datagrid({
		title : '开发商插件管理',
		url : 'getDevePlugins.html',
		idField : 'id',
		fit : true,
		rownumbers : true,
		fitColumns : true,
		striped : true,
		remoteSort : false,
		singleSelect : true,
		pagination : true,
		border : false,
		toolbar : '#devePluginList_toolbar',
		columns : [ [ {
			field : 'upgradeFlag',
			title : '是否需要升级',
			align : 'center',
			hidden : true
		}, {
			field : 'version',
			title : '插件版本号',
			align : 'center',
			width : 80,
			sortable : true
		}, {
			field : 'verdorNo',
			title : '开发商编号',
			align : 'center',
			width : 120,
			sortable : true
		}, {
			field : 'deveName',
			title : '开发商名称',
			align : 'center',
			width : 120,
			sortable : true
		}, {
			field : 'platformNo',
			title : '平台',
			align : 'center',
			width : 80,
			sortable : true,
			formatter : function(value, rowData, rowIndex) {
				if (value == 1)
					return 'iOS';
				else if (value == 2)
					return 'Android';
				else if (value == 3)
					return 'Symbian';
				else if (value == 4)
					return 'Windows Phone';
				else if (value == 5)
					return 'BlackBerry';
				else
					return 'J2ME';
			}
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
		}, {
			field : 'changeUser',
			title : '变更人',
			align : 'center',
			width : 60,
			sortable : true
		}, {
			field : 'changeTime',
			title : '变更时间',
			align : 'center',
			width : 100,
			sortable : true,
			formatter : function(value, rowData, rowIndex) {
				return new Date(value).format();
			}
		} ] ]
	});

	$("#addDevePluginForm_verdorno").combobox({
		url : 'getVerdorNoList.html', // 你要跳转的做出处理的页面，要传的值拼接到后面
		valueField : "deveCode", // 给下拉框value赋值的值
		textField : "deveName", // 给下拉框Text的赋值
		multiple : false,// 是否多选
		required : true,
		editable : false,
		panelHeight : "200"
	});

	$("#addDevePluginForm_platformno").combobox({
		valueField : "id", // 给下拉框value赋值的值
		textField : "name", // 给下拉框Text的赋值
		multiple : false,// 是否多选
		required : true,
		panelHeight : "auto",
		editable : false,
		data : [ {
			id : '1',
			name : 'iOS'
		}, {
			id : '2',
			name : 'Android'
		}, {
			id : '3',
			name : 'Symbian'
		}, {
			id : '4',
			name : 'Windows Phone'
		}, {
			id : '5',
			name : 'BlackBerry'
		}, {
			id : '6',
			name : 'J2ME'
		} ]
	});
	$("#addDevePluginForm_upgradeflag").combobox({
		valueField : "id",
		textField : "name",
		multiple : false,
		panelHeight : "auto",
		required : true,
		editable : false,
		data : [ {
			id : '0',
			name : '不需升级'
		}, {
			id : '1',
			name : '提示升级'
		}, {
			id : '2',
			name : '强制升级'
		} ]
	});
	$('#addDevePluginForm_version').validatebox({
		required : true,
		missingMessage : '请输入插件版本号,规则：开发商编号-平台号-自定义版本号',
		validType : 'length[5,20]'
	});
	$("#modifyDevePluginForm_verdorno").combobox({
		url : "getVerdorNoList.html", // 你要跳转的做出处理的页面，要传的值拼接到后面
		valueField : "deveCode", // 给下拉框value赋值的值
		textField : "deveName", // 给下拉框Text的赋值
		multiple : false,// 是否多选
		required : true,
		editable : false,
		panelHeight : "200"
	});

	$("#modifyDevePluginForm_platformno").combobox({
		valueField : "id", // 给下拉框value赋值的值
		textField : "name", // 给下拉框Text的赋值
		multiple : false,// 是否多选
		required : true,
		editable : false,
		panelHeight : "auto",
		data : [ {
			id : '1',
			name : 'iOS'
		}, {
			id : '2',
			name : 'Android'
		}, {
			id : '3',
			name : 'Symbian'
		}, {
			id : '4',
			name : 'Windows Phone'
		}, {
			id : '5',
			name : 'BlackBerry'
		}, {
			id : '6',
			name : 'J2ME'
		} ]
	});
	$("#modifyDevePluginForm_upgradeflag").combobox({
		valueField : "id",
		textField : "name",
		multiple : false,
		panelHeight : "auto",
		required : true,
		editable : false,
		data : [ {
			id : '0',
			name : '不需升级'
		}, {
			id : '1',
			name : '提示升级'
		}, {
			id : '2',
			name : '强制升级'
		} ]
	});
	$('#modifyDevePluginForm_version').validatebox({
		required : true,
		missingMessage : '请输入插件版本号,规则：开发商编号-平台号-自定义版本号',
		validType : 'length[5,20]'
	});
	$('#devePluginList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	$('#devePluginList_a_add').linkbutton({
		iconCls : 'icon-add',
		plain : true,
		text : '新增'
	});
	$('#devePluginList_a_edit').linkbutton({
		iconCls : 'icon-edit',
		plain : true,
		text : '修改'
	});
	$('#devePluginList_a_search').bind('click', function() {
		$('#devePluginList').datagrid({
			pagination : true,
			url : 'getDevePlugins.html',
			pageNumber : 1,
			queryParams : {
				devename : $("#deveName").val(),
				verdorno : $("#verdorno").val(),
				version : $("#version").val()
			}
		});
	});
	$('#devePluginList_a_add').bind(
			'click',
			function() {
				$('#addDevePluginForm_div').dialog('open').dialog('setTitle',
						'添加开发商插件');
				$('#addDevePluginForm').form('clear');
				$("#addDevePluginForm_status1").prop("checked", true);
			});
	// 修改按钮
	$('#devePluginList_a_edit').bind(
			'click',
			function() {
				var row = $('#devePluginList').datagrid('getSelected');
				if (row) {
					$('#modifyDevePluginForm_div').dialog('open').dialog(
							'setTitle', '修改开发商插件');
					$('#modifyDevePluginForm').form('clear');
					// 填充值
					$('#modifyDevePluginForm').form('reset').form('load',row);
				} else {
//					$.messager.show({
//						title : '提示',
//						msg : "请选择需要修改的数据"
//					});
					alert("请选择需要修改的数据");
				}
			});

	$('#addDevePluginForm_div').dialog({
		title : '添加开发商插件',
		width : 400,
		height : 330,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#addDevePluginForm').form('submit', {
					url : 'addDevePlugin.html',
					onSubmit : function() {
						return $(this).form('validate') && checkVersion();
					},
					success : function(data) {
						// var data = eval('(' + data + ')');
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#addDevePluginForm_div').dialog('close');
							$('#devePluginList').datagrid('reload');
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
				$('#addDevePluginForm_div').dialog('close');
			}
		} ]
	});
	$('#modifyDevePluginForm_div').dialog({
		title : '修改开发商插件',
		width : 400,
		height : 330,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#modifyDevePluginForm').form('submit', {
					url : 'modifyDevePlugin.html',
					onSubmit : function() {
						return $(this).form('validate');
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#modifyDevePluginForm_div').dialog('close');
							$('#devePluginList').datagrid('reload');
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
				$('#modifyDevePluginForm_div').dialog('close');
			}
		} ]
	});
});
