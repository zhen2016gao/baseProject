package com.lch.web.utils;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.lch.web.bean.JMXParamVO;
import com.lch.web.bean.JMXVO;
import com.lch.web.bean.QuartzInstance;
import com.lch.web.bean.Scheduler;
import com.lch.web.service.QuartzJMXConnectionService;
import com.lch.web.service.impl.QuartzJMXConnectionServiceImpl;

public class JMXUtilsTest {

	private JMXVO jmxVO;
	
	private QuartzInstance quartzInstance;
	
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
		
	}
	
	@Test
	public void testGetJobDetails() throws Exception
    {

        List<Scheduler> schedulers = quartzInstance.getSchedulerList();

        System.out.println(schedulers.size());
        JMXParamVO param = new JMXParamVO(quartzInstance, schedulers.get(0).getObjectName(), "AllJobDetails", null, null);
        Object o1 = JMXUtils.callJMXAttribute(param);
        System.out.println(o1);
    }
}
