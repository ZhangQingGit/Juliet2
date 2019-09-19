package com.lingying.soho.Juliet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.entity.Menu;
import com.lingying.soho.Juliet.service.TypeService;

@Controller
public class TypeController extends BaseController{
    
    @Autowired
    private TypeService service;
    
    @RequestMapping("showList")
    @ResponseBody
    public List<Menu> showList(){
        
        List<Menu> map = service.showList();
        
        return map;
    }
}
