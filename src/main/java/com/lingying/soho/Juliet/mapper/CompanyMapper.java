package com.lingying.soho.Juliet.mapper;

import org.apache.ibatis.annotations.Param;

import com.lingying.soho.Juliet.entity.Company;

public interface CompanyMapper {
   /**
    * 根据uid 查看用户是否存在，一个uid对应一个公司
    * @param uid
    * @return
    */
    Company findByUid(Integer uid);
    /**
     * 公司身份初步注册
     * @param cname 公司名
     * @param synopsis 公司/个人简介
     * @param uid 对应的uid
     * @return 受影响行数
     */
    Integer companyReg(@Param("cname") String cname
            , @Param("synopsis") String synopsis
            , @Param("uid") Integer uid);
    
}
