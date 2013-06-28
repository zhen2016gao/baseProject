package com.lch.web.service;

import java.util.List;

import com.lch.web.bean.Job;

public interface RemoteQuartzManagerService {

	public List<Job> getCurrentlyExecutingJobs();
	
	public List<Job> getJobDetails();
}
