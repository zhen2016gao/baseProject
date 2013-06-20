package com.buybal.ppay.plugin;

import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.FatalBeanException;

public class BeanTest {

	@Test
	public void bean2Map() throws IllegalAccessException,
			IllegalArgumentException, InvocationTargetException {
		//Person p = new Person(1, "name", 10);
		Person p = new Person();
		/*BeanUtils.copyProperties(p, p1);
		System.out.println(p1.getId());*/

		/**/
		Map<String, Object> map = toMap(p);
		for (Map.Entry<String, Object> entry : map.entrySet()) {
			// System.out.println(entry.getValue().getClass().getName());
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
		System.out.println("---------------------");
		 map = toMap(p, new String[]{"name"});
		 for (Map.Entry<String, Object> entry : map.entrySet()) {
				// System.out.println(entry.getValue().getClass().getName());
				System.out.println(entry.getKey() + ": " + entry.getValue());
			}

	}

	public static Map<String, Object> toMap(Object source) {
		return toMap(source, null);
	}

	public static Map<String, Object> toMap(Object source,
			String[] ignoreProperties) {
		Map<String, Object> result = new HashMap<String, Object>();
		List<String> ignoreList = (ignoreProperties != null) ? Arrays
				.asList(ignoreProperties) : null;
		PropertyDescriptor[] targetPds = BeanUtils
				.getPropertyDescriptors(source.getClass());
		for (PropertyDescriptor targetPd : targetPds) {
			if (targetPd.getWriteMethod() != null
					&& (ignoreProperties == null || (!ignoreList
							.contains(targetPd.getName())))) {
				PropertyDescriptor sourcePd = BeanUtils.getPropertyDescriptor(
						source.getClass(), targetPd.getName());
				if (sourcePd != null && sourcePd.getReadMethod() != null) {
					try {
						Method readMethod = sourcePd.getReadMethod();
						if (!Modifier.isPublic(readMethod.getDeclaringClass()
								.getModifiers())) {
							readMethod.setAccessible(true);
						}
						Object value = readMethod.invoke(source);
						result.put(targetPd.getName(), value);
					} catch (Throwable ex) {
						throw new FatalBeanException(
								"Could not copy properties from source to target",
								ex);
					}
				}
			}
		}
		return result;

	}
	/*
	 * public static Map<String, Object> toMap(Object source) throws
	 * IllegalAccessException, IllegalArgumentException,
	 * InvocationTargetException { Map<String, Object> result = new
	 * HashMap<String, Object>(); PropertyDescriptor[] targetPds =
	 * BeanUtils.getPropertyDescriptors(source.getClass());
	 * for(PropertyDescriptor targetPd : targetPds){ if
	 * (targetPd.getWriteMethod() != null ) { PropertyDescriptor sourcePd =
	 * BeanUtils.getPropertyDescriptor(source.getClass(), targetPd.getName());
	 * Method readMethod = sourcePd.getReadMethod(); if
	 * (!Modifier.isPublic(readMethod.getDeclaringClass().getModifiers())) {
	 * readMethod.setAccessible(true); } Object value =
	 * readMethod.invoke(source); result.put(targetPd.getName(), value); } }
	 * return result; }
	 */
}
