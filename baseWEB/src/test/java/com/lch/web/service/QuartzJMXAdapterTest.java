package com.lch.web.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.lch.web.bean.JMXVO;
import com.lch.web.bean.Job;
import com.lch.web.bean.QuartzInstance;
import com.lch.web.bean.Scheduler;
import com.lch.web.service.impl.QuartzJMXAdapterImpl;
import com.lch.web.service.impl.QuartzJMXConnectionServiceImpl;

public class QuartzJMXAdapterTest {

private JMXVO jmxVO;
	
	private QuartzInstance quartzInstance;
	
	private QuartzJMXAdapter quartzJMXAdapter;
	
	private List<Scheduler> schedulers;
	
	@Before
	public void init(){
		jmxVO = new JMXVO();
		jmxVO.setHost("127.0.0.1");
		jmxVO.setPort(2911);
		
		QuartzJMXConnectionService jmxConnService = new QuartzJMXConnectionServiceImpl();
		try {
			quartzInstance = jmxConnService.initInstance(jmxVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		quartzJMXAdapter = new QuartzJMXAdapterImpl();
		schedulers = quartzInstance.getSchedulerList();
	}
	
	
	public void getVersionTest(){
		try {
			String version = quartzJMXAdapter.getVersion(quartzInstance, schedulers.get(0).getObjectName());
			System.out.println(version);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void getJobDetailsTest(){
		List<Job> jobs = new ArrayList<Job>();
		for(Scheduler s : schedulers){
			List<Job> cJob = new ArrayList<Job>();
			try {
				cJob = quartzJMXAdapter.getJobDetails(quartzInstance, s);
			} catch (Exception e) {
				e.printStackTrace();
			}
			jobs.addAll(cJob);
		}
		
		for(Job j : jobs){
			System.out.println(j);
		}
		
	}
}
