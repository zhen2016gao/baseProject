package com.lch.web.bean;

import javax.management.ObjectName;


public class JMXParamVO {

	private QuartzInstance quartzInstance;
	private ObjectName name;
	private String operationName;
	private Object params[];
	private String signature[];
	
	
	 public JMXParamVO()
	   {
	   }
	
	public JMXParamVO(QuartzInstance quartzInstance, ObjectName name,
			String operationName, Object[] params, String[] signature) {
		super();
		this.quartzInstance = quartzInstance;
		this.name = name;
		this.operationName = operationName;
		this.params = params;
		this.signature = signature;
	}
	
	public QuartzInstance getQuartzInstance() {
		return quartzInstance;
	}

	public void setQuartzInstance(QuartzInstance quartzInstance) {
		this.quartzInstance = quartzInstance;
	}

	public ObjectName getName() {
		return name;
	}
	public void setName(ObjectName name) {
		this.name = name;
	}
	public String getOperationName() {
		return operationName;
	}
	public void setOperationName(String operationName) {
		this.operationName = operationName;
	}
	public Object[] getParams() {
		return params;
	}
	public void setParams(Object[] params) {
		this.params = params;
	}
	public String[] getSignature() {
		return signature;
	}
	public void setSignature(String[] signature) {
		this.signature = signature;
	}
	
	
}
