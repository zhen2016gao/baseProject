package com.lch.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lch.web.bean.JobVO;
import com.lch.web.service.QuartzManagerService;
import com.lch.web.utils.Constant;

@Controller
public class QuartzManagerController {

	@Resource
	private QuartzManagerService quartzManagerService;
	
	@RequestMapping("/msgConfig")
	public String toMsgConfigPage(){
		return "quartzManager/msgConfig";
	}
	
	@RequestMapping("/jobManager")
	public String toJobManagerPage(){
		return "quartzManager/jobManager";
	}
	
	@RequestMapping("/queryjobManager")
	@ResponseBody
	public Map<String, Object> queryjobManager(JobVO jobVO){
		Map<String, Object> map = param(jobVO);
		map.put("total", quartzManagerService.queryJobDetailCount(map));
		map.put("rows", quartzManagerService.queryJobDetail(map));
		return map;
	}
	
	@RequestMapping("/addJob")
	@ResponseBody
	public Map<String, Object> addJob(JobVO jobVO){
		Map<String, Object> map = new HashMap<String, Object>();
		/*JobVO jobVO = new JobVO();
		jobVO.setDescription("test");
		jobVO.setDescription("com.lch.web.task.QuartzPlanJob");
		jobVO.setJobGroup("test");
		jobVO.setJobName("QuartzPlanJob");*/
		map.put(Constant.RESULT, quartzManagerService.addJob(jobVO));
		return map;
	}
	
	@RequestMapping("/delJob")
	@ResponseBody
	public Map<String, Object> delJob(JobVO jobVO){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(Constant.RESULT, quartzManagerService.removeJob(jobVO));
		return map;
	}
	
	@RequestMapping("/pauseJob")
	@ResponseBody
	public Map<String, Object> pauseJob(JobVO jobVO){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(Constant.RESULT, quartzManagerService.pauseJob(jobVO));
		return map;
	}
	
	@RequestMapping("/resumeJob")
	@ResponseBody
	public Map<String, Object> resumeJob(JobVO jobVO){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(Constant.RESULT, quartzManagerService.resumeJob(jobVO));
		return map;
	}
	
	
	private Map<String, Object> param(JobVO jobVO){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("jobName", jobVO.getJobName());
		map.put("jobGroup", jobVO.getJobGroup());
		map.put("start", jobVO.getStart());
		map.put("end", jobVO.getEnd());
		return map;
		
	}
	
}
