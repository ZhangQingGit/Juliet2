package com.lingying.soho.Juliet.controller;

import javax.servlet.http.HttpSession;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingying.soho.Juliet.service.UserService;
import com.lingying.soho.Juliet.util.Randoms;
import com.lingying.soho.Juliet.util.ResponseResult;
import com.lingying.soho.Juliet.util.Email.EmailUtil;
import com.lingying.soho.Juliet.util.msg.MsgUtil;

@Controller
public class UserController {
    
    @Autowired
    private UserService userService;
   
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
    
    @RequestMapping("reg")
    public ResponseResult<String> reg(String username, String password, Integer usertype, String code, HttpSession session){
        Object phone = session.getAttribute(username);        
        if(phone!=null) {
            String str = (String)phone;
            if(str.equals(code)) {
                Integer i = userService.register(username, password, usertype);
                if(i==-1) {
                    return new ResponseResult<>(201, "用户名重复！");
                }
                return new ResponseResult<>(200, "注册成功！");
            }else {
                return new ResponseResult<>(201, "验证码错误！");
            }
        }
        return new ResponseResult<>(201, "请获取验证码！");
    }
    
    @RequestMapping("email")
    @ResponseBody
    public ResponseResult<String> yanzheng(HttpSession session, String email){
        String key = Randoms.randomInt();
        EmailUtil.send(email, "验证码", "验证码为："+key, null);
        session.setAttribute(email, key);
        return new ResponseResult<>(201, "验证码已发送！");
    }
    
    @RequestMapping("phone")
    @ResponseBody
    public ResponseResult<String> phone(HttpSession session, String phone){
        String key = Randoms.randomInt();
        MsgUtil.msgUtil(phone, key);
        session.setAttribute(phone, key);
        return new ResponseResult<>(201, "验证码已发送！");
    }
    
}
