package com.lch.base.basedb.service.impl;

import java.util.List;

import com.lch.base.basedb.data.TRoleMapper;
import com.lch.base.basedb.data.TUserRoleMapper;
import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.model.TUserRoleExample;
import com.lch.base.basedb.model.TUserRoleExample.Criteria;
import com.lch.base.basedb.model.TUserRoleKey;
import com.lch.base.basedb.service.UserRoleDbService;


public class UserRoleDbServiceImpl implements UserRoleDbService {
	
	private TRoleMapper tRoleMapper;
	private TUserRoleMapper tUserRoleMapper;
	
	public void settRoleMapper(TRoleMapper tRoleMapper) {
		this.tRoleMapper = tRoleMapper;
	}


	public void settUserRoleMapper(TUserRoleMapper tUserRoleMapper) {
		this.tUserRoleMapper = tUserRoleMapper;
	}


	@Override
	public List<TRole> selectRoleByUserName(String userName) {
		return tRoleMapper.selectRoleByUserName(userName);
	}

	@Override
	public int addUserRole(TUserRoleKey ur) {
		return tUserRoleMapper.insertSelective(ur);
	}

	@Override
	public int deletUserRoleByUserId(Integer userId) {
		TUserRoleExample example = new TUserRoleExample();
		Criteria criteria = example.createCriteria();
		criteria.andUserIdEqualTo(userId);
		return tUserRoleMapper.deleteByExample(example);
	}


	
}
