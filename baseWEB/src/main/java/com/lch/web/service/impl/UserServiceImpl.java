package com.lch.web.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.model.TUser;
import com.lch.base.basedb.model.TUserRoleKey;
import com.lch.base.basedb.service.RoleDbService;
import com.lch.base.basedb.service.SeqDbService;
import com.lch.base.basedb.service.UserDbService;
import com.lch.base.basedb.service.UserRoleDbService;
import com.lch.security.model.UserDetailsImpl;
import com.lch.web.bean.UserInfoBean;
import com.lch.web.exception.PayPluginException;
import com.lch.web.service.UserService;

public class UserServiceImpl implements UserService {

	private UserDbService userDbService;
	private SeqDbService seqDbService;
	private UserRoleDbService userRoleDbService;
	private RoleDbService roleDbService;
	
	public void setUserDbService(UserDbService userDbService) {
		this.userDbService = userDbService;
	}

	public void setUserRoleDbService(UserRoleDbService userRoleDbService) {
		this.userRoleDbService = userRoleDbService;
	}

	public void setRoleDbService(RoleDbService roleDbService) {
		this.roleDbService = roleDbService;
	}

	public void setSeqDbService(SeqDbService seqDbService) {
		this.seqDbService = seqDbService;
	}


	@Override
	public int selectUserCount(Map<String, Object> map) {
		if(map == null){
			return 0;
		}
		return userDbService.selectUserCount(map);
	}


	@Override
	public List<UserInfoBean> selectUserList(Map<String, Object> map) {
		if(map == null){
			return null;
		}
		List<TUser> userList = userDbService.selectUserList(map);
		List<UserInfoBean> userInfos = new ArrayList<UserInfoBean>();
		for (TUser tUser : userList) {
			UserInfoBean userInfo = new UserInfoBean();
			try {
				org.springframework.beans.BeanUtils.copyProperties(tUser, userInfo);
			} catch (Exception e) {
				
			}
			List<TRole> roleList = roleDbService.selectRoleListByUserId(userInfo.getUserId());
			userInfo.setRoles(roleList);
			userInfos.add(userInfo);
		}
		return userInfos;
	}


	@Override
	public String checkUserName(String username) {
		if(username == null){
			return null;
		}
		TUser usr = userDbService.selectUserByUserName(username);
		return usr == null ? "0" : "1";
	}


	@Override
	public int insertUser(TUser user, String[] roles) throws PayPluginException{
		if(user == null || roles == null){
			return 0;
		}
		int userId = seqDbService.getUserId();
		
		String pwd = DigestUtils.md5Hex(user.getUserpwd());
		user.setUserpwd(pwd);
		user.setUserId(userId);
		user.setStatus(1);
		int res = userDbService.insertUser(user);
		if(res==0){
			throw new PayPluginException("添加账户失败");
		}
		TUserRoleKey ur = new TUserRoleKey();
		ur.setUserId(userId);
		for (String role : roles) {
			if(StringUtils.isNotEmpty(role)){
				ur.setRoleId(Integer.parseInt(role));
				res = userRoleDbService.addUserRole(ur);
				if(res == 0){
					throw new PayPluginException("添加账户角色关联失败");
				}
			}
		}
		
		return 1;
	}

	@Override
	public UserInfoBean selectUserById(Integer userId) {
		if(userId == null){
			return null;
		}
		TUser user = userDbService.selectUserByUserId(userId);
		UserInfoBean userInfo = new UserInfoBean();
		try {
			BeanUtils.copyProperties(userInfo, user);
		} catch (Exception e) {
		} 
		List<TRole> roles = roleDbService.selectRoleListByUserId(userId);
		userInfo.setRoles(roles);
		return userInfo;
	}

	@Override
	public int UpdateUser(TUser user, String[] roles) throws PayPluginException{
		if(user == null || roles == null){
			return 0;
		}
		if(StringUtils.isNotEmpty(user.getUserpwd())){
			Md5PasswordEncoder md5Util = new Md5PasswordEncoder();
			String pwd = md5Util.encodePassword(user.getUserpwd(), null);
			user.setUserpwd(pwd);
		}
		//user.setChangeTime(new Date());
		int res = userDbService.updateUser(user);
		if(res==0){
			throw new PayPluginException("修改账户信息失败");
		}
		
		userRoleDbService.deletUserRoleByUserId(user.getUserId());
		TUserRoleKey ur = new TUserRoleKey();
		ur.setUserId(user.getUserId());
		for (String role : roles) {
			if(StringUtils.isNotEmpty(role)){
				ur.setRoleId(Integer.parseInt(role));
				res = userRoleDbService.addUserRole(ur);
				if(res == 0){
					throw new PayPluginException("添加账户角色关联失败");
				}
			}
		}
		
		return 1;
	}

    public TUser getLoginTUser(){
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication auth = context.getAuthentication();
        if(null == auth){
            return null;
        }
        UserDetailsImpl userDetailsImpl = (UserDetailsImpl)auth.getPrincipal();
        if(null == userDetailsImpl){
            return null;
        }
        TUser tUser = userDetailsImpl.gettUser();
        if(null == tUser){
            return null;
        }
        Integer userId = tUser.getUserId();
        if(null == userId){
            return null;
        }
        return userDbService.selectUserByUserId(userId);
    }
}
