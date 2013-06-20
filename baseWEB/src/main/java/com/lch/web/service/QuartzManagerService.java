package com.lch.web.service;

import java.util.List;
import java.util.Map;

import org.quartz.TriggerKey;

import com.lch.base.basedb.tvo.JobTVO;
import com.lch.web.bean.JobVO;

public interface QuartzManagerService {

	public boolean addJob(JobVO jobVO);
	
	public boolean pauseJob(JobVO jobVO);
	
	public boolean removeJob(JobVO jobVO);
	
	public boolean resumeJob(JobVO jobVO);
	
	public void shutDown(boolean waitForJobsToComplete);
	
	public boolean unscheduleJob(TriggerKey triggerKey);
	
	public List<JobTVO> queryJobDetail(Map<String, Object> map);
	
	public int queryJobDetailCount(Map<String, Object> map);
}
