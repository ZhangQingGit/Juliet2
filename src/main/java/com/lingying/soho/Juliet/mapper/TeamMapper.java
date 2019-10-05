package com.lingying.soho.Juliet.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.lingying.soho.Juliet.entity.Team;
import com.lingying.soho.Juliet.entity.TeamV;

public interface TeamMapper {
    
    /**
     * 根据uid 查看用户是否存在，一个uid对应一个团队
     * @param uid
     * @return
     */
     Team findByUid(Integer uid);
     /**
      * 
     * 团队身份注册
     * @param tname 团队名
     * @param experience 项目经历
     * @param uid 对应的uid
     * @param temail 邮箱
     * @param tphone 手机
     * @param tasktype 承接任务类型
     * @param taskcount 承接任务个数
     * @param fintask 完成任务个数
     * @return 受影响行数
     */
    Integer teamReg(@Param("tname") String tname
            , @Param("experience") String experience
            , @Param("uid") Integer uid
            , @Param("temail") String temail
            , @Param("tphone") String tphone
            , @Param("tasktype") String tasktype
            , @Param("taskcount") Integer taskcount
            , @Param("fintask") Integer fintask);
    /**
     * indetal 页展示最新团队
     * @return
     */
    List<TeamV> findByLimit();

    /**
     * 个人详情页
     * @return
     */
    Team findById(Integer tid);

    /**
     * 根据团队名称去查询tid
     * @param tname
     * @return
     */
    Integer findTidByTname(String tname);
}
