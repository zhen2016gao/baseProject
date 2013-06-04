package com.lch.base.basedb.service;

import java.util.List;
import java.util.Map;

import com.lch.base.basedb.model.TLog;


/**
 * 日志查询
 * @author wangxiaowei
 *
 */
public interface TLogDbService {
	
	List<TLog> getTLogList(Map<String,Object> map);
	
	int getTLogCount(Map<String,Object> map);
	
	int saveTLog(TLog record);
}
