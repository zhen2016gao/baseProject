package com.lch.web.bean;

import java.util.Date;
import java.util.List;

import com.lch.base.basedb.model.TRole;


public class UserInfoBean {
	private Integer userId;
    private String username;
    private String userpwd;
    private String email;
    private String moble;
    private Integer status;
    private Integer receive;
    private List<TRole> roles;//角色
    private String changeuser;
    private Date changetime;
    
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserpwd() {
		return userpwd;
	}
	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMoble() {
		return moble;
	}
	public void setMoble(String moble) {
		this.moble = moble;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Integer getReceive() {
		return receive;
	}
	public void setReceive(Integer receive) {
		this.receive = receive;
	}
	public List<TRole> getRoles() {
		return roles;
	}
	public void setRoles(List<TRole> roles) {
		this.roles = roles;
	}
	public String getChangeuser() {
		return changeuser;
	}
	public void setChangeuser(String changeuser) {
		this.changeuser = changeuser;
	}
	public Date getChangetime() {
		return changetime;
	}
	public void setChangetime(Date changetime) {
		this.changetime = changetime;
	}
    
}
