package com.lingying.soho.Juliet.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lingying.soho.Juliet.service.CompanyService;

@Controller
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    
    @RequestMapping("companyReg")
    public String companyReg(String cname, String synopsis, HttpSession session) {
        Object obj = session.getAttribute("uid");
        if(obj!=null) {
            Integer uid = (int)obj;
            Integer i = companyService.companyReg(cname, synopsis, uid);
            if(i==1) {
                return "indetal";
            }
        }
        return "perfect";
    }
}
