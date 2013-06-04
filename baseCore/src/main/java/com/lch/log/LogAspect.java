package com.lch.log;

import java.lang.reflect.Method;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.lch.base.basedb.model.TLog;
import com.lch.base.basedb.service.SeqDbService;
import com.lch.base.basedb.service.TLogDbService;


public class LogAspect {

	private TLogDbService tLogDbService;
	
	private SeqDbService seqDbService;

	public void settLogDbService(TLogDbService tLogDbService) {
		this.tLogDbService = tLogDbService;
	}

	public void setSeqDbService(SeqDbService seqDbService) {
		this.seqDbService = seqDbService;
	}



	@SuppressWarnings({ "unused", "rawtypes" })
	public void saveLog(JoinPoint point) throws ClassNotFoundException{
		TLog record = new TLog();
		Class<? extends Object> targetClass = point.getTarget().getClass();
		String methodName = point.getSignature().getName();
		
		
		if(StringUtils.isNotEmpty(methodName)){
			if(!(methodName.startsWith("set") || methodName.startsWith("get")) ){
				Object[] objects = point.getArgs();
				Class carClass = Class.forName(targetClass.getName());
				Method[] methods = carClass.getMethods();
				for(int i=0; i<methods.length; i++){
					if(methods[i].getName().equals(methodName)){
						boolean hasAnnotation = methods[i].isAnnotationPresent(Log.class);
						if(hasAnnotation){
							Log annotation = methods[i].getAnnotation(Log.class);
							String methodDescp = annotation.desc();
							record.setDescript(methodDescp);
							Authentication authentication = SecurityContextHolder
									.getContext().getAuthentication();
							if (null != authentication && !(authentication.getPrincipal() instanceof java.lang.String)) {
								UserDetails userDetails = (UserDetails) authentication.getPrincipal();
								if (null != userDetails) {
									record.setOperator(userDetails.getUsername());
								}
							}
							record.setId(seqDbService.getTOperatingRecordId());
							record.setOperatordate(new Date());
							tLogDbService.saveTLog(record);
						}
					}
				}
			}
		}
	}
	
}
