package com.lingying.soho.Juliet.service;

import java.util.List;

import com.lingying.soho.Juliet.entity.TeamV;

public interface TeamService {
    /**
     * 团队注册
     * @param tname
     * @param experience
     * @param uid
     * @param temail
     * @param tphone
     * @param tasktype
     * @param taskcount
     * @param fintask
     * @return
     */
    Integer teamReg( String tname, String experience, Integer uid
            , String temail, String tphone, String tasktype
            , Integer taskcount, Integer fintask);
    /**
     * 展示用
     * @return
     */
    List<TeamV> show();
}
