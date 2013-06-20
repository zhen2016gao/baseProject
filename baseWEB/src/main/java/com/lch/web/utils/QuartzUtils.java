package com.lch.web.utils;

import java.text.ParseException;

import org.quartz.Job;
import org.quartz.JobKey;
import org.quartz.impl.JobDetailImpl;
import org.quartz.impl.triggers.CronTriggerImpl;

import com.lch.web.bean.JobVO;

public class QuartzUtils {

	@SuppressWarnings("unchecked")
	public static JobDetailImpl getJobDetail(JobVO jobVO) throws ClassNotFoundException{
		JobDetailImpl jobDetail = new JobDetailImpl();
		Object obj = Class.forName(jobVO.getJobClassName());
		jobDetail.setName(jobVO.getJobName());
		jobDetail.setJobClass((Class<? extends Job>) obj);
		jobDetail.setGroup(jobVO.getJobGroup());
		jobDetail.setDescription(jobVO.getDescription());
		jobDetail.setDurability(jobVO.isDurability());
		jobDetail.setKey(jobVO.getJobKey());
		jobDetail.setRequestsRecovery(jobVO.isShouldRecover());
		return jobDetail;
	}
	
	public static CronTriggerImpl getCronTigger(String name, String group, String cronExpression, JobKey jobKey) throws ParseException{
		CronTriggerImpl cronTrigger = new  CronTriggerImpl();
		cronTrigger.setName(name);
		cronTrigger.setGroup(group);
		cronTrigger.setCronExpression(cronExpression);
		cronTrigger.setJobKey(jobKey);
		return cronTrigger;
	}
}
