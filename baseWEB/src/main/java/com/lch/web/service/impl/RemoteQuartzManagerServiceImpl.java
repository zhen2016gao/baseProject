package com.lch.web.service.impl;

import java.util.List;

import com.lch.web.bean.Job;
import com.lch.web.service.QuartzJMXAdapter;
import com.lch.web.service.RemoteQuartzManagerService;

public class RemoteQuartzManagerServiceImpl implements
		RemoteQuartzManagerService {

	private QuartzJMXAdapter quartzJMXAdapter;
	
	public void setQuartzJMXAdapter(QuartzJMXAdapter quartzJMXAdapter) {
		this.quartzJMXAdapter = quartzJMXAdapter;
	}

	@Override
	public List<Job> getCurrentlyExecutingJobs() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Job> getJobDetails() {
		return null;
	}

}
