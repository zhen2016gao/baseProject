$(function(){
	loadMerPluginActive();
	//查询按钮
	$('#merPluginActive_a_search').linkbutton({
			iconCls : 'icon-search',
			plain : true,
			text : '查询'
		});
	$('#merPluginActive_a_search').bind('click', function() {
		$('#merPluginActiveList').datagrid({
			pagination : true,
			url : ctx+"getMerPluginActiveList.html",
			pageNumber : 1,
			queryParams : {
				startTime:$('#merPluginActiveStartTime').datebox('getValue'),
				endTime:$('#merPluginActiveEndTime').datebox('getValue')
			}
		});
	});

	function loadMerPluginActive(){
    	$('#merPluginActiveList').datagrid({
		title : '商户插件激活数',
		url : ctx + "getMerPluginActiveList.html",
		idField : 'id',
		rownumbers : true,
		pagination : true,
		singleSelect :true,
		fitColumns : false,
		showFooter: true,
		fit : true,
		toolbar : '#merPluginActiveList_toolbar',
		columns : [ [ 
          {field:'merNo',title:'商户编号',width : '178',align : 'center'},
          {field:'merName',title:'商户名称',width:'178',align:'center'},
          {field:'busNo',title:'业务拓展商编号',width :'175',align : 'center'},
          {field:'dbName',title:'业务拓展商名称',width:'178',align:'center'},
          {field:'pluginNum',title:'插件激活数',width :'175',align : 'center'
          },
          {field:'pluginCount',title:'累计激活数',width :'175',align : 'center'}
        
		] ]
	});
		}

});
