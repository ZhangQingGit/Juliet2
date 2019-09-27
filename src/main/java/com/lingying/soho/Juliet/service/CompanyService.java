package com.lingying.soho.Juliet.service;


import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.entity.CompanyV;

public interface CompanyService {
    /**
     * 公司注册
     * @param cname
     * @param synopsis
     * @param uid
     * @param cemail
     * @param cphone
     * @param involve
     * @param homepage
     * @param capital
     * @return
     */
    Integer companyReg(String cname, String synopsis, Integer uid ,String cemail, String cphone, String involve, String homepage, String capital);
    /**
     * 根据uid查询Company名字
     * @param uid
     * @return
     */
    String getNameById(Integer uid);

    /**
     * task页展示公司的信息
     * @param cname
     * @return
     */
    CompanyV taskShow(String cname);

    /**
     * 根据id查询公司详情信息
     * @param cid
     * @return
     */
    Company findById(Integer cid);
}
