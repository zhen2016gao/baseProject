package com.lch.web.service;

import java.util.List;

import com.lch.base.basedb.model.TRole;


public interface RoleService {
	/**
	 * 查询全部角色
	 * @return
	 */
	List<TRole> selectRoleList();
}
