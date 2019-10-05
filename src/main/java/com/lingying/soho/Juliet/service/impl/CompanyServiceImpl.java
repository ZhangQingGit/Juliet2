package com.lingying.soho.Juliet.service.impl;

import com.lingying.soho.Juliet.entity.Bid_Relation;
import com.lingying.soho.Juliet.entity.CompanyV;
import com.lingying.soho.Juliet.mapper.CompanyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.service.CompanyService;

import java.util.List;

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

    @Override
    public List<Bid_Relation> findIntentionPnameByCname(String cname) {
        return mapper.findIntentionPnameByCname(cname);
    }

    @Override
    public List<Bid_Relation> findIntentionTnameByPname(String pname) {
        return mapper.findIntentionTnameByPname(pname);
    }

    @Override
    public Integer updateCompanyInformationByUid(Company company) {
        return mapper.updateCompanyInformationByUid(company);
    }


}
