package com.lingying.soho.Juliet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReturnConroller {
    @RequestMapping("list")
    public String list() {
        
        return "list";
    }
    
    @RequestMapping("add")
    public String add() {
        
        return "add";
    }
    
    @RequestMapping("updata")
    public String updata() {
        
        return "updata";
    }
    @RequestMapping("unauth")
    public String unauth() {
        
        return "unauth";
    }
    @RequestMapping("register")
    public String register() {
        
        return "register";
    }
}
