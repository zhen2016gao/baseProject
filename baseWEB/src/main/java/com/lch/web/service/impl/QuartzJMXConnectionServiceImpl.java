package com.lch.web.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.management.MBeanServerConnection;
import javax.management.ObjectName;
import javax.management.remote.JMXConnector;
import javax.management.remote.JMXConnectorFactory;
import javax.management.remote.JMXServiceURL;

import com.lch.web.bean.JMXVO;
import com.lch.web.bean.QuartzInstance;
import com.lch.web.bean.Scheduler;
import com.lch.web.service.QuartzJMXAdapter;
import com.lch.web.service.QuartzJMXConnectionService;
import com.lch.web.utils.Constant;
import com.lch.web.utils.JMXUtils;
import com.lch.web.utils.QuartzJMXAdapterFactory;

public class QuartzJMXConnectionServiceImpl implements
		QuartzJMXConnectionService {

	@Override
	public QuartzInstance initInstance(JMXVO jmxVO) throws Exception {
		Map<String, String[]> env = new HashMap<String, String[]>();
		env.put(JMXConnector.CREDENTIALS, new String[]{jmxVO.getUserName(), jmxVO.getPassword()});
		JMXServiceURL url = JMXUtils.createJMXConnection(jmxVO);
		JMXConnector jmxConn = JMXConnectorFactory.connect(url, env);
		MBeanServerConnection mbeanConn = jmxConn.getMBeanServerConnection();
		
		ObjectName mBName = new ObjectName(Constant.QUARTZ_OBJECT_NAME);
		Set<ObjectName> names = mbeanConn.queryNames(mBName, null);
		QuartzInstance quartzInstance = new QuartzInstance();
		quartzInstance.setMBeanServerConnection(mbeanConn);
		quartzInstance.setJmxConnector(jmxConn);
		
		List<Scheduler> scheduleList = new ArrayList<Scheduler>();
		for(ObjectName objectName : names){
			QuartzJMXAdapter jmxAdapter = QuartzJMXAdapterFactory.initQuartzJMXAdapter(objectName, mbeanConn);
			quartzInstance.setJmxAdapter(jmxAdapter);
			Scheduler scheduler = jmxAdapter.getSchedulerByJmx(quartzInstance, objectName);
			scheduleList.add(scheduler);
		}
		
		quartzInstance.setSchedulerList(scheduleList);
		return quartzInstance;
	}


}
