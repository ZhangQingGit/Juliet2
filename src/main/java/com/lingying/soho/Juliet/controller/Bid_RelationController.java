package com.lingying.soho.Juliet.controller;

import com.lingying.soho.Juliet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.service.Bid_RelationService;
import com.lingying.soho.Juliet.util.ResponseResult;

import javax.servlet.http.HttpSession;

@Controller
public class Bid_RelationController extends BaseController{
    
    @Autowired
    private Bid_RelationService bidService;
    @Autowired
    private UserService userService;
    
    @RequestMapping("bid_relation")
    public String addRelation(String tname, String pname, String cname, HttpSession session){
        Integer uid = getUidFromSession(session);
        Boolean isHave = userService.findToTeamExit(uid);
        if(isHave){
            return "perfect";
        }
        int row = bidService.biddingPeo(tname, pname, cname);
        if(row==1) {
            return "taskdetails";
        }else {
           return "taskdetails";
        }
    }
    
    @RequestMapping("del_relation")
    @ResponseBody
    public ResponseResult<String> delRelation(String tname, String pname, String cname){
       int row = bidService.Delbidding(tname, pname, cname);
       if(row==1) {
           return new ResponseResult<>(200,"取消意向成功！");
       }
       return new ResponseResult<>(201,"不可重复表明意向！");
    }
}
