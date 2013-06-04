package com.lch.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@RequestMapping("/firstPage")
	public String toFirstPage(){
		return "firstPage";
	}
}
