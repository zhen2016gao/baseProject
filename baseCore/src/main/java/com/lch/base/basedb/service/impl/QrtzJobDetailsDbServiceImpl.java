package com.lch.base.basedb.service.impl;

import java.util.List;
import java.util.Map;

import com.lch.base.basedb.data.QrtzJobDetailsMapper;
import com.lch.base.basedb.service.QrtzJobDetailsDbService;
import com.lch.base.basedb.tvo.JobTVO;

public class QrtzJobDetailsDbServiceImpl implements QrtzJobDetailsDbService {

	private QrtzJobDetailsMapper qrtzJobDetailsMapper;
	
	public void setQrtzJobDetailsMapper(QrtzJobDetailsMapper qrtzJobDetailsMapper) {
		this.qrtzJobDetailsMapper = qrtzJobDetailsMapper;
	}

	@Override
	public List<JobTVO> queryJobDetail(Map<String, Object> map) {
		return qrtzJobDetailsMapper.queryJobDetail(map);
	}

	@Override
	public int queryJobDetailCount(Map<String, Object> map) {
		return qrtzJobDetailsMapper.queryJobDetailCount(map);
	}

}
