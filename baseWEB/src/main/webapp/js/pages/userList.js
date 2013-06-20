	$(function(){
		roleTable();
		
		$.extend($.fn.validatebox.defaults.rules, {   
		    equals: {   
		        validator: function(value,param){   
		            return value == $(param[0]).val();   
		        },   
		        message: '两次密码不一致'  
		    },
		    moblie: {   
		        validator: function(value,param){   
		            return /^([0-9]{11})?$/.test(value);   
		        },   
		        message: '手机号格式不正确'  
		    }
		});
		
		$(":checkbox[name=roles]").click(function(){
			var len = $(":checkbox[name=roles]:checked").length;
			if(len ==0){
				$("#all").prop("checked",true);
			}else{
				$("#all").prop("checked",false);
			}
		});
		$("#all").click(function(){
			if($("#all").prop("checked")){
				$(":checkbox[name=roles]").prop("checked",false);
			}
		});
		
	});
	
	function roleTable(){
		$('#agrList_data').datagrid({
			iconCls: 'icon-edit',
			striped: true,
			remoteSort: false,
			idField: 'id',
			fit : true,
			showFooter: false,
			singleSelect: true,
			pagination : true,
		    pagePosition : 'bottom',
		    pageNumber : 1,
		    pageSize: 10,//每页显示的记录条数，默认为10  
			pageList: [10,15,25,50,100],//可以设置每页记录条数的列表
			rownumbers: true,
			toolbar : '#tb',
			url: $("#userListUrl").val(),
			
			columns:[[
	            {field: 'username', title: '用户名', width: '130', align: 'center'},
			    {field: 'email', title: '邮箱', width: '150', align: 'center'},
			    {field: 'moble', title: '手机号', width: '110', align: 'center'},
			    {field: 'roles', title: '角色', width: '235', align: 'center',
			    	formatter:function(value, rowData, index){
			    		var roles = "";
			    		$.each(value,function(i,value){
			    			if(i!=0){
				    			roles += "," + value.roleName;
			    			}else{
			    				roles += value.roleName;
			    			}
			    		});
		    			return roles;
			    	}},
			    {field: 'receive', title: '是否接收短信/邮件', width: '100', align: 'center',
			    	formatter:function(value, rowData, index){
			    		if(value == 0){
			    			return '不接收';
			    		}else if(value == 1){
			    			return '接收';
			    		}
			    	}},
			    
			    {field: 'status', title: '状态', width: '60', align: 'center',
			    	formatter: function(value, rowData, index){
			    		if(value == 1){
			    			return '正常';
			    		}else if(value == 2){
			    			return '禁用';
			    		}
			    	}
			    },
			    {field: 'changeuser', title: '变更人', width: '130', align: 'center'},
			    {field: 'changetime', title: '变更时间', width: '130', align: 'center',
			    	formatter : function(value,rowData,rowIndex){
		        		return new Date(value).format();
		        }}
			    ] ]
			    
		});
		//设置分页控件
		var p = $('#agrList_data').datagrid('getPager');
		$(p).pagination({
			beforePageText: '第',//页数文本框前显示的汉字
			afterPageText: '页    共 {pages} 页',
			displayMsg: '<span class="marrig20">共 {total} 条记录</span>',
			onBeforeRefresh:function(){  
		 		$('#agrList_data').datagrid('load');  
		 		return false;
	 		} 
		});
	}

	function userquery(){
		var roles = "";
		$(":checkbox[name=roles]:checked").each(function(){
			roles += $(this).val()+",";
		});
	    $('#agrList_data').datagrid({//重载datagrid
	    	pagination: true,
	    	url: $("#userListUrl").val(),
			pageNumber : 1,
			//向底层传递参数
			queryParams : {
				username: $("#username").val(),
				status: $(".combo-value").val(),
				roles: roles
			}
	    });
	}
	
	
	function toAddUser(){  
        $.ajax({
        	type : 'POST',
        	url : $("#rolesUrl").val(),
        	dataType : 'json',
        	async:false,//设成同步
        	cache : false,
        	traditional : true,
        	success : function(data) {
        		var role = "";
        		$.each(data.rows,function(i,value){
        			role+='<label><input type="checkbox" name="roles1" value="'+value.roleId+'"/>'+value.roleName+'</label>';
        		});
        		$("#rolespan").html(role);
        	}
        });
        $("#defalutCheck").prop("checked",true);
    } 
	
	function saveUser(){
		$('#addUserFm').form('submit',{   
		    url:$("#adduserUrl").val(),   
		    onSubmit: function(){   
		       return $(this).form('validate')&&checkName()&&checkRole();
		    },   
		    success:function(data){
		        if(data=="1"){
		        	$('#addUserDiv').dialog('close');      // close the dialog  
                    $('#agrList_data').datagrid('reload');    // reload the user data  
		        }else{
		        	$.messager.alert('添加账号','添加失败，请稍后重试');
		        }
		    }   
		}); 
	}
	
	
	function checkRole(){
		if($(":checkbox[name=roles1]:checked").length==0){
			$.messager.alert('添加账号','请选择角色');   
			return false;
		}
		return true;
	}
	function checkName(){
		var result = "";
		$.ajax({
			type : 'POST',
			url : $("#checkUserNameUrl").val(),
			data : {
				username:$("#username1").val()
			},
			dataType : 'text',
			async:false,//设成同步
			cache : false,
			traditional : true,
			success : function(data) {
				result = data;
			}
		});
		if(result == '1'){
			$.messager.alert('添加账号','帐户名已存在'); 
			return false;
		}
		return true;
	}
	
	function toUpdateUser(){
		var row = $('#agrList_data').datagrid('getSelected'); 
		
        if (row){  
            
            $('#updateUserFm').form('load',row);
            $("#updateUserFm #userpwd").val("");
            $("#updateUserFm #userpwd2").val("");
            $("#updateUser").html(row.username+"<input type='hidden' name='userId' value='"+row.userId+"'/>");
            
            
            $.each(row.roles,function(i,value){
            	$(":checked[name=role1][value="+value.roleId+"]").prop("checked",true);
            });
            $.ajax({
            	type : 'POST',
            	url : $("#rolesUrl").val(),
            	dataType : 'json',
            	async:false,//设成同步
            	cache : false,
            	traditional : true,
            	success : function(data) {
            		var role = "";
            		$.each(data.rows,function(i,value){
            			role+='<label><input type="checkbox" name="roles1" value="'+value.roleId+'"';
            			$.each(row.roles,function(i,val){
                        	if(val.roleId==value.roleId){
                        		role+='checked="checked"';
                        	}
                        });
            			role+='/>'+value.roleName+'</label>';
            		});
            		$("#rolespan2").html(role);
            	}
            });
            $('#upateUserDiv').dialog('open').dialog('setTitle','修改账户');  
        }else{
        	$.messager.alert('修改账号','请先选择要修改的账户'); 
        }
		
        
	}
	
	
	function updateUser(){
		$('#updateUserFm').form('submit',{   
			url:$("#updateUserUrl").val(),   
			onSubmit: function(){   
				return $(this).form('validate')&&checkRole();
			},   
			success:function(data){
				if(data=="1"){
					$('#upateUserDiv').dialog('close');      // close the dialog  
					$('#agrList_data').datagrid('reload');    // reload the user data  
				}else{
					$.messager.alert('修改账号','修改失败，请稍后重试');
				}
			}   
		}); 
	}