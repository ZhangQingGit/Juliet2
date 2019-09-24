package com.lingying.soho.Juliet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.mapper.CompanyMapper;
import com.lingying.soho.Juliet.service.CompanyService;
@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyMapper mapper;
    @Override
    public Integer companyReg(String cname, String synopsis, Integer uid) {
        
        return mapper.companyReg(cname, synopsis, uid);
    }
    
    @Override
    public String getNameById(Integer uid) {
        Company company = mapper.findByUid(uid);
        if(company!=null) {
            return company.getCname();
        }
        return null;
    }

}
