package com.lch.base.basddb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lch.base.basedb.service.QrtzJobDetailsDbService;
import com.lch.base.basedb.tvo.JobTVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"/service.xml", "/dao.xml"})
public class QrtzJobDetailsDbServiceTest {

	@Resource
	private QrtzJobDetailsDbService qrtzJobDetailsDbService;
	
	@Test
	public void queryJobDetailTest(){
		Map<String, Object> map = new HashMap<String, Object>();
	//map.put("jobName", "job");
		map.put("start", 0);
		map.put("end", 1);
		
		List<JobTVO> cList = qrtzJobDetailsDbService.queryJobDetail(map);
		for(JobTVO j : cList){
			System.out.println(j.getJobName());
		}
	}
	
	
	public void queryJobDetailCountTest(){
		Map<String, Object> map = new HashMap<String, Object>();
		int count = qrtzJobDetailsDbService.queryJobDetailCount(map);
		System.out.println(count);
	}
}
