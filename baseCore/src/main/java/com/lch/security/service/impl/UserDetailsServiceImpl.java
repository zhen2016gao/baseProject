package com.lch.security.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.model.TUser;
import com.lch.base.basedb.service.UserDbService;
import com.lch.base.basedb.service.UserRoleDbService;
import com.lch.security.model.UserDetailsImpl;

public class UserDetailsServiceImpl implements UserDetailsService{

	protected MessageSourceAccessor messages = SpringSecurityMessageSource.getAccessor();
	
	private UserDbService userDbService;
	
	private UserRoleDbService userRoleDbService;

    public void setUserDbService(UserDbService userDbService) {
		this.userDbService = userDbService;
	}
    
	public void setUserRoleDbService(UserRoleDbService userRoleDbService) {
		this.userRoleDbService = userRoleDbService;
	}



	@Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
    	TUser tUser = userDbService.selectUserByUserName(userName);
    	
    	if(null == tUser){
    		throw new UsernameNotFoundException(messages.getMessage("User not found", new Object[] { userName }, "Username {0} not found"));
    	}
    	Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
    	List<TRole> tRoles = userRoleDbService.selectRoleByUserName(userName);
    	for(TRole cTRole : tRoles){
    		SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_"+cTRole.getRoleEnname());
    		authorities.add(authority);
    	}
    	
    	UserDetailsImpl tUserDetailsImpl = new UserDetailsImpl(tUser, authorities);
    	return tUserDetailsImpl;
    }

}
