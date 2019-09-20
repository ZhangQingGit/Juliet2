package com.lingying.soho.Juliet.service;


public interface TeamService {
    /**
     * 初步注册
     * @param tname
     * @param experience
     * @param uid
     * @return
     */
    Integer teamReg( String tname, String experience, Integer uid);
}
