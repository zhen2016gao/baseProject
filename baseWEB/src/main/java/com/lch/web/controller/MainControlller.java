package com.lch.web.controller;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainControlller{
    
    @RequestMapping("/main")
    public String toMain(Model model){
        return "main";
    }
}
