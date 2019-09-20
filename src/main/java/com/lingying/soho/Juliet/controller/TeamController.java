package com.lingying.soho.Juliet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lingying.soho.Juliet.service.TeamService;

@Controller
public class TeamController {
    @Autowired
    private TeamService teamService;
    
    @RequestMapping("teamReg")
    public String teamReg(String tname, String experience, Integer uid) {
        Integer i = teamService.teamReg(tname, experience, uid);
        if(i==1) {
            return "indetal";
        }
         return "perfect";
    }
}
