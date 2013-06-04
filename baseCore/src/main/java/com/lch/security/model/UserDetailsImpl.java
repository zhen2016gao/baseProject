package com.lch.security.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.lch.base.basedb.model.TUser;


public class UserDetailsImpl implements UserDetails{

    private static final long serialVersionUID = -7835118167762649974L;
    
    private TUser tUser;
    
    private Collection<GrantedAuthority> authorities;

	public UserDetailsImpl(TUser tUser,
			Collection<GrantedAuthority> authorities) {
		super();
		this.tUser = tUser;
		this.authorities = authorities;
	}

	@Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return this.authorities;
    }

    @Override
    public String getPassword(){
    	return tUser.getUserpwd();
    }

    @Override
    public String getUsername(){
        return tUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired(){
        return true;
    }

    /**
     * 1 正常 2禁用
     */
    @Override
    public boolean isAccountNonLocked(){
    	 return tUser.getStatus() == 1 ? true : false;
    }

    @Override
    public boolean isCredentialsNonExpired(){
        return true;
    }

    /**
     * 1 正常 2禁用
     */
    @Override
    public boolean isEnabled(){
        return tUser.getStatus() == 1 ? true : false;
    }

    /**
     * 扩展返回属性
     */
	public TUser gettUser() {
		return tUser;
	}
    
}
