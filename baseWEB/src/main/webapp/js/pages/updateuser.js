$(function(){
		
		$("#sub").click(function(e){
			e.preventDefault();
			$('#updateUserForm').submit();
		});
		$('#updateUserForm').form({   
		    url:$('#updateUserForm').attr("action"),   
		    onSubmit: function(){   
		       return $(this).form('validate')&&checkpwd()&&checkRole();
		    },   
		    success:function(data){
		        if(data=="1"){
		        	alert("修改成功");
		        	open1('账户修改',$("#refreshUrl").val());
		        }else{
		        	alert("修改失败，请稍后重试");
		        }
		    }   
		}); 
		
		$.extend($.fn.validatebox.defaults.rules, {   
		    equals: {   
		        validator: function(value,param){   
		            return param[0]==null||param[0]==''||value == $(param[0]).val();   
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
		
		function checkRole(){
			if($(":checkbox[name=roles1]:checked").length==0){
				alert("请选择角色");
				return false;
			}
			return true;
		}
		
		function checkpwd(){
			var pwd = $("#userpwd").val();
			var pwd2 = $("#userpwd2").val();
			if(pwd!=null&&pwd!=''&&(pwd2==null||pwd2=='')){
				alert("请输入确认密码");
				return false;
			}
			return true;
		}
		/* function checkName(){
			var result = "";
			$.ajax({
				type : 'POST',
				url : '<c:url value="/checkUserName.html"/>',
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
				alert("账户名已存在");
				return false;
			}
			return true;
		} */
		
	});