package com.lch.base.basedb.service;

import java.util.List;

import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.model.TUserRoleKey;

public interface UserRoleDbService {

	public List<TRole> selectRoleByUserName(String userName);
	
	public int addUserRole(TUserRoleKey ur);
	
	public int deletUserRoleByUserId(Integer userId);
}
