var editIndex = undefined;

function dateFormat(value){
	return new Date(value).format();
}

function submitForm(){
	$('#addJobForm').form('submit', {
		url: ctx + 'addJob.html',
		onSubmit: function(){
			return $(this).form('validate');
		},
		success:function(data){
			 var result = eval('(' + data + ')');
			if(result.result){
				$('#addJobDiv').dialog('close');      // close the dialog  
				clearForm();
			}else{
				$.messager.alert('新增作业','添加失败，请稍后重试');
			}
		}
	});
}

function clearForm(){
	$('#addJobForm').form('clear');
}

$(function(){

	
	$('#jobManager').datagrid({
		title: '作业管理',
		rownumbers : true,
		pagination : true,
		singleSelect : true,
		fitColumns : true,
		toolbar : '#jobManager_toolbar',
		url: ctx + 'queryjobManager.html',
		columns:[[
		          {field:'jobName', title:'任务名称', width:180,align:'center'},
		          {field:'jobGroup', title:'任务所属组', width:150,align:'center'},
		          {field:'description', title:'任务描述', width:150,align:'center'},
		          {field:'jobClassName', title:'任务类信息', width:200,align:'center'},
		          {field:'triggerState', title:'运行状态', width:200,align:'center', formatter: function(value,rowData,rowIndex){
		        	  if(value == 'ACQUIRED'){
		        		  return '运行中';
		        	  }else if(value == 'PAUSED'){
		        		  return '暂停中';
		        	  }else if(value == 'WAITING'){
		        		  return '等待中';
		        	  }else{
		        		  return value;
		        	  }
		          }},
		          {field:'nextFireTime', title:'下次执行时间', width:150,align:'center', formatter : function(value,rowData,rowIndex){ return new Date(value).format(); }},
		          {field:'prevFireTime', title:'上次执行时间', width:150,align:'center', formatter : function(value,rowData,rowIndex){ return new Date(value).format(); }},
		          {field:'startTime', title:'开始时间', width:150,align:'center', formatter : function(value,rowData,rowIndex){ return new Date(value).format(); }},
		          {field:'endTime', title:'结束时间', width:150,align:'center' , formatter : function(value,rowData,rowIndex){ if(value <= 0) return 0; else return new Date(value).format(); }}
		          ]],
		  onClickRow:onClickRow
	});
	
	
	
	$('#jobManager_a_search').linkbutton({
		iconCls : 'icon-search',
		plain : true,
		text : '查询'
	});
	
	$('#jobManager_a_addJob').linkbutton({
		iconCls : 'icon-add',
		plain : true,
		text : '添加作业'
	});
	$('#jobManager_a_delJob').linkbutton({
		iconCls : 'icon-remove',
		plain : true,
		text : '删除作业'
	});
	$('#jobManager_a_pauseJob').linkbutton({
		iconCls : 'icon-undo',
		plain : true,
		text : '暂停作业'
	});
	$('#jobManager_a_resumeJob').linkbutton({
		iconCls : 'icon-redo',
		plain : true,
		text : '恢复作业'
	});
	
	$('#jobManager_a_search').bind('click', function() {
		$('#jobManager').datagrid({
			pagination : true,
			url: ctx + 'queryjobManager.html',
			pageNumber : 1,
			queryParams : {
				jobName : $("#jobNameQuery").val(),
				jobGroup : $("#jobGroupQuery").val()
			}
		});
	});
	
	$('#jobManager_a_addJob').bind('click', function() {
		addJob();
	});
	
	$('#jobManager_a_delJob').bind('click', function() {
		if (editIndex == undefined){return }
		var row = $('#jobManager').datagrid('getSelected'); 
			$.ajax({
	        	type : 'POST',
	        	url : ctx + 'delJob.html',
	        	dataType : 'json',
	        	async:false,//设成同步
	        	cache : false,
	        	traditional : true,
	        	data:{
	        		jobName : row.jobName,
	        		jobGroup : row.jobGroup
	        	},
	        	success : function(data) {
	        		if(data.result){
	        			$('#jobManager').datagrid('cancelEdit', editIndex)
	        			.datagrid('deleteRow', editIndex);
	        			editIndex = undefined;
	        		}else{
	        			$.messager.alert('删除作业','删除失败，请稍后重试');
	        		}
	        	}
	        });
		
	});
	
	$('#jobManager_a_pauseJob').bind('click', function() {
		if (editIndex == undefined){return }
		var row = $('#jobManager').datagrid('getSelected'); 
			$.ajax({
	        	type : 'POST',
	        	url : ctx + 'pauseJob.html',
	        	dataType : 'json',
	        	async:false,//设成同步
	        	cache : false,
	        	traditional : true,
	        	data:{
	        		jobName : row.jobName,
	        		jobGroup : row.jobGroup
	        	},
	        	success : function(data) {
	        		if(data.result){
	        			$('#jobManager').datagrid('reload');
	        		}else{
	        			$.messager.alert('暂停作业','暂停失败，请稍后重试');
	        		}
	        	}
	        });
	});
	
	$('#jobManager_a_resumeJob').bind('click', function() {
		if (editIndex == undefined){return }
		var row = $('#jobManager').datagrid('getSelected'); 
			$.ajax({
	        	type : 'POST',
	        	url : ctx + 'resumeJob.html',
	        	dataType : 'json',
	        	async:false,//设成同步
	        	cache : false,
	        	traditional : true,
	        	data:{
	        		jobName : row.jobName,
	        		jobGroup : row.jobGroup
	        	},
	        	success : function(data) {
	        		if(data.result){
	        			$('#jobManager').datagrid('reload');
	        		}else{
	        			$.messager.alert('恢复作业','恢复失败，请稍后重试');
	        		}
	        	}
	        });
	});

});

function endEditing(){
	if (editIndex == undefined){return true}
	if ($('#jobManager').datagrid('validateRow', editIndex)){
		var ed = $('#jobManager').datagrid('getEditor', {index:editIndex,field:'productid'});
		var productname = $(ed.target).combobox('getText');
		$('#jobManager').datagrid('getRows')[editIndex]['productname'] = productname;
		$('#jobManager').datagrid('endEdit', editIndex);
		editIndex = undefined;
		return true;
	} else {
		return false;
	}
}


function onClickRow(index){
	if (editIndex != index){
		if (endEditing()){
			$('#jobManager').datagrid('selectRow', index)
					.datagrid('beginEdit', index);
			editIndex = index;
		} else {
			$('#jobManager').datagrid('selectRow', editIndex);
		}
	}
}

function addJob(){
	$('#addJobDiv').dialog('open').dialog('setTitle','添加作业');  
}