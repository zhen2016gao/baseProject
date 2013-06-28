package com.lch.web.service;

import com.lch.web.bean.JMXVO;
import com.lch.web.bean.QuartzInstance;


public interface QuartzJMXConnectionService {

	 public QuartzInstance initInstance(JMXVO jmxVO) throws Exception;
}
