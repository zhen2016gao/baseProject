package com.lch.base.basedb.service.impl;

import java.util.List;
import java.util.Map;

import com.lch.base.basedb.data.TLogMapper;
import com.lch.base.basedb.model.TLog;
import com.lch.base.basedb.service.TLogDbService;


public class TLogDbServiceImpl implements TLogDbService {
	private TLogMapper tLogMapper;

	public void settLogMapper(TLogMapper tLogMapper) {
		this.tLogMapper = tLogMapper;
	}

	@Override
	public List<TLog> getTLogList(Map<String, Object> map) {
		return tLogMapper.getTLogList(map);
	}

	@Override
	public int getTLogCount(Map<String, Object> map) {
		return tLogMapper.getTLogCount(map);
	}

	@Override
	public int saveTLog(TLog record) {
		return tLogMapper.insert(record);
	}
	
	
}
