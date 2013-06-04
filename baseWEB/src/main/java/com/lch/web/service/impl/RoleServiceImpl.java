package com.lch.web.service.impl;

import java.util.List;

import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.service.RoleDbService;
import com.lch.web.service.RoleService;

public class RoleServiceImpl implements RoleService{

	private RoleDbService roleDbService;
	
	
	public void setRoleDbService(RoleDbService roleDbService) {
		this.roleDbService = roleDbService;
	}


	@Override
	public List<TRole> selectRoleList() {
		return roleDbService.selectRoleList();
	}

}
