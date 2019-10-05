package com.lingying.soho.Juliet.controller;

import com.lingying.soho.Juliet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
public class ReturnConroller extends BaseController{

    @Autowired
    private UserService userService;
    @RequestMapping("/")
    public String login() {

        return "login";
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
    @RequestMapping("indetal")   public String indetal() {
        
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
    public String releasetask(HttpSession session) {
        Integer uid = getUidFromSession(session);
        boolean isHave = userService.findToCompanyExit(uid);
        if(isHave){
            return "releasetask";
        }
        return "perfect";
    }

    @RequestMapping("companymanage")
    public String companymanage() {

        return "companymanage";
    }
}
