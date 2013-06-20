package com.lch.base.basedb.service;

import java.util.List;
import java.util.Map;

import com.lch.base.basedb.model.TUser;

public interface UserDbService {
	/**
	 * 添加新账户
	 * @param user
	 * @return
	 */
	int insertUser(TUser user);
	/**
	 * 修改账户
	 * @param user
	 * @return
	 */
	int updateUser(TUser user);
	/**
	 * 按照主键查询账户
	 * @param userId
	 * @return
	 */
	TUser selectUserByUserId(Integer userId);
	/**
	 * 按条件查询出账户数量
	 * @param map
	 * @return
	 */
	int selectUserCount(Map<String,Object> map);
	/**
	 * 按照条件查询账户信息
	 * @param map
	 * @return
	 */
	List<TUser> selectUserList(Map<String,Object> map);
	TUser selectUserByUserName(String userName);
	/**
	 * 查询全部可以接受报警的邮箱
	 * @return
	 */
	List<String> selectEmail();
}
