package com.lch.base.basedb.service.impl;

import java.util.List;

import com.lch.base.basedb.data.TRoleMapper;
import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.model.TRoleExample;
import com.lch.base.basedb.service.RoleDbService;


public class RoleDbServiceImpl implements RoleDbService {

	private TRoleMapper tRoleMapper;
	
	public void settRoleMapper(TRoleMapper tRoleMapper) {
		this.tRoleMapper = tRoleMapper;
	}

	@Override
	public List<TRole> selectRoleList() {
		TRoleExample example = new TRoleExample();
		return tRoleMapper.selectByExample(example);
	}

	@Override
	public List<TRole> selectRoleListByUserId(Integer userId) {
		return tRoleMapper.selectRoleListByUserId(userId);
	}

	
	
}
