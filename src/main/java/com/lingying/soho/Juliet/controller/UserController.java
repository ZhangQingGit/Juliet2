package com.lingying.soho.Juliet.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {
    
    @RequestMapping("list")
    public String list() {
        
        return "list";
    }
    
    @RequestMapping("add")
    public String add() {
        
        return "add";
    }
    
    @RequestMapping("updata")
    public String updata() {
        
        return "updata";
    }
    @RequestMapping("unauth")
    public String unauth() {
        
        return "unauth";
    }
   
    @RequestMapping("login")
    public String login(String username, String password, Model model) {
        // 获取subject
        Subject subject = SecurityUtils.getSubject();
        // 封装用户数据
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        // 执行登录
        try {
            subject.login(token);
            
            return "list";
        } catch (UnknownAccountException e) {
            //用户名不存在
            model.addAttribute("msg", "用户名不存在");
            return "login";
        }catch (IncorrectCredentialsException e) {
            //密码错误
            model.addAttribute("msg", "密码错误");
            return "login";
        }
        
    }
    
    
    
    
    
    
}
