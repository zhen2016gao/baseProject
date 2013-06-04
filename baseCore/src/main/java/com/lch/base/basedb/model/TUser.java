package com.lch.base.basedb.model;

import java.io.Serializable;
import java.util.Date;

public class TUser implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.user_id
     *
     * @mbggenerated
     */
    private Integer userId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.username
     *
     * @mbggenerated
     */
    private String username;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.userpwd
     *
     * @mbggenerated
     */
    private String userpwd;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.email
     *
     * @mbggenerated
     */
    private String email;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.moble
     *
     * @mbggenerated
     */
    private String moble;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.status
     *
     * @mbggenerated
     */
    private Integer status;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.receive
     *
     * @mbggenerated
     */
    private Integer receive;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.changeUser
     *
     * @mbggenerated
     */
    private String changeuser;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_user.changeTime
     *
     * @mbggenerated
     */
    private Date changetime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.user_id
     *
     * @return the value of t_user.user_id
     *
     * @mbggenerated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.user_id
     *
     * @param userId the value for t_user.user_id
     *
     * @mbggenerated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.username
     *
     * @return the value of t_user.username
     *
     * @mbggenerated
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.username
     *
     * @param username the value for t_user.username
     *
     * @mbggenerated
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.userpwd
     *
     * @return the value of t_user.userpwd
     *
     * @mbggenerated
     */
    public String getUserpwd() {
        return userpwd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.userpwd
     *
     * @param userpwd the value for t_user.userpwd
     *
     * @mbggenerated
     */
    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd == null ? null : userpwd.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.email
     *
     * @return the value of t_user.email
     *
     * @mbggenerated
     */
    public String getEmail() {
        return email;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.email
     *
     * @param email the value for t_user.email
     *
     * @mbggenerated
     */
    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.moble
     *
     * @return the value of t_user.moble
     *
     * @mbggenerated
     */
    public String getMoble() {
        return moble;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.moble
     *
     * @param moble the value for t_user.moble
     *
     * @mbggenerated
     */
    public void setMoble(String moble) {
        this.moble = moble == null ? null : moble.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.status
     *
     * @return the value of t_user.status
     *
     * @mbggenerated
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.status
     *
     * @param status the value for t_user.status
     *
     * @mbggenerated
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.receive
     *
     * @return the value of t_user.receive
     *
     * @mbggenerated
     */
    public Integer getReceive() {
        return receive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.receive
     *
     * @param receive the value for t_user.receive
     *
     * @mbggenerated
     */
    public void setReceive(Integer receive) {
        this.receive = receive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.changeUser
     *
     * @return the value of t_user.changeUser
     *
     * @mbggenerated
     */
    public String getChangeuser() {
        return changeuser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.changeUser
     *
     * @param changeuser the value for t_user.changeUser
     *
     * @mbggenerated
     */
    public void setChangeuser(String changeuser) {
        this.changeuser = changeuser == null ? null : changeuser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_user.changeTime
     *
     * @return the value of t_user.changeTime
     *
     * @mbggenerated
     */
    public Date getChangetime() {
        return changetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_user.changeTime
     *
     * @param changetime the value for t_user.changeTime
     *
     * @mbggenerated
     */
    public void setChangetime(Date changetime) {
        this.changetime = changetime;
    }
}