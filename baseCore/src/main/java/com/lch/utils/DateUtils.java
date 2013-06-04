package com.lch.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateFormatUtils;

public class DateUtils {
	
	public static String getCurrentDate(){
		return formateTime(new Date().getTime());
	}
	
	public static String getYesterday(){
		return formateTime( org.apache.commons.lang.time.DateUtils.addDays(new Date(), -1).getTime());
	}
	
	public static Date createDate(String dateString, String pattern)
			throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat(pattern);
		return format.parse(dateString);
	}

	public static String parseDate(Date date, String pattern) {
		if (date == null)
			throw new IllegalArgumentException("date is null");
		if (pattern == null)
			throw new IllegalArgumentException("pattern is null");
		SimpleDateFormat formatter = new SimpleDateFormat(pattern);
		return formatter.format(date);
	}

	public static String formateTime(Long time) {
		return DateFormatUtils.format(time, "yyyy-MM-dd HH:mm:ss");
	}

	public static Date formatDate(String dateStr, String pattern) {
		if (!StringUtils.isNotBlank(dateStr))
			throw new IllegalArgumentException("date is null");
		if (pattern == null)
			throw new IllegalArgumentException("pattern is null");
		SimpleDateFormat formatter = new SimpleDateFormat(pattern);
		Date date = null;
		try {
			date = formatter.parse(dateStr);
		} catch (ParseException e) {
			System.out.println("格式化日期异常");
		}
		return date;
	}
	
	public static Long dateToLong(String dateTime, String pattern){
		return formatDate(dateTime, pattern ).getTime();
		
	}
	
	/** 日期转换为自定义格式输出 */
	public static String DateToString(Date date, String formatType) {
		if (date == null) {
			return null;
		}
		if (formatType == null || "".equals(formatType)) {
			return null;
		}
		String dateStr = "";
		try {
			SimpleDateFormat sdf = new SimpleDateFormat(formatType);
			dateStr = sdf.format(date);
			return dateStr;
		} catch (Exception e) {
			return null;
		}
	}
	
	/**
	 * 根据传入的日期，获取相隔天数日期
	 * 
	 * @param date
	 * @param anyDay
	 *            可正可负
	 * @return
	 */
	public static Date getAnyDayByNo(Date date, int anyDay) {
		if (date == null) {
			return null;
		}
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		c.add(Calendar.DAY_OF_WEEK, anyDay);
		return c.getTime();
	}
	
	/**
	 * 根据传入的日期，获取相隔分钟的时间
	 * 
	 * @param date
	 * @param anyTime
	 *            可正可负
	 * @return
	 */
	public static Date getAnyTimeByNow(Date date, int anyTime) {
		if (date == null) {
			return null;
		}
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		c.add(Calendar.MINUTE, anyTime);
		return c.getTime();
	}
	/**
	 * 传入日期，去除时分秒（置零 00:00:00）
	 * @param date
	 * @return
	 */
	public static Date removeTime(Date date){
		if(date==null){
			return null;
		}
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);

		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		return cal.getTime();
		
	}
	/**
	 * 传入日期，去除分秒
	 * @param date
	 * @return
	 */
	public static Date removeMinute(Date date){
		if(date==null){
			return null;
		}
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);

		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		return cal.getTime();
		
	}
}
