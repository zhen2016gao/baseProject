$(function() {
	var deveNameLength = 'length[1,42]';
	function checkDeveName() {
		var result = "";
		$.ajax({
			type : 'POST',
			url : 'checkDeveName.html',
			data : {
				devename : $("#addDeveForm_devename").val()
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
				msg : "开发商名称已存在!"
			});
			return false;
		}
		return true;
	}
	function checkDeveCode() {
		var result = "";
		$.ajax({
			type : 'POST',
			url : 'checkDeveCode.html',
			data : {
				devecode : $("#addDeveForm_devecode").val()
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
				msg : "开发商编号已存在!"
			});
			return false;
		}
		return true;
	}
	// 查询
	function query() {
		$('#developerList').datagrid({
			pagination : true,
			url : 'getDevelopers.html',
			pageNumber : 1,
			queryParams : {
				devename : $("#devename").val(),
				devecode : $("#devecode").val(),
				status : $("#status").val()
			}
		});
	}

	$('#developerList').datagrid({
		title : '开发商管理',
		url : 'getDevelopers.html',
		idField : 'id',// 指明身份字段
		fit : true,//高度自动充满
		rownumbers : true,//行序号
		fitColumns : true,// 自动扩充列宽度,以适应屏幕分辨率
		striped : true,// 条纹行的效果
		remoteSort : false,// 是否使用服务器排序
		singleSelect : true,// 每次只能选择一行
		pagination : true,// 显示分页栏
		border : false,//边框
//		autoRowHeight : true,// 自动行高
//		showFooter : false,// 显示页脚(主要针对使用"合计行")
		toolbar : '#developersList_toolbar',
		columns : [ [ {
			field : 'deveCode',
			title : '开发商编号',
			align : 'center',
			width : 60,
			sortable : true
		}, {
			field : 'deveName',
			title : '开发商名称',
			align : 'center',
			width : 140,
			sortable : true
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
			field : 'remark',
			title : '备注',
			align : 'center',
			width : 100
		}, {
			field : 'changeUser',
			title : '变更人',
			width : 60,
			align : 'center',
			sortable : true
		}, {
			field : 'changeTime',
			title : '变更时间',
			width : 100,
			sortable : true,
			align : 'center',
			formatter : function(value, rowData, rowIndex) {
				return new Date(value).format();
			}
		} ] ]
	});

	$('#developersList_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	$('#developersList_a_add').linkbutton({
		iconCls : 'icon-add',
		plain : true,
		text : '新增'
	});
	$('#developersList_a_edit').linkbutton({
		iconCls : 'icon-edit',
		plain : true,
		text : '修改'
	});
	$('#developersList_a_search').bind('click', function() {
		$('#developerList').datagrid({
			pagination : true,
			url : 'getDevelopers.html',
			pageNumber : 1,
			queryParams : {
				devename : $("#devename").val(),
				devecode : $("#devecode").val(),
				status : $("#status").val()
			}
		});
	});
	// 添加按钮
	$('#developersList_a_add').bind('click', function() {
		$('#addDeveForm_div').dialog('open').dialog('setTitle', '添加开发商');
		$('#addDeveForm').form('clear');
		$("#addDeveForm_status1").prop("checked", false);
		$("#addDeveForm_status2").prop("checked", false);
		$("#addDeveForm_status1").prop("checked", true);
	});
	// 修改按钮
	$('#developersList_a_edit').bind(
			'click',
			function() {
				var row = $('#developerList').datagrid('getSelected');
				if (row) {
					$('#modifyDeveForm_div').dialog('open').dialog('setTitle',
							'修改开发商');
					$('#modifyDeveForm').form('clear');
					// 填充值
					$('#modifyDeveForm').form('reset').form('load', row);
				} else {
//					$.messager.show({
//						title : '提示',
//						msg : "请选择需要修改的数据"
//					});
					alert("请选择需要修改的数据");
				}
			});

	$('#addDeveForm_devecode').numberbox({
		min : 0,
		precision : 0,
		required : true,
		validType : config.numValidType,
		missingMessage : '请输入开发商编号'
	});
	$('#addDeveForm_devename').validatebox({
		required : true,
		missingMessage : '请输入开发商名称',
		validType : deveNameLength
	});
	$('#addDeveForm_div').dialog({
		title : '添加开发商',
		width : 360,
		height : 280,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#addDeveForm').form('submit', {
					url : 'addDevelopers.html',
					onSubmit : function() {
						return $(this).form('validate') && checkDeveName() && checkDeveCode();
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#addDeveForm_div').dialog('close');
							$('#developerList').datagrid('reload');
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
				$('#addDeveForm_div').dialog('close');
			}
		} ]
	});
	$('#modifyDeveForm_div').dialog({
		title : '修改开发商',
		width : 360,
		height : 300,
		modal : true,
		closed : true,
		buttons : [ {
			id : 'save',
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#modifyDeveForm').form('submit', {
					url : 'modifyDevelopers.html',
					onSubmit : function() {
						return $(this).form('validate');
					},
					success : function(data) {
						if (data.indexOf('1') >= 0) {
//							$.messager.show({
//								title : '提示',
//								msg : '操作成功！'
//							});
							$('#modifyDeveForm_div').dialog('close');
							$('#developerList').datagrid('reload');
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
				$('#modifyDeveForm_div').dialog('close');
			}
		} ]
	});
	$('#modifyDeveForm_devename').validatebox({
		required : true,
		missingMessage : '请输入开发商名称',
		validType : deveNameLength
	});
});