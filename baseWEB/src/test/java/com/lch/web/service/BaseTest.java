package com.lch.web.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"/quartz.xml", "/business.xml", "/dao.xml","/service.xml"})
public abstract class BaseTest {

	private static Log log = LogFactory.getLog(BaseTest.class);
}
