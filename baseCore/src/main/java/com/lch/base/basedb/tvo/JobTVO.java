package com.lch.base.basedb.tvo;

import java.math.BigInteger;

public class JobTVO {
	
	private String schedName;
	
	private String triggerName;
	
	private String triggerGroup;
	
	private BigInteger nextFireTime;
	
	private BigInteger prevFireTime;
	
	private int priority;
	
	private String triggerState;
	
	private String triggerType;
	
	private BigInteger startTime;
	
	private BigInteger endTime;
	
	private String jobName;
	
	private String jobGroup;
	
	private String description;
	
	private String jobClassName;
	
	private String isDurable;
	
	private String requestsRecovery;

	public String getSchedName() {
		return schedName;
	}

	public void setSchedName(String schedName) {
		this.schedName = schedName;
	}

	public String getTriggerName() {
		return triggerName;
	}

	public void setTriggerName(String triggerName) {
		this.triggerName = triggerName;
	}

	public String getTriggerGroup() {
		return triggerGroup;
	}

	public void setTriggerGroup(String triggerGroup) {
		this.triggerGroup = triggerGroup;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getJobClassName() {
		return jobClassName;
	}

	public void setJobClassName(String jobClassName) {
		this.jobClassName = jobClassName;
	}

	public String getIsDurable() {
		return isDurable;
	}

	public void setIsDurable(String isDurable) {
		this.isDurable = isDurable;
	}

	public String getRequestsRecovery() {
		return requestsRecovery;
	}

	public void setRequestsRecovery(String requestsRecovery) {
		this.requestsRecovery = requestsRecovery;
	}

	public BigInteger getNextFireTime() {
		return nextFireTime;
	}

	public void setNextFireTime(BigInteger nextFireTime) {
		this.nextFireTime = nextFireTime;
	}

	public BigInteger getPrevFireTime() {
		return prevFireTime;
	}

	public void setPrevFireTime(BigInteger prevFireTime) {
		this.prevFireTime = prevFireTime;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getTriggerState() {
		return triggerState;
	}

	public void setTriggerState(String triggerState) {
		this.triggerState = triggerState;
	}

	public String getTriggerType() {
		return triggerType;
	}

	public void setTriggerType(String triggerType) {
		this.triggerType = triggerType;
	}

	public BigInteger getStartTime() {
		return startTime;
	}

	public void setStartTime(BigInteger startTime) {
		this.startTime = startTime;
	}

	public BigInteger getEndTime() {
		return endTime;
	}

	public void setEndTime(BigInteger endTime) {
		this.endTime = endTime;
	}
	
	

}
