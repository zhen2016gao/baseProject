package com.lch.web.utils;

import javax.management.MBeanServerConnection;
import javax.management.ObjectName;

import com.lch.web.service.QuartzJMXAdapter;
import com.lch.web.service.impl.QuartzJMXAdapterImpl;

public class QuartzJMXAdapterFactory
{
   public static QuartzJMXAdapter initQuartzJMXAdapter(ObjectName objectName, MBeanServerConnection connection) throws Exception
   {
      QuartzJMXAdapter jmxAdapter = new QuartzJMXAdapterImpl();
      return jmxAdapter;
   }
}