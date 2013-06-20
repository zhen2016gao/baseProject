package com.lch.web.service;

import javax.annotation.Resource;

import org.junit.Before;
import org.junit.Test;
import org.quartz.TriggerKey;

import com.lch.web.bean.JobVO;

public class QuartzManagerServiceTest extends BaseTest{

	@Resource
	private QuartzManagerService quartzManagerService;
	

	private JobVO jobVO = new JobVO();
	
	@Before
	public void init(){
		jobVO.setDescription("test");
//		jobVO.setJobClassName("com.lch.web.task.QuartzPlanJob");
		jobVO.setJobClassName("com.lch.quartz.QuartzJob");
		jobVO.setJobGroup("test");
		jobVO.setJobName("QuartzPlanJob");
		jobVO.setDurability(true);
		jobVO.setShouldRecover(false);
		jobVO.setCronExpression("0/1 * * * * ?");
	}
	
	//@Test
	public void addJobTest(){
		quartzManagerService.addJob(jobVO);
	}
	
	//@Test
	public void pauseJob(){
		quartzManagerService.pauseJob(jobVO);
	}
	
	//@Test
	public void resumeJob(){
		quartzManagerService.resumeJob(jobVO);
	}
	
	//@Test
	public void unscheduleJob(){
		quartzManagerService.unscheduleJob(TriggerKey.triggerKey(jobVO.getJobName(), jobVO.getJobGroup()));
	}
	
	@Test
	public void removeJobTest(){
		quartzManagerService.removeJob(jobVO);
	}
	
	//@Test
	public void shutDown(){
		quartzManagerService.shutDown(false);
	}
}
