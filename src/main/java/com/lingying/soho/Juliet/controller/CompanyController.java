package com.lingying.soho.Juliet.controller;

import javax.servlet.http.HttpSession;

import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.entity.CompanyV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.service.CompanyService;
import com.lingying.soho.Juliet.util.ResponseResult;

@Controller
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    
    @RequestMapping("companyReg")
    public String companyReg(String cname, String synopsis, HttpSession session, String cemail, String cphone, String involve, String homepage, String capital) {
        Object obj = session.getAttribute("uid");
        if(obj!=null) {
            Integer uid = (int)obj;
            Integer i = companyService.companyReg(cname, synopsis, uid, cemail, cphone, involve,homepage, capital);
            if(i==1) {
                return "indetal";
            }
        }
        return "perfect";
    }

    @RequestMapping("taskShow")
    @ResponseBody
    public ResponseResult<CompanyV> taskShow(String cname){
        CompanyV comv = companyService.taskShow(cname);
        return new ResponseResult<>(200, comv);
    }

    @RequestMapping("com_details")
    @ResponseBody
    public ResponseResult<Company> details(Integer cid){
        Company company = companyService.findById(cid);
        return new ResponseResult<>(200, company);
    }
    
}
