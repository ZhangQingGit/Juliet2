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
    @RequestMapping("indetal")
    public String indetal() {
        
        return "indetal";
    }
    @RequestMapping("perfect")
    public String perfect() {
        
        return "perfect";
    }
    @RequestMapping("taskdetails")
    public String taskdetails() {
        
        return "taskdetails";
    }
    @RequestMapping("publisherdetails")
    public String publisherdetails() {
        
        return "publisherdetails";
    }

    @RequestMapping("tasklist")
    public String tasklist() {

        return "tasklist";
    }

    @RequestMapping("releasetask")
    public String releasetask() {

        return "releasetask";
    }

    @RequestMapping("companymanage")
    public String companymanage() {

        return "companymanage";
    }
}
