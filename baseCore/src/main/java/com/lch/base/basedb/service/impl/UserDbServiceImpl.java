package com.lch.base.basedb.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.lch.base.basedb.data.TUserMapper;
import com.lch.base.basedb.model.TUser;
import com.lch.base.basedb.model.TUserExample;
import com.lch.base.basedb.model.TUserExample.Criteria;
import com.lch.base.basedb.service.UserDbService;


public class UserDbServiceImpl implements UserDbService {
	
	private TUserMapper tUserMapper;

	public void settUserMapper(TUserMapper tUserMapper) {
		this.tUserMapper = tUserMapper;
	}

	@Override
	public int insertUser(TUser user) {
		return tUserMapper.insertSelective(user);
	}

	@Override
	public int updateUser(TUser user) {
		return tUserMapper.updateByPrimaryKeySelective(user);
	}

	@Override
	public TUser selectUserByUserId(Integer userId) {
		return tUserMapper.selectByPrimaryKey(userId);
	}

	@Override
	public int selectUserCount(Map<String, Object> map) {
		return tUserMapper.selectUserCount(map);
	}

	@Override
	public List<TUser> selectUserList(Map<String, Object> map) {
		return tUserMapper.selectUserList(map);
	}

	@Override
	public TUser selectUserByUserName(String userName) {
		TUserExample tUserExample = new TUserExample();
        Criteria criteria = tUserExample.createCriteria();
        criteria.andUsernameEqualTo(userName);
        List<TUser> users = tUserMapper.selectByExample(tUserExample);
        if(users.size() > 0){
            return users.get(0);
        }else{
            return null;
        }

	}

	@Override
	public List<String> selectEmail() {
		TUserExample example = new TUserExample();
		
		Criteria criteria = example.createCriteria();
		criteria.andStatusEqualTo(1);
		criteria.andReceiveEqualTo(1);
		List<TUser> list = tUserMapper.selectByExample(example);
		List<String> mailList = new ArrayList<String>();
		for (TUser tUser : list) {
			if(StringUtils.isNotEmpty(tUser.getEmail())){
				mailList.add(tUser.getEmail());
			}
		}
		return mailList;
	}
	
}
