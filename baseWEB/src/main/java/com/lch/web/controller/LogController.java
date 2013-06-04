package com.lch.web.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lch.base.basedb.model.TLog;
import com.lch.base.basedb.service.TLogDbService;
import com.lch.log.Log;
import com.lch.utils.DateUtils;
import com.lch.web.bean.LogVO;
/**
 * 日志管理模块
 * @author wangxiaowei
 *
 */
@Controller
public class LogController {
	@Resource
	private TLogDbService tLogDbService;

	@RequestMapping("/toOperatingRecordList")
	public String toOperatingRecordList(){
		return "operatingRecordList";
	}
	@InitBinder
	protected void initBinder(HttpServletRequest request,
			ServletRequestDataBinder binder) throws Exception {
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			CustomDateEditor editor = new CustomDateEditor(df, false);
			binder.registerCustomEditor(Date.class, editor);
	}
	@RequestMapping("/getOperRecordList")
	@ResponseBody
	@Log(desc="查询日志")
	public Object showUserRegistList(LogVO logVO){
		
	/*	// 当前页
		int intPage = Integer.parseInt((page == null) ? "1" : page);
		// 每页显示行数
		int no = Integer.parseInt((rows == null || "0".equals(rows)) ? "10" : rows);*/
		
		int end = logVO.getEnd() ;
		int start = logVO.getStart();
		Map<String,Object> map = new HashMap<String, Object>();
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd",Locale.US);
		
		if (StringUtils.isNotBlank(logVO.getOperator())){
			map.put("operator", logVO.getOperator().trim());
		}
		if (StringUtils.isNotBlank(logVO.getStartTime())&&StringUtils.isNotBlank(logVO.getEndTime())){
			try {
				map.put("startTime", df.parse(logVO.getStartTime()));
				map.put("endTime",DateUtils.getAnyDayByNo(df.parse(logVO.getEndTime()),1));
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		if(StringUtils.isNotEmpty(logVO.getStartTime())&&!StringUtils.isNotEmpty(logVO.getEndTime())){
			try {
				map.put("startTime", df.parse(logVO.getStartTime()));
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		if(!StringUtils.isNotEmpty(logVO.getStartTime())&&StringUtils.isNotEmpty(logVO.getEndTime())){
			try {
				map.put("endTime",DateUtils.getAnyDayByNo(df.parse(logVO.getEndTime()),1));
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		map.put("start", start);
		map.put("end", end);
		
		List<TLog> users=tLogDbService.getTLogList(map);
		int count=tLogDbService.getTLogCount(map);
		
		Map<String,Object> jsonmap = new HashMap<String, Object>();
		jsonmap.put("total", count);
		jsonmap.put("rows", users);
		return jsonmap;
		
	}
	
}
