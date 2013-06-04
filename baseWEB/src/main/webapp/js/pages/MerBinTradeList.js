
$(function(){
	loadmerBinTrade();
	//查询按钮
	$('#merBinTrade_a_search').linkbutton({
			iconCls : 'icon-search',
			plain : true,
			text : '查询'
		});
	$('#merBinTrade_a_search').bind('click', function() {
		$('#merBinTradeList').datagrid({
			pagination : true,
			url : ctx+"getmerBinTradeList.html",
			pageNumber : 1,
			queryParams : {
				startTime:$('#merBinTradeStartTime').datebox('getValue'),
				endTime:$('#merBinTradeEndTime').datebox('getValue')
			}
		});
	});

	function loadmerBinTrade(){
    	$('#merBinTradeList').datagrid({
		title : '银行交易情况统计',
		url : ctx + "getmerBinTradeList.html",
		idField : 'id',
		rownumbers : true,
		pagination : true,
		singleSelect :true,
		fitColumns : false,
		showFooter: false,
		fit : true,
		toolbar : '#merBinTradeList_toolbar',
		columns : [ [ 
         
		        {field:'bankId',title:'银行编号',width : '110',align : 'center'},
		        {field:'bankName',title:'银行名称',width:'150',align:'center'},
		        {field:'sSucCount',title:'成功笔数',width : '130',align : 'center'},
		        {field:'sAllCount',title:'总笔数',width : '130',align : 'center'},
		        {field:'sAmt',title:'金额',width:'130',align:'center'},
		        {field:'sSucSum',title:'成功累积笔数',width : '130',align : 'center'},
		        {field:'sPCount',title:'累积总笔数',width : '130',align : 'center'},
		        {field:'asAmt',title:'累积金额(元)',width:'130',align:'center',
		        	formatter : function(value, rowData, index) {
		        		return formatNumTo(value);
		        	}
		        }
		        
		] ]
	});
		}

});
