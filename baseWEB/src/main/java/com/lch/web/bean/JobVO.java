package com.lch.web.bean;

import org.quartz.JobKey;

public class JobVO extends BaseVO{

	private String jobName;
	
	private String jobGroup;
	
	private String jobClassName;
	
	private String description;

	private String cronExpression;
	
	//任务完成后 是否还在jobstore中继续保留
	private boolean durability;
	
	//系统重启后 是否再次执行该任务
	private boolean shouldRecover;
	
	public JobKey getJobKey(){
		return JobKey.jobKey(jobName, jobGroup);
	}
	
	public boolean isDurability() {
		return durability;
	}

	public void setDurability(boolean durability) {
		this.durability = durability;
	}

	public boolean isShouldRecover() {
		return shouldRecover;
	}

	public void setShouldRecover(boolean shouldRecover) {
		this.shouldRecover = shouldRecover;
	}

	public String getCronExpression() {
		return cronExpression;
	}

	public void setCronExpression(String cronExpression) {
		this.cronExpression = cronExpression;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getJobGroup() {
		return jobGroup;
	}

	public void setJobGroup(String jobGroup) {
		this.jobGroup = jobGroup;
	}

	public String getJobClassName() {
		return jobClassName;
	}

	public void setJobClassName(String jobClassName) {
		this.jobClassName = jobClassName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
