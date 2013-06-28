package com.lch.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RemoteQuartzManagerController {

	@RequestMapping("/remotoJobManager")
	public String toRemoteQuartzManangerController(){
		return "quartzManager/remotoJobManager";
	}
}
