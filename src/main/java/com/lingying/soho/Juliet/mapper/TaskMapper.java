package com.lingying.soho.Juliet.mapper;

import org.apache.ibatis.annotations.Param;

import com.lingying.soho.Juliet.entity.Task;

public interface TaskMapper {
    /**
     * 添加一条任务信息
     * @param cname 信息发布的公司名
     * @param cemail 信息发布的邮箱
     * @param tdate 信息发布时间
     * @param pname 项目名
     * @param psynopsos 项目描述
     * @param pmoney 项目预定金额
     * @param findate 任务预计完成时间
     * @param tasktype 任务类型
     * @param tbidding 竞标团队 可以为null
     * @return 受影响行数
     */
    Integer addTask(@Param("cname")String cname
            ,@Param("cemail")String cemail,
            @Param("tdate")String tdate
            ,@Param("pname")String pname,
            @Param("psynopsis")String psynopsis
            ,@Param("pmoney")String pmoney,
            @Param("findate")String findate
            ,@Param("tasktype")String tasktype,
            @Param("tbidding")String tbidding);
    /**
     * 根据cid 查询一条信息
     * @param cid
     * @return
     */
    Task findById(Integer rid);
    
}
