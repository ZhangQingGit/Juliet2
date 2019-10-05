package com.lingying.soho.Juliet.service;


import com.lingying.soho.Juliet.entity.Bid_Relation;
import com.lingying.soho.Juliet.entity.Company;
import com.lingying.soho.Juliet.entity.CompanyV;

import java.util.List;

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

    /**
     * 根据canme查询该用户有意向的项目名
     * @param cname
     * @return
     */
    List<Bid_Relation> findIntentionPnameByCname(String cname);

    /**
     * 根据panme查询该用户有意向的项目名下的团队名
     * @param pname
     * @return
     */
    List<Bid_Relation> findIntentionTnameByPname(String pname);

    /**
     * 修改个人/公司的个人信息
     * @param company
     * @return
     */
    Integer updateCompanyInformationByUid(Company company);
}
