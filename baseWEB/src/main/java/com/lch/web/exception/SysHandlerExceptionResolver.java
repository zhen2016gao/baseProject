package com.lch.web.exception;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

public class SysHandlerExceptionResolver implements HandlerExceptionResolver {

	static Logger logger = Logger.getLogger(SysHandlerExceptionResolver.class);
	@Override
	public ModelAndView resolveException(HttpServletRequest request,
			HttpServletResponse response, Object obj, Exception ex) {
		logger.error(ex.getMessage());
		Map<String, String> model = new HashMap<String, String>();
		model.put("message", "系统错误，请通知管理员或稍后再试！");
		return new ModelAndView("error", model);
	}

}
