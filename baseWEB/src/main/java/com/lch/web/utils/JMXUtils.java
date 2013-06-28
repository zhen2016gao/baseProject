package com.lch.web.utils;

import java.util.Date;

import javax.management.MBeanServerConnection;
import javax.management.openmbean.CompositeDataSupport;
import javax.management.remote.JMXServiceURL;

import org.apache.commons.lang.StringUtils;

import com.lch.web.bean.JMXParamVO;
import com.lch.web.bean.JMXVO;
import com.lch.web.bean.QuartzInstance;

public class JMXUtils {

	public static JMXServiceURL createJMXConnection(JMXVO jmxVO) throws Exception{
		StringBuffer sb = new StringBuffer();
		sb.append("service:jmx:rmi:///jndi/rmi://").append(jmxVO.getHost()).append(":").append(jmxVO.getPort()).append("/jmxrmi");
		return new JMXServiceURL(sb.toString());
	}
	
	public static Object callJMXAttribute(JMXParamVO param) throws Exception{
		QuartzInstance quartzInstance = param.getQuartzInstance();
		MBeanServerConnection conn = quartzInstance.getMBeanServerConnection();
		return conn.getAttribute(param.getName(), param.getOperationName());
	}
	
	public static Object callJMXOperation(JMXParamVO param) throws Exception{
		QuartzInstance quartzInstance = param.getQuartzInstance();
		MBeanServerConnection conn = quartzInstance.getMBeanServerConnection();
		return conn.invoke(param.getName(), param.getOperationName(), param.getParams(), param.getSignature());
		
	}

	public static Object convertToType(
			CompositeDataSupport compositeDataSupport, String key) {
		if (compositeDataSupport.getCompositeType().getType(key).getClassName()
				.equals("java.lang.String")) {
			return StringUtils.trimToEmpty((String) compositeDataSupport.get(key));
		} else if (compositeDataSupport.getCompositeType().getType(key).getClassName()
				.equals("java.lang.Boolean")) {
			return compositeDataSupport.get(key);
		} else if (compositeDataSupport.getCompositeType().getType(key).getClassName()
				.equals("java.util.Date")) {
			return (Date) compositeDataSupport.get(key);
		} else if (compositeDataSupport.getCompositeType().getType(key).getClassName()
				.equals("java.lang.Integer")) {
			return (Integer) compositeDataSupport.get(key);
		} else if (compositeDataSupport.getCompositeType().getType(key).getClassName()
				.equals("java.lang.Long")) {
			return (Long) compositeDataSupport.get(key);
		}
		return new Object();
	}
}
