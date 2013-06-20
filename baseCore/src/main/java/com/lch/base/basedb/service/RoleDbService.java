package com.lch.base.basedb.service;

import java.util.List;

import com.lch.base.basedb.model.TRole;


public interface RoleDbService {
	/**
	 * 查询全部的角色信息
	 * @return
	 */
	List<TRole> selectRoleList();
	/**
	 * 根据用户id查询所具有的角色
	 * @return
	 */
	List<TRole> selectRoleListByUserId(Integer userId);
	
}
