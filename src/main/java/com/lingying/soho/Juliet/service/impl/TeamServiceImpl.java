package com.lingying.soho.Juliet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingying.soho.Juliet.mapper.TeamMapper;
import com.lingying.soho.Juliet.service.TeamService;
@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamMapper mapper;
    @Override
    public Integer teamReg(String tname, String experience, Integer uid) {
        
        return mapper.teamReg(tname, experience, uid);
    }

}
