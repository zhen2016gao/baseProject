$(function() {
		$('#registBindList').datagrid({
			autoRowHeight : true,
			iconCls : 'icon-edit',
			striped : true,
			fit : true,
			/* remoteSort : false,
			singleSelect : true,
			showFooter : false,
			pagination : true,
			pagePosition : 'bottom', */
			pageNumber : 1,
			pageSize : 10,//每页显示的记录条数，默认为10  
			pageList : [ 10, 15, 25, 50, 100 ],//可以设置每页记录条数的列表 
			rownumbers : true,
			toolbar : '#registBindBar',
			url : ctx +'getRegistBindTradeList.html',

			columns : [ [ {
				field : 'registSum',
				title : '注册数',
				width : '70',
				align : 'center'
			}, {
				field : 'registCount',
				title : '累计注册数',
				width : '80',
				align : 'center'
			}, {
				field : 'bindSum',
				title : '新增绑定',
				width : '70',
				align : 'center'
			}, {
				field : 'unbindSum',
				title : '解除绑定',
				width : '70',
				align : 'center'
			}, {
				field : 'bindCount',
				title : '累计绑定合计',
				width : '80',
				align : 'center'
			}, {
				field : 'sSucSum',
				title : '笔数',
				width : '60',
				align : 'center'
			}, {
				field : 'sSucCount',
				title : '总笔数',
				width : '70',
				align : 'center'
			}, {
				field : 'sSucAmt',
				title : '金额(元)',
				width : '80',
				align : 'center',
				formatter : function(value,rowData,rowIndex){
					return formatNumTo(value);
				}
			}, {
				field : 'aSucSum',
				title : '认证笔数',
				width : '70',
				align : 'center'
			}, {
				field : 'aSucCount',
				title : '认证总笔数',
				width : '80',
				align : 'center'
			}, {
				field : 'aSucAmt',
				title : '认证金额(元)',
				width : '90',
				align : 'center',
				formatter : function(value,rowData,rowIndex){
					return formatNumTo(value);
				}
			}, {
				field : 'kSucSum',
				title : '快捷笔数',
				width : '70',
				align : 'center'
			}, {
				field : 'kSucCount',
				title : '快捷总笔数',
				width : '80',
				align : 'center'
			}, {
				field : 'kSucAmt',
				title : '快捷金额(元)',
				width : '90',
				align : 'center',
				formatter : function(value,rowData,rowIndex){
					return formatNumTo(value);
				}
			}, {
				field : 'cSucSum',
				title : '储值卡笔数',
				width : '80',
				align : 'center'
			}, {
				field : 'cSucCount',
				title : '储值卡总笔数',
				width : '80',
				align : 'center'
			}, {
				field : 'cSucAmt',
				title : '储值卡金额(元)',
				width : '100',
				align : 'center',
				formatter : function(value,rowData,rowIndex){
					return formatNumTo(value);
				}
			} ] ]
		});
		//设置分页控件
		var p = $('#registBindList').datagrid('getPager');
		$(p).pagination({
			beforePageText : '第',//页数文本框前显示的汉字
			afterPageText : '页    共 {pages} 页',
			displayMsg : '<span class="marrig20">共 {total} 条记录</span>',
			onBeforeRefresh : function() {
				$('#registBindList').datagrid('load');
				return false;
			}
		});
	});
	function selectRegistBindTrade() {
		$('#registBindList').datagrid({
			pagination : true,
			url : ctx +'getRegistBindTradeList.html',
			pageNumber : 1,
			queryParams : {
				startTime : $('#trade_startDate').datebox('getValue'),
				endTime : $("#trade_endDate").datebox('getValue')
			}
		});
	}