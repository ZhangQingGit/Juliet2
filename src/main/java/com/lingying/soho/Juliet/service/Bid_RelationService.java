package com.lingying.soho.Juliet.service;

public interface Bid_RelationService {
    /**
     * 添加一条竞标意向
     * @param tname 团队名字
     * @param pname 项目名字
     * @param cname 公司名字
     * @return
     */
    Integer biddingPeo(String tname, String pname, String cname);
    
    /**
     * 删除一条竞标意向
     * @param tname 团队名字
     * @param pname 项目名字
     * @param cname 公司名字
     * @return
     */
    Integer Delbidding(String tname, String pname, String cname);
}
