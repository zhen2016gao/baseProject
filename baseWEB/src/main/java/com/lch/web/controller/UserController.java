package com.lch.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lch.base.basedb.model.TRole;
import com.lch.base.basedb.model.TUser;
import com.lch.log.Log;
import com.lch.web.bean.UserInfoBean;
import com.lch.web.bean.UserVO;
import com.lch.web.exception.PayPluginException;
import com.lch.web.service.RoleService;
import com.lch.web.service.UserService;

@Controller
public class UserController extends BaseController{
	@Resource
	private UserService userService;
	@Resource
	private RoleService roleService;

	private Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@RequestMapping("/toUserList")
	public String toUserList(Model model){
		List<TRole> roles = roleService.selectRoleList();
		model.addAttribute("roles", roles);
		return "userList";
	}
	@RequestMapping(value="/userList")
	@ResponseBody
	@Log(desc="查询账户")
	//public Map<String, Object> selectUserList(HttpServletRequest request,String page,String rows,String status,String username,String roles){
	public Map<String, Object> selectUserList(UserVO userVO){
		/*// 当前页
		int intPage = Integer.parseInt((page == null) ? "1" : page);
		// 每页显示行数
		int no = Integer.parseInt((rows == null || "0".equals(rows)) ? "10" : rows);*/
		
		int end = userVO.getEnd();
		int start = userVO.getStart();
		Map<String,Object> map = new HashMap<String, Object>();
		
		if(userVO.getStatus() != null){
			map.put("status", userVO.getStatus());
		}
		if(StringUtils.isNotEmpty(userVO.getUsername())){
			map.put("username", userVO.getUsername());
		}
		if(StringUtils.isNotEmpty(userVO.getRoles())){
			List<String> list = new ArrayList<String>();
			for (String role : userVO.getRoles().split(",")) {
				list.add(role);
			}
			map.put("roles", list);
		}
		int count = userService.selectUserCount(map);
		Map<String,Object> jsonMap = new HashMap<String, Object>();
		jsonMap.put("total", count);
		map.put("start", start);
		map.put("end", end);
		List<UserInfoBean> userList = userService.selectUserList(map);
		jsonMap.put("rows", userList);
		return jsonMap;
	}
	
	@RequestMapping("/checkUserName")
	@ResponseBody
	public String checkUserName(String username){
		return userService.checkUserName(username);
	}
	
	@RequestMapping("/addUser")
	@ResponseBody
	@Log(desc="添加账户")
	public int addUser(UserVO userVO){
		int result = 0;
		TUser user = new TUser();
		if(StringUtils.isNotEmpty(userVO.getUsername())){
			user.setUsername(userVO.getUsername());
		}
		if(StringUtils.isNotEmpty(userVO.getUserpwd())){
			user.setUserpwd(userVO.getUserpwd());
		}
		if(StringUtils.isNotEmpty(userVO.getEmail())){
			user.setEmail(userVO.getEmail());
		}
		if(StringUtils.isNotEmpty(userVO.getMoble())){
			user.setMoble(userVO.getMoble());
		}
		if(userVO.getReceive() != null){
			user.setReceive(userVO.getReceive());
		}
		user.setChangeuser(getUserInfo().getUsername());
		user.setChangetime(new Date());
		try {
			result = userService.insertUser(user, userVO.getRoles1());
		} catch (PayPluginException e) {
			logger.error("exception",e);
			return -1;
		}
		return result;
	}

	@RequestMapping("/updateUser")
	@ResponseBody
	@Log(desc="修改账户")
	public int updateUser(UserVO userVO){
		int result = 0;
		TUser user = new TUser();
		user.setUserId(userVO.getUserId());
		if(StringUtils.isNotEmpty(userVO.getUserpwd())){
			user.setUserpwd(userVO.getUserpwd());
		}
		if(StringUtils.isNotEmpty(userVO.getEmail())){
			user.setEmail(userVO.getEmail());
		}
		if(StringUtils.isNotEmpty(userVO.getMoble())){
			user.setMoble(userVO.getMoble());
		}
		if(userVO.getReceive() != null){
			user.setReceive(userVO.getReceive());
		}
		if(userVO.getStatus() != null){
			user.setStatus(userVO.getStatus());
		}
		user.setChangeuser(getUserInfo().getUsername());
		user.setChangetime(new Date());
		try {
			result = userService.UpdateUser(user, userVO.getRoles1());
		} catch (PayPluginException e) {
			logger.error("exception",e);
			return -1;
		}
		return result;
	}
	
}
