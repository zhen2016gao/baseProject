package com.lch.web.controller;

import org.springframework.security.core.context.SecurityContextHolder;

import com.lch.security.model.UserDetailsImpl;

public abstract class BaseController {

	protected UserDetailsImpl getUserInfo(){
		UserDetailsImpl webUserDetails = (UserDetailsImpl)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return webUserDetails;
	}
	
}
