package com.lingying.soho.Juliet.mapper;

import org.apache.ibatis.annotations.Param;

import com.lingying.soho.Juliet.entity.Bid_Relation;

public interface Bid_RelationMapper {
    /**
          *添加一次竞标意向
     * @param tname 团队名字
     * @param pname 项目名字
     * @param cname 公司名字
     * @return
     */
    Integer addRelation(@Param("tname") String tname, @Param("pname") String pname, @Param("cname") String cname);
    /**
     * 查看这一个组合是否存在
     * @param tname 团队名字
     * @param pname 项目名字
     * @param cname 公司名字
     * @return
     */
    Bid_Relation findExist(@Param("tname") String tname, @Param("pname") String pname, @Param("cname") String cname);
    /**
     *添加一次竞标意向
     * @param tname 团队名字
     * @param pname 项目名字
     * @param cname 公司名字
     * @return
     */
    Integer delRelation(@Param("tname") String tname, @Param("pname") String pname, @Param("cname") String cname);
}
