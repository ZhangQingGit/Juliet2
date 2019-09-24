package com.lingying.soho.Juliet.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.entity.TeamV;
import com.lingying.soho.Juliet.service.TeamService;
import com.lingying.soho.Juliet.util.ResponseResult;

@Controller
public class TeamController {
    @Autowired
    private TeamService teamService;
    
    @RequestMapping("teamReg")
    public String teamReg(String tname, String experience, HttpSession session
            , String temail, String tphone, String tasktype) {
        Object obj = session.getAttribute("uid");
        if(obj!=null) {
            Integer uid = (int)obj;
            Integer i = teamService.teamReg(tname, experience, uid, temail, tphone, tasktype, 0, 0);
            session.removeAttribute("uid");
            if(i==1) {
                return "login";
            }
        }
         return "perfect";
    }
    
    @RequestMapping("showTeam")
    @ResponseBody
    public ResponseResult<List<TeamV>> showList(){
        List<TeamV> list = teamService.show();
        return new ResponseResult<>(200,list);
    }
    
}
