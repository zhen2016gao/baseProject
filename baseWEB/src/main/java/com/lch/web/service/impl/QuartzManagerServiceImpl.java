package com.lch.web.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.TriggerKey;
import org.quartz.impl.JobDetailImpl;
import org.quartz.impl.triggers.CronTriggerImpl;

import com.lch.base.basedb.service.QrtzJobDetailsDbService;
import com.lch.base.basedb.tvo.JobTVO;
import com.lch.web.bean.JobVO;
import com.lch.web.service.QuartzManagerService;
import com.lch.web.utils.QuartzUtils;

public class QuartzManagerServiceImpl implements QuartzManagerService {
	
	private static Log log = LogFactory.getLog(QuartzManagerServiceImpl.class);

	private Scheduler quartzScheduler;
	
	private QrtzJobDetailsDbService qrtzJobDetailsDbService;
	

	public void setQuartzScheduler(Scheduler quartzScheduler) {
		this.quartzScheduler = quartzScheduler;
	}
	
	public void setQrtzJobDetailsDbService(
			QrtzJobDetailsDbService qrtzJobDetailsDbService) {
		this.qrtzJobDetailsDbService = qrtzJobDetailsDbService;
	}


	@Override
	public boolean addJob(JobVO jobVO) {
		try {
			JobDetailImpl jobDetail = QuartzUtils.getJobDetail(jobVO);
			quartzScheduler.addJob(jobDetail, true);
			CronTriggerImpl cronTrigger = QuartzUtils.getCronTigger(jobVO.getJobName(), jobVO.getJobGroup(), jobVO.getCronExpression(), jobVO.getJobKey());
			quartzScheduler.scheduleJob(cronTrigger);
			quartzScheduler.rescheduleJob(cronTrigger.getKey(), cronTrigger);
			return true;
		} catch (Exception e) {
			log.error(e.getMessage());
			return false;
		}
	}
	
	@Override
	public boolean removeJob(JobVO jobVO){
		
		try {
			pauseJob(jobVO);
			return quartzScheduler.deleteJob(jobVO.getJobKey());
		} catch (Exception e) {
			log.error(e.getMessage());
			return false;
		}
	}

	@Override
	public boolean pauseJob(JobVO jobVO) {
		try {
			quartzScheduler.pauseJob(jobVO.getJobKey());
			return true;
		} catch (SchedulerException e) {
			log.error(e.getMessage());
			return false;
		}
	}

	@Override
	public boolean resumeJob(JobVO jobVO) {
		try {
			quartzScheduler.resumeJob(jobVO.getJobKey());
			return true;
		} catch (SchedulerException e) {
			log.error(e.getMessage());
			return false;
		}
	}
	
	@Override
	public void shutDown(boolean waitForJobsToComplete){
		try {
			quartzScheduler.shutdown(waitForJobsToComplete);
		} catch (SchedulerException e) {
			log.error(e.getMessage());
		}
	}

	@Override
	public boolean unscheduleJob(TriggerKey triggerKey) {
		try {
			return quartzScheduler.unscheduleJob(triggerKey);
		} catch (SchedulerException e) {
			log.error(e.getMessage());
			return false;
		}
	}

	@Override
	public List<JobTVO> queryJobDetail(Map<String, Object> map) {
		return qrtzJobDetailsDbService.queryJobDetail(map);
	}

	@Override
	public int queryJobDetailCount(Map<String, Object> map) {
		return qrtzJobDetailsDbService.queryJobDetailCount(map);
	}

	
}
