package com.lch.base.basedb.service;

import org.springframework.transaction.annotation.Transactional;

/**
 * 主键生成器
 * 
 * @author LinChunqiu
 * 
 */
public interface SeqDbService {

	/**
	 * 获取账户ID
	 * 
	 * @return
	 */
	@Transactional
	int getUserId();

	/**
	 * 用户注册ID
	 * 
	 * @return
	 */
	@Transactional
	int getUserRegistId();
	
	/**
	 * 获取日志操作ID
	 * @return
	 */
	@Transactional
	int getTOperatingRecordId();
}
