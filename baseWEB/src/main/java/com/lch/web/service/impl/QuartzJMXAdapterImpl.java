package com.lch.web.service.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.management.MBeanServerConnection;
import javax.management.ObjectName;
import javax.management.openmbean.CompositeDataSupport;
import javax.management.openmbean.TabularDataSupport;

import com.lch.web.bean.JMXParamVO;
import com.lch.web.bean.Job;
import com.lch.web.bean.QuartzInstance;
import com.lch.web.bean.Scheduler;
import com.lch.web.bean.Trigger;
import com.lch.web.service.QuartzJMXAdapter;
import com.lch.web.utils.JMXUtils;

public class QuartzJMXAdapterImpl implements QuartzJMXAdapter {

	@Override
	public String getVersion(QuartzInstance quartzInstance,
			ObjectName objectName) throws Exception {
		JMXParamVO param = new JMXParamVO(quartzInstance, objectName, "Version", null, null);
		return (String) JMXUtils.callJMXAttribute(param);
	}

	@Override
	public List<Job> getJobDetails(
			QuartzInstance quartzInstance, Scheduler scheduler)
			throws Exception {
		List<Job> jobs = null;
		JMXParamVO param = new JMXParamVO(quartzInstance, scheduler.getObjectName(), "AllJobDetails", null , null);
		Object obj = JMXUtils.callJMXAttribute(param);
		TabularDataSupport tdata = (TabularDataSupport) obj;
		if(tdata != null){
			jobs = new ArrayList<Job>();
			for (Iterator<Object> it = tdata.values().iterator(); it.hasNext();) {
				Object object = (Object) it.next();
				if (!(object instanceof CompositeDataSupport)) {
					continue;
				}
				CompositeDataSupport compositeDataSupport = (CompositeDataSupport) object;
				Job job = new Job();
				job.setSchedulerName(scheduler.getName());
				job.setQuartzInstanceId(scheduler.getQuartzInstanceUUID());
				job.setSchedulerInstanceId(scheduler.getInstanceId());
				job.setJobName((String) JMXUtils.convertToType(compositeDataSupport, "name"));
				job.setDescription((String) JMXUtils.convertToType(compositeDataSupport,"description"));
				job.setDurability(((Boolean) JMXUtils.convertToType(compositeDataSupport,"durability")).booleanValue());
				job.setShouldRecover(((Boolean) JMXUtils.convertToType(compositeDataSupport,"shouldRecover")).booleanValue());
				job.setGroup((String) JMXUtils.convertToType(compositeDataSupport, "group"));
				job.setJobClass((String) JMXUtils.convertToType(compositeDataSupport, "jobClass"));
				jobs.add(job);
			}
		}
		return jobs;
	}

	@Override
	public Scheduler getSchedulerById(QuartzInstance quartzInstance,
			String scheduleID) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Trigger> getTriggersForJob(
			QuartzInstance quartzInstance, Scheduler scheduler, String jobName,
			String groupName) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void attachListener(QuartzInstance quartzInstance, String scheduleID)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Scheduler getSchedulerByJmx(QuartzInstance quartzInstance,
			ObjectName objectName) throws Exception {
			Scheduler scheduler = new Scheduler();
	      MBeanServerConnection connection = quartzInstance.getMBeanServerConnection();
	      scheduler.setObjectName(objectName);
	      scheduler.setName((String) connection.getAttribute(objectName, "SchedulerName"));
	      scheduler.setInstanceId((String) connection.getAttribute(objectName, "SchedulerInstanceId"));
	      scheduler.setJobStoreClassName((String) connection.getAttribute(objectName, "JobStoreClassName"));
	      scheduler.setThreadPoolClassName((String) connection.getAttribute(objectName, "ThreadPoolClassName"));
	      scheduler.setThreadPoolSize((Integer) connection.getAttribute(objectName, "ThreadPoolSize"));
	      scheduler.setShutdown((Boolean) connection.getAttribute(objectName, "Shutdown"));
	      scheduler.setStarted((Boolean) connection.getAttribute(objectName, "Started"));
	      scheduler.setStandByMode((Boolean) connection.getAttribute(objectName, "StandbyMode"));
	      scheduler.setQuartzInstanceUUID(quartzInstance.getUuid());
	      scheduler.setVersion(this.getVersion(quartzInstance, objectName));
	      return scheduler;
	}

	@Override
	public void startJobNow(QuartzInstance quartzInstance, Scheduler scheduler,
			Job job) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void pauseJob(QuartzInstance quartzInstance, Scheduler scheduler,
			Job job) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteJob(QuartzInstance quartzInstance, Scheduler scheduler,
			Job job) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addJob(QuartzInstance instance, Scheduler schedulerByName,
			Map<String, Object> jobMap) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteTrigger(QuartzInstance quartzInstance,
			Scheduler scheduler, Trigger trigger)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getTriggerState(QuartzInstance quartzInstance,
			Scheduler scheduler, Trigger trigger)
			throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addTriggerForJob(QuartzInstance quartzInstance,
			Scheduler scheduler, Job job,
			Map<String, Object> triggerMap) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void resumeJob(QuartzInstance instance, Scheduler scheduler,
			Job job) throws Exception {
		// TODO Auto-generated method stub
		
	}
	
}
