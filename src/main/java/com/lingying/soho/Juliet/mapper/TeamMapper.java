package com.lingying.soho.Juliet.mapper;

import org.apache.ibatis.annotations.Param;

import com.lingying.soho.Juliet.entity.Team;

public interface TeamMapper {
    
    /**
     * 根据uid 查看用户是否存在，一个uid对应一个团队
     * @param uid
     * @return
     */
     Team findByUid(Integer uid);
    /**
     * 团队身份初步注册
     * @param tname 团队名
     * @param experience 项目经历
     * @param uid 对应的uid
     * @return 受影响行数
     */
    Integer teamReg(@Param("tname") String tname
            , @Param("experience") String experience
            , @Param("uid") Integer uid);
}
