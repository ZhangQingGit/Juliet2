package com.lingying.soho.Juliet.mapper;

import com.lingying.soho.Juliet.entity.CompanyV;
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
     * 公司注册
     * @param cname 公司名
     * @param synopsis 公司简介
     * @param uid 用户id
     * @param cemail 公司邮箱
     * @param cphone 公司联系方式
     * @param involve 涉及领域
     * @param homepage 公司主页
     * @param capital 注册资金
     * @return 受影响行数
     */
    Integer companyReg(@Param("cname") String cname
            , @Param("synopsis") String synopsis
            , @Param("uid") Integer uid
            , @Param("cemail") String cemail
            , @Param("cphone") String cphone, @Param("involve") String involve
            , @Param("homepage") String homepage, @Param("capital") String capital);

    /**
     * 根据公司名查出一条公司信息，用于任务列表的展示
     * @param cname
     * @return
     */
    CompanyV getComByName(String cname);

    /**
     * 根据cid查出公司的具体信息进行公司详情页的展示
     * @param cid
     * @return
     */
    Company findById(Integer cid);
}
