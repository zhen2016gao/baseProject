package com.lch.web.service;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.lch.web.bean.JMXVO;
import com.lch.web.bean.QuartzInstance;

public class QuartzInstanceContainer {

	private static Map<String, QuartzInstance> quartzInstanceMap = new ConcurrentHashMap<String, QuartzInstance>();
	private static Map<String, JMXVO> configMap = new ConcurrentHashMap<String, JMXVO>();
	
	public static void addQuartzInstance(String key, QuartzInstance instance){
		quartzInstanceMap.put(key, instance);
	}
	
	public static Map<String, QuartzInstance> getQuartzInstanceMap(){
		return Collections.unmodifiableMap(quartzInstanceMap);
	}

	public static void removeQuartzInstance(String key){
		quartzInstanceMap.remove(key);
	}
	
	public static Map<String, JMXVO> getConfigMap() {
		return Collections.unmodifiableMap(configMap);
	}
	public static JMXVO getQuartzConfig(String uuid){
		return configMap.get(uuid);
	}
	public static void removeQuartzConfig(String uuid){
		 configMap.remove(uuid);
	}
}
