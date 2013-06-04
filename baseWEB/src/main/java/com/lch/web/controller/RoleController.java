package com.lch.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lch.base.basedb.model.TRole;
import com.lch.log.Log;
import com.lch.web.service.RoleService;

@Controller
public class RoleController {
	@Resource 
	private RoleService roleService;
	
	@RequestMapping("/toRoles")
	public String toRoles(){
		return "roleList";
	}
	
	@RequestMapping("/roles")
	@ResponseBody
	@Log(desc="查询角色")
	public Map<String,Object> selectRoleList(){
		List<TRole> roles = roleService.selectRoleList();
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("rows", roles);
		return map;
	}
}
