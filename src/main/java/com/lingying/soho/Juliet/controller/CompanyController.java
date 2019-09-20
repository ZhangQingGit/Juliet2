package com.lingying.soho.Juliet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lingying.soho.Juliet.service.CompanyService;

@Controller
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    
    @RequestMapping("companyReg")
    public String companyReg(String cname, String synopsis, Integer uid) {
        Integer i = companyService.companyReg(cname, synopsis, uid);
        if(i==1) {
            return "indetal";
        }
        return "perfect";
    }
}
