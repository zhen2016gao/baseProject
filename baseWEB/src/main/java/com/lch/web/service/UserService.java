package com.lch.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

import com.lch.base.basedb.model.TUser;
import com.lch.web.bean.UserInfoBean;
import com.lch.web.exception.PayPluginException;

/**
 *  账户
 * @author LinChunqiu
 *
 */
public interface UserService {
	
	/**
	 * 按条件查询数量
	 * @param map status 状态；roles角色列表；username用户名
	 * @return
	 */
	int selectUserCount(Map<String,Object> map);
	/**
	 * 按条件查询列表
	 * @param map status 状态；roles角色列表；username用户名  start end
	 * @return
	 */
	List<UserInfoBean> selectUserList(Map<String,Object> map);
	/**
	 * 验证账户名是否重复
	 * @param username
	 * @return 1 存在 0 不存在
	 */
	String checkUserName(String username);
	/**
	 * 添加账户
	 * @param user
	 * @param roles
	 * @return
	 * @throws PayPluginException
	 */
	@Transactional
	int insertUser(TUser user,String[] roles) throws PayPluginException;
	/**
	 * 根据id查询用户详情
	 * @param UserId
	 * @return
	 */
	UserInfoBean selectUserById(Integer userId);
	/**
	 * 修改账户信息
	 * @param user
	 * @param roles
	 * @return
	 */
	int UpdateUser(TUser user,String[] roles) throws PayPluginException;
	TUser getLoginTUser();
}
