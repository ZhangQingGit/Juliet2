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

        return "user/login";
    }
    
    @RequestMapping("register")
    public String register() {
        
        return "user/register";
    }

    @RequestMapping("index")
    public String index() {
        
        return "index";
    }

    @RequestMapping("companyperfect")
    public String companyperfect() {

        return "perfect/companyperfect";
    }

    @RequestMapping("teamperfect")
    public String teamperfect() {

        return "perfect/teamperfect";
    }

    @RequestMapping("taskdetails")
    public String taskdetails() {
        
        return "task/taskdetails";
    }

    @RequestMapping("publisherdetails")
    public String publisherdetails() {
        
        return "publisherdetails";
    }

    @RequestMapping("tasklist")
    public String tasklist() {

        return "task/tasklist";
    }

    @RequestMapping("releasetask")
    public String releasetask(HttpSession session) {
        Integer uid = getUidFromSession(session);
        boolean isHave = userService.findToCompanyExit(uid);
        if(isHave){
            return "task/releasetask";
        }
        return "perfect/companyperfect";
    }

    @RequestMapping("manageindex")
    public String companymanage() {

        return "manage/manageindex";
    }
}
