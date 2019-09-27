package com.lingying.soho.Juliet.service.impl;

import com.lingying.soho.Juliet.entity.CompanyV;
import com.lingying.soho.Juliet.mapper.CompanyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.service.CompanyService;
@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyMapper mapper;


    @Override
    public Integer companyReg(String cname, String synopsis, Integer uid, String cemail, String cphone, String involve, String homepage, String capital) {
        return mapper.companyReg(cname, synopsis, uid, cemail, cphone, involve,homepage, capital);
    }

    @Override
    public String getNameById(Integer uid) {
        Company company = mapper.findByUid(uid);
        if(company!=null) {
            return company.getCname();
        }
        return null;
    }

    @Override
    public CompanyV taskShow(String cname) {
        return mapper.getComByName(cname);
    }

    @Override
    public Company findById(Integer cid) {
        return mapper.findById(cid);
    }

}
