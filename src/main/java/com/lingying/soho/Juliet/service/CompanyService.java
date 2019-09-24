package com.lingying.soho.Juliet.service;


public interface CompanyService {
    /**
     * 初步注册
     * @param cname
     * @param synopsis
     * @param uid
     * @return
     */
    Integer companyReg( String cname, String synopsis, Integer uid);
    /**
     * 根据uid查询Company名字
     * @param uid
     * @return
     */
    String getNameById(Integer uid);
}
