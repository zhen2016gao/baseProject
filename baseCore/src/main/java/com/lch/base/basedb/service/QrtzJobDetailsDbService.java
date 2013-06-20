package com.lch.base.basedb.service;

import java.util.List;
import java.util.Map;

import com.lch.base.basedb.tvo.JobTVO;

public interface QrtzJobDetailsDbService {

	public List<JobTVO> queryJobDetail(Map<String, Object> map);
	
	public int queryJobDetailCount(Map<String, Object> map);
	
}
