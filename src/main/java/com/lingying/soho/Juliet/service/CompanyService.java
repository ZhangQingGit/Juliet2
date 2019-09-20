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
}
